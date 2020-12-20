import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationContext } from "../../../context/RegistrationContext";
import { Inputfield, Button } from "../../../components";
import * as S from "./Register.style";

function registerUser(
  email,
  password,
  history,
  regNotification,
  setNotification
) {
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "User has been registered succsessfully.") {
        regNotification.setState(
          "Your registration was successfull. Please enter your login details."
        );
        history.push("/login");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function Register() {
  const regNotification = useContext(RegistrationContext);
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
          registerUser(
            email,
            password,
            history,
            regNotification,
            setNotification
          );
        }}
      >
        <S.Title>Register</S.Title>
        <S.Subtitle>{notification && notification}</S.Subtitle>
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
