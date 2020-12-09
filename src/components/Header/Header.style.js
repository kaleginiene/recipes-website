import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding: 1.5em 1.5em 0 1.5em;
  background: transparent;
`;
export const Wrapper = styled.div`
  width: 56em;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 1em;
  border-bottom: 2px solid ${(props) => props.theme.secondary.background};
`;

export const Logo = styled.img`
  max-height: 4em;
  max-width: 100%;
`;

export const Actions = styled.nav`
  Button {
    background: transparent;
    border: 1px solid ${(props) => props.color};
  }
  Button:not(:last-child) {
    margin-right: 1em;
  }
  Button:hover {
    background-color: #fff;
    color: #1b261f;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.2em;
  color: ${(props) => props.color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 1em;
  }
`;
