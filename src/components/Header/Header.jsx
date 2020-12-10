import React, { useContext } from "react";
import * as S from "./Header.style";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logoImg from "../../assets/logo.png";
import { Button } from "../../components";

function Header() {
  const currentLocation = useLocation();
  const history = useHistory();
  const auth = useContext(AuthContext);

  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          {currentLocation.pathname !== "/" && (
            <S.Logo src={logoImg} alt="Logo" />
          )}
        </Link>
        <S.Actions>
          <S.StyledLink
            to="/"
            color={() => {
              if (currentLocation.pathname === "/") {
                return "#fff";
              } else {
                return "#154734";
              }
            }}
          >
            Home
          </S.StyledLink>
          <S.StyledLink
            to="/about"
            color={() => {
              if (currentLocation.pathname === "/") {
                return "#fff";
              } else {
                return "#154734";
              }
            }}
          >
            My recipes
          </S.StyledLink>
          <S.StyledLink
            to="/add-recipe"
            color={() => {
              if (currentLocation.pathname === "/") {
                return "#fff";
              } else {
                return "#154734";
              }
            }}
          >
            Add Recipe
          </S.StyledLink>
          {!auth.token && (
            <>
              <Button
                color={() => {
                  if (currentLocation.pathname === "/") {
                    return "#fff";
                  } else {
                    return "#154734";
                  }
                }}
                handleClick={() => history.push("/register")}
              >
                Register
              </Button>
              <Button
                color={() => {
                  if (currentLocation.pathname === "/") {
                    return "#fff";
                  } else {
                    return "#154734";
                  }
                }}
                handleClick={() => history.push("/login")}
              >
                Login
              </Button>
            </>
          )}
          {auth.token && (
            <Button
              color={() => {
                if (currentLocation.pathname === "/") {
                  return "#fff";
                } else {
                  return "#154734";
                }
              }}
              handleClick={() =>
                auth.updateToken(localStorage.removeItem("token"))
              }
            >
              Logout
            </Button>
          )}
        </S.Actions>
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
