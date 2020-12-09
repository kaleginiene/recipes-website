import React from "react";
import { Inputfield, Button } from "../../../components";
import * as S from "./Login.style";

function Login() {
  return (
    <S.Main>
      <S.Form>
        <S.Title>Login</S.Title>
        <Inputfield
          type="text"
          placeholder="e.g. email@email.com"
          label="Email"
        />
        <Inputfield type="password" placeholder="Password" label="Password" />
        <Button type="submit" color="secondary">
          Login
        </Button>
      </S.Form>
    </S.Main>
  );
}

export default Login;
