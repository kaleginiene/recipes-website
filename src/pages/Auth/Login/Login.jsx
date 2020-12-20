import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { RegistrationContext } from "../../../context/RegistrationContext";
import { Inputfield, Button } from "../../../components";
import * as S from "./Login.style";

function loginUser(email, password, auth, history, setNotification) {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      auth.updateToken(data.token);
      if (data.msg === "Logged In") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function Login() {
  const auth = useContext(AuthContext);
  const regNotification = useContext(RegistrationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState();
  const history = useHistory();

  return (
    <S.Main>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(email, password, auth, history, setNotification);
        }}
      >
        <S.Title>Login</S.Title>
        <S.Subtitle>{regNotification.state}</S.Subtitle>
        <S.Subtitle>{notification && notification}</S.Subtitle>
        <Inputfield
          type="text"
          placeholder="e.g. email@email.com"
          label="Email"
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Inputfield
          type="password"
          placeholder="Password"
          label="Password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <Button color="secondary" type="submit">
          Login
        </Button>
      </S.Form>
    </S.Main>
  );
}

export default Login;
