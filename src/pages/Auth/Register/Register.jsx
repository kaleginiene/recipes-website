import React from "react";
import { Inputfield, Button } from "../../../components";
import * as S from "./Register.style";

function Register() {
  return (
    <S.Main>
      <S.Form>
        <S.Title>Register</S.Title>
        <Inputfield
          type="text"
          placeholder="e.g. email@email.com"
          label="Email"
        />
        <Inputfield type="password" placeholder="Password" label="Password" />
        <Button type="submit" color="secondary">
          Register
        </Button>
      </S.Form>
    </S.Main>
  );
}

export default Register;
