import styled from "styled-components";
import BackgroundImg from "../../../assets/content/auth.jpg";

export const Main = styled.main`
  min-height: 95vh;
  max-width: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(74, 96, 82, 0.4) 17%,
      rgba(39, 54, 44, 0.4) 75%
    ),
    url(${BackgroundImg});
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 20%;
  padding-top: 8em;
  margin-top: -8em;
  margin-bottom: -5.1em;
`;

export const Form = styled.form`
  padding: 1em;
  padding-top: 3em;
  width: 30em;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  Label {
    color: ${(props) => props.theme.primary.fonts};
    font-size: 1em;
  }
  Input {
    padding: 1em;
    font-size: 1.2em;
    max-width: 100%;
  }
  Button {
    font-size: 1.2em;
    background: ${(props) => props.theme.primary.button.background};
    border: ${(props) => props.theme.primary.button.border};
    color: ${(props) => props.theme.primary.fonts};
    margin: 1.5em 0;
  }
  Button:hover {
    background: ${(props) => props.theme.primary.fonts};
    color: ${(props) => props.theme.secondary.fonts};
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.primary.fonts};
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.primary.fonts};
  font-weight: normal;
`;
