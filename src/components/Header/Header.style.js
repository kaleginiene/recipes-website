import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding: 1em;
  border-bottom: 2px solid ${(props) => props.theme.primary.background};
  margin-bottom: 1em;
`;
export const Wrapper = styled.div`
  width: 56em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  font-size: 0.9em;
  color: #222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
