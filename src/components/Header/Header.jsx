import React, { useContext, useState } from "react";
import * as S from "./Header.style";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logoImg from "../../assets/logo.svg";
import { Button } from "../../components";

function Header() {
  const currentLocation = useLocation();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [mobileNav, setMobileNav] = useState("");
  console.log(currentLocation);

  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          {currentLocation.pathname !== "/" && (
            <S.Logo src={logoImg} alt="Logo" />
          )}
        </Link>
        {currentLocation.pathname !== "/" && <S.Title>Anyone can COOK</S.Title>}

        <S.Actions>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/my-recipes">My recipes</S.StyledLink>
          <S.StyledLink to="/add-recipe">Add Recipe</S.StyledLink>
          {!auth.token && (
            <>
              <Button handleClick={() => history.push("/register")}>
                Register
              </Button>
              <Button handleClick={() => history.push("/login")}>Login</Button>
            </>
          )}
          {auth.token && (
            <Button
              handleClick={() => {
                auth.updateToken(localStorage.removeItem("token"));
                history.push("/");
              }}
            >
              Logout
            </Button>
          )}
        </S.Actions>
        {/* mobile navigation */}

        <S.Burger
          onClick={() => {
            if (mobileNav === "show") {
              setMobileNav("hide");
            } else {
              setMobileNav("show");
            }
          }}
        >
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.Burger>
        {mobileNav === "show" && (
          <S.MobileNav>
            <S.ExitBtn onClick={() => setMobileNav("hide")} />
            <S.Ul>
              <S.ListItem>
                <S.Icon className="home" />
                <S.StyledLink
                  to="/"
                  onClick={() => setMobileNav("hide")}
                  className="mobile"
                >
                  Home
                </S.StyledLink>
              </S.ListItem>
              <S.ListItem>
                <S.Icon className="chef" />
                <S.StyledLink
                  to="/my-recipes"
                  onClick={() => setMobileNav("hide")}
                  className="mobile"
                >
                  My Recipes
                </S.StyledLink>
              </S.ListItem>
              <S.ListItem>
                <S.Icon className="add" />
                <S.StyledLink
                  to="/add-recipe"
                  onClick={() => setMobileNav("hide")}
                  className="mobile"
                >
                  Add recipe
                </S.StyledLink>
              </S.ListItem>
              {!auth.token && (
                <S.ListItem>
                  <Button handleClick={() => history.push("/register")}>
                    Register
                  </Button>
                  <Button handleClick={() => history.push("/login")}>
                    Login
                  </Button>
                </S.ListItem>
              )}
              {auth.token && (
                <Button
                  handleClick={() => {
                    auth.updateToken(localStorage.removeItem("token"));
                    history.push("/");
                  }}
                >
                  Logout
                </Button>
              )}
            </S.Ul>
          </S.MobileNav>
        )}
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
