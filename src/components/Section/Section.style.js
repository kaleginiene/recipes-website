import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1em;
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 56em;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
