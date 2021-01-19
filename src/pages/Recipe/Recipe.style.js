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
  margin: 0 auto;
  padding: 1em 1.5em;
  max-width: 100%;
  min-height: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 691px) {
    display: block;
  }
`;

export const Block = styled.div`
  width: 60%;
  max-width: 100%;

  @media only screen and (max-width: 691px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.secondary.fonts};
  margin-top: 0;

  @media only screen and (max-width: 691px) {
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.secondary.fonts};
  margin-top: 0.5em;

  &&.center {
    text-align: center;
  }

  @media only screen and (max-width: 691px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  margin: 0 2em 0.5em 0.5em;
  width: calc(40% - 3em);
  max-height: 20em;
  float: left;
  box-shadow: -4px 7px 15px 15px rgba(0, 0, 0, 0.3);
  object-fit: cover;

  @media only screen and (max-width: 691px) {
    width: 100%;
    margin: 0;
    margin-bottom: 2em;
  }
`;

export const Article = styled.article`
  padding: 0 1.5em;
  font-size: 1.2em;

  ul {
    display: block;
    li {
      width: 100%;
      text-align: justify;
    }
  }

  @media only screen and (max-width: 691px) {
    font-size: 1em;
  }
`;

export const UL = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    width: 50%;
    list-style: none;
    margin-bottom: 0.5em;
  }

  @media only screen and (max-width: 691px) {
    text-align: center;
  }
`;
