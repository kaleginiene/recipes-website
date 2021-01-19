import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1.5em;
  box-sizing: border-box;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    padding: 1em;
  }
`;

export const Container = styled.section`
  width: 75em;
  width: ${(props) => (props.width ? props.width + "em" : "none")};
  max-width: 100%;
  margin: 0 auto;
  background: #${(props) => props.background};
  box-sizing: border-box;
  padding: 1.5em 0;

  @media only screen and (max-width: 768px) {
    padding: 1em;
    max-width: 100%;
  }
`;
