import styled from "styled-components";
import HerbsImg from "../../assets/content/herbs.jpg";

export const Main = styled.main`
  min-height: 65vh;
  background-image: linear-gradient(
      90deg,
      rgba(74, 96, 82, 0.4) 17%,
      rgba(39, 54, 44, 0.4) 75%
    ),
    url(${HerbsImg});
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: -5.1em;
  margin-top: -8em;
  padding-top: 8em;
`;

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 1.5em;
  text-align: right;
  margin-bottom: 6em;
  max-width: 100%;
  Button {
    background-color: ${(props) => props.theme.primary.background};
    color: ${(props) => props.theme.primary.fonts};
  }
  Button:hover {
    border: 1px solid ${(props) => props.theme.secondary.fonts};
  }
  textarea {
    min-height: 10em;
    border: 2px solid ${(props) => props.theme.primary.background};
    background-color: rgba(21, 71, 52, 0.1);
    margin-bottom: 2em;
  }
  Input,
  Select {
    border: 2px solid ${(props) => props.theme.primary.background};
    background-color: rgba(21, 71, 52, 0.1);
    margin-bottom: 2em;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  max-width: 100%;
  Select {
    padding: 0.4em;
    margin: 0;
    margin-bottom: 0.5em;
    @media only screen and (max-width: 691px) {
      margin-bottom: 2em;
    }
  }
  @media only screen and (max-width: 691px) {
    display: block;
    text-align: left;
    margin-bottom: 0;
  }
  .mobile-flex {
    margin: 0;
    @media only screen and (max-width: 691px) {
      display: flex;
      align-items: center;
      margin-bottom: 2em;
    }
  }
`;

export const Duration = styled.div`
  padding: 0.5em 0;
  width: 5.5em;
  font-size: 1em;
  color: ${(props) => props.theme.primary.background};
  box-sizing: border-box;
  max-width: 100%;
  Input {
    color: ${(props) => props.theme.primary.background};
    font-size: 1.2em;
    text-align: center;
    margin: 0;
  }
  Input::placeholder {
    color: ${(props) => props.theme.primary.background};
    font-size: 0.9em;
    text-align: center;
  }
  @media only screen and (max-width: 691px) {
    display: block;
    padding: 0;
  }
`;

export const Label = styled.label`
  font-size: 1.1em;
  text-align: left;
  font-weight: bold;
  margin: 0;
  padding-right: 0.2em;
  &:not(:first-child) {
    margin-left: 1.2em;
    @media only screen and (max-width: 691px) {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 691px) {
    padding: 0;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.primary.background};
  font-size: 2em;
`;
