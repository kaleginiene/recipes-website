import styled from "styled-components";
import { Meal, Clock, Heart, Bin, FullHeart } from "../../assets/icons";

export const Card = styled.div`
  width: calc(33.33% - 1em);
  max-width: 100%;
  margin: 0.5em;
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  padding-bottom: 6em;
  height: 20em;
  text-align: center;
  cursor: pointer;
  &:nth-child(3n) {
    margin-right: 0;
    @media only screen and (max-width: 691px) {
      margin-right: 0.5em;
    }
  }
  &:nth-child(4) {
    margin-left: 0;
    @media only screen and (max-width: 691px) {
      margin-left: 0.5em;
    }
  }
  &:nth-child(3n + 1) {
    margin-left: 0;
    @media only screen and (max-width: 691px) {
      margin-left: 0.5em;
    }
  }

  &:first-child {
    margin-left: 0;
    @media only screen and (max-width: 691px) {
      margin-left: 0.5em;
    }
  }
  @media only screen and (max-width: 691px) {
    width: calc(100% - 1em);
    margin: 0.5em;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
  margin-bottom: 0.5em;
  &&.none {
    width: 80%;
    padding: 1.8em 1.5em;
    @media only screen and (max-width: 691px) {
      padding: 1em;
      width: 70%;
    }
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1em;
`;

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  &&.parent {
    justify-content: space-around;
    padding: 0 1em;
  }
  &&.icons {
    flex-direction: column;
    justify-content: center;
    width: 33.33%;
  }
  &&.main {
    width: 100%;
    flex-wrap: wrap;
    box-sizing: border-box;
    @media only screen and (max-width: 691px) {
      display: block;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 0.8em;
  text-align: center;
`;

export const Difficulty = styled.div`
  width: 1.5em;
  max-height: 1.5em;
  margin-right: 0.5em;
  border-radius: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`;

export const Level = styled.div`
  width: 0.4em;
  height: 0.4em;
  margin: 0.1em;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.primary.background};
  &:nth-child(1) {
    background-color: ${(props) =>
      props.level === "easy" ? props.theme.primary.background : "none"};
  }
  &:nth-child(odd) {
    background-color: ${(props) =>
      props.level === "need some effort"
        ? props.theme.primary.background
        : "none"};
  }
  &:nth-child(-n + 3) {
    background-color: ${(props) =>
      props.level === "expert" ? props.theme.primary.background : "none"};
  }
`;

export const Icon = styled.div`
  background-size: cover;
  padding: 0.2em;
  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;
  border-radius: 0.2em;
  margin-right: 1em;
  &&.duration {
    background-image: url(${Clock});
    margin: 0 auto;
  }

  &&.add {
    background-image: url(${Heart});
    position: absolute;
    right: 1em;
    bottom: 1em;
    width: 2.3em;
    height: 2.2em;
    cursor: pointer;
  }
  &&.full {
    background-image: url(${FullHeart});
    position: absolute;
    right: 1em;
    bottom: 1em;
    width: 2.3em;
    height: 2.2em;
    cursor: pointer;
  }
  &&.remove {
    background-image: url(${Bin});
    position: absolute;
    right: 1em;
    bottom: 1em;
    width: 2.3em;
    height: 2.3em;
    cursor: pointer;
  }
  &&.type {
    background-image: url(${Meal});
    margin: 0 auto;
  }
`;
