import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { Inputfield, Button } from "../../../components";
import * as S from "./Register.style";

function registerUser(email, password, auth, history, setNotification) {
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      auth.updateToken("Bearer " + data.token);
      if (data.msg === "User has been registered succsessfully.") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function Register() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState();
  const history = useHistory();
  console.log(email, password);

  return (
    <S.Main>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser(email, password, auth, history, setNotification);
        }}
      >
        <S.Title>Register</S.Title>
        <h3>{notification && notification}</h3>
        <Inputfield
          type="text"
          placeholder="e.g. email@email.com"
          label="Email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Inputfield
          type="password"
          placeholder="Password"
          label="Password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" color="secondary">
          Register
        </Button>
      </S.Form>
    </S.Main>
  );
}

export default Register;
