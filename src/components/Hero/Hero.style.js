import styled from "styled-components";
import HeroImg from "../../assets/hero.jpg";

export const Hero = styled.section`
  background-image: linear-gradient(
      90deg,
      rgba(74, 96, 82, 0.4) 17%,
      rgba(39, 54, 44, 0.4) 75%
    ),
    url(${HeroImg});
  background-position-y: 60%;
  background-size: cover;
  min-height: 33em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #fff;
  margin-top: -8em;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 56em;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 1em;
  input {
    background-color: rgba(255, 255, 255, 0.6);
    width: 80%;
    margin: 0 auto;
    margin-top: 1em;
    font-size: 1.2em;
    padding-left: 2.5em;
    border: 2px solid ${(props) => props.theme.primary.background};
    @media only screen and (max-width: 691px) {
      width: 100%;
      margin: 0;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const FlexBlock = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  @media only screen and (max-width: 691px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.5em;
  }
`;

export const Image = styled.img`
  max-height: 8em;
  @media only screen and (max-width: 691px) {
    max-height: 7.2em;
  }
`;

export const Search = styled.img`
  width: 2em;
  position: absolute;
  top: 1.6em;
  left: 6em;
  @media only screen and (max-width: 691px) {
    top: 0.5em;
    left: 0.5em;
  }
`;
