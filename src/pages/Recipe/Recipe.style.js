import styled from "styled-components";
import Recipe from "../../assets/content/recipe.jpg";

export const Main = styled.main`
  min-height: 79vh;
  background-image: linear-gradient(
      90deg,
      rgba(74, 96, 82, 0.4) 17%,
      rgba(39, 54, 44, 0.4) 75%
    ),
    url(${Recipe});
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: -5em;
  margin-top: -8em;
  padding: 8em 0;
  Section {
    background: rgba(255, 255, 255, 0.8);
  }
  @media only screen and (max-width: 768px) {
    padding: 8em 1em;
  }
`;
export const FlexBlock = styled.div`
  width: 56em;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 80%;
  flex-wrap: wrap;
  @media only screen and (max-width: 691px) {
    display: block;
  }
`;

export const Block = styled.div`
  width: 50%;
  max-width: 100%;
  @media only screen and (max-width: 691px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.secondary.fonts};
  margin-top: 0.5em;
  @media only screen and (max-width: 691px) {
    text-align: center;
  }
`;
export const Subtitle = styled.h2`
  color: ${(props) => props.theme.secondary.fonts};
  margin-top: 1em;
  &&.center {
    text-align: center;
  }
  @media only screen and (max-width: 691px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  float: left;
  margin: 1em;
  margin-right: 2em;
  box-shadow: -4px 7px 15px 15px rgba(0, 0, 0, 0.3);
  width: calc(50% - 3em);
  object-fit: cover;
  max-height: 20em;
  @media only screen and (max-width: 691px) {
    width: 100%;
    margin: 0;
    margin-bottom: 2em;
  }
`;

export const Article = styled.article`
  padding: 1em 0;
  text-align: justify;
  font-size: 1.2em;
  @media only screen and (max-width: 691px) {
    font-size: 1em;
  }
`;

export const UL = styled.ul`
  padding: 0;
  li {
    list-style: none;
    margin-bottom: 1em;
  }
  @media only screen and (max-width: 691px) {
    text-align: center;
  }
`;
