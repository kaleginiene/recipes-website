import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1.5em;
  box-sizing: border-box;
  max-width: 100%;
  @media only screen and (max-width: 691px) {
    padding: 1em;
  }
`;

export const Container = styled.section`
  width: 56em;
  max-width: 100%;
  margin: 0 auto;
  width: ${(props) => (props.width ? props.width + "em" : "none")};
  background: #${(props) => props.background};
  padding: 1.5em;
`;
