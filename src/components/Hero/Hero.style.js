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
  min-height: 30em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: #fff;
  margin-top: -8em;
`;

export const Wrapper = styled.div`
  width: 56em;
  margin: 0 auto;
  text-align: center;
  input {
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0 3em;
    @media only screen and (max-width: 691px) {
      width: 100%;
    }
  }
`;

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`;

export const Image = styled.img`
  max-height: 8em;
`;
