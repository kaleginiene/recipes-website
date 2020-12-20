import styled from "styled-components";

export const Main = styled.main`
  min-height: 97vh;
  max-width: 100%;
`;

export const FlexBlock = styled.div`
  width: 56em;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 80%;
  @media only screen and (max-width: 691px) {
    display: block;
  }
`;

export const HalfContainer = styled.div`
  width: calc(50% - 1.5em);
  box-sizing: border-box;
  padding: 4em 0 1.5em;
  &:first-child {
    margin-right: 5em;
    @media only screen and (max-width: 691px) {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 691px) {
    width: 100%;
    padding-top: 1em;
  }
`;

export const Image = styled.img`
  width: 100%;
  &.picture {
    @media only screen and (max-width: 691px) {
      display: none;
    }
  }
`;

export const H2 = styled.h2`
  margin-top: 0;
`;

export const Article = styled.article`
  padding: 1em 0;
  text-align: justify;
`;
