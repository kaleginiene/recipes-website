import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { Button } from "../../components";

function Header({ color }) {
  const current = window.location.pathname;

  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          {current !== "/" && <S.Logo src={logoImg} alt="Logo" />}
        </Link>
        <S.Actions>
          <S.StyledLink to="/" color={color}>
            Home
          </S.StyledLink>
          <S.StyledLink to="/about" color={color}>
            My recipes
          </S.StyledLink>
          <S.StyledLink to="/about" color={color}>
            Add Recipe
          </S.StyledLink>
          <Button>Register</Button>
          <Button>Login</Button>
        </S.Actions>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
