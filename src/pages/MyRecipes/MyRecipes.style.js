import styled from "styled-components";
import ListBack from "../../assets/content/list.jpg";

export const Main = styled.main`
  min-height: 79vh;
  background-image: linear-gradient(
      90deg,
      rgba(74, 96, 82, 0.4) 17%,
      rgba(39, 54, 44, 0.4) 75%
    ),
    url(${ListBack});
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: -5em;
  margin-top: -8em;
  padding: 8em 0;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.primary.fonts};
`;
export const Subtitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primary.fonts};
`;
