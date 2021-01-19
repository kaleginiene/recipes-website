import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.fonts
      : props.theme.secondary.fonts};
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.8em 2em;
  min-width: 8em;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.fonts
        : props.theme.secondary.hover.fonts};
    box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.focus.background
        : props.theme.secondary.focus.background};
  }
`;
