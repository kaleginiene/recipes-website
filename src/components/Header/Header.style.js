import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding: 1.5em 1em 1em 1em;
  border-bottom: 2px solid ${(props) => props.theme.primary.background};
  background-color: transparent;
`;
export const Wrapper = styled.div`
  width: 56em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.img`
  max-height: 4em;
  max-width: 100%;
`;

export const Actions = styled.nav`
  Button {
    background: transparent;
    border: 1px solid ${(props) => props.theme.primary.fonts};
    color: ${(props) => props.theme.primary.fonts};
    min-width: 8em;
  }
  Button:not(:last-child) {
    margin-right: 1em;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.3em;
  color: ${(props) => props.color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 1em;
  }
`;
