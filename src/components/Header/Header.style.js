import styled from "styled-components";
import { Link } from "react-router-dom";
import { Exit, Add, Chef, Home } from "../../assets/icons";

export const Header = styled.header`
  padding: 1.5em 1.5em 0 1.5em;
  background: transparent;
`;
export const Wrapper = styled.div`
  width: 75em;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 1em;
  background: transparent;
`;

export const Logo = styled.img`
  max-height: 5em;
  max-width: 100%;
`;

export const Actions = styled.nav`
  Button {
    background: transparent;
    border: 1px solid ${(props) => props.theme.primary.fonts};
    color: ${(props) => props.theme.primary.fonts};
  }
  Button:not(:last-child) {
    margin-right: 1em;
  }
  Button:hover {
    background-color: #fff;
    color: #1b261f;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2em;
  color: ${(props) => props.theme.primary.fonts};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 1em;
  }
  &&.mobile {
    @media only screen and (max-width: 768px) {
      color: ${(props) => props.theme.secondary.fonts};
      font-weight: bold;
    }
  }
`;

//Mobile menu style

export const Burger = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 3em;
    float: right;
    padding: 0.3em;
    border-radius: 0.5em;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;
export const Title = styled.h2`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    color: ${(props) => props.theme.primary.fonts};
    margin-left: 0.5em;
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    color: #443d3d;
    margin-left: 0.5em;
    font-size: 1.3em;
  }
`;
export const BurgerLine = styled.div`
  padding: 0.2em;
  background-color: ${(props) => props.theme.primary.fonts};
  border-radius: 2em;
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export const MobileNav = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    max-width: 95%;
    box-sizing: border-box;
    padding: 1em;
    position: absolute;
    right: 1em;
    left: 1em;
    top: 6.4em;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0em 5px;
    transition: ease-in 0.3s;
    border: 3px solid ${(props) => props.theme.primary.background};
    z-index: 99;
    Button {
      background: ${(props) => props.theme.primary.background};
      color: ${(props) => props.theme.primary.fonts};
    }
    Button:not(:last-child) {
      margin-right: 1em;
    }
    Button:hover {
      background-color: #fff;
      color: #1b261f;
    }
  }
`;
export const ExitBtn = styled.div`
  background-image: url(${Exit});
  width: 2em;
  height: 2em;
  border-radius: 2em;
  &:hover {
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const Ul = styled.ul`
  list-style: none;
  text-align: right;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 2em;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  background-size: cover;
  width: 2em;
  height: 2em;
  border-radius: 2em;
  margin-right: 0.8em;
  &:hover {
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }
  &&.home {
    background-image: url(${Home});
  }
  &&.add {
    background-image: url(${Add});
  }
  &&.chef {
    background-image: url(${Chef});
  }
`;
