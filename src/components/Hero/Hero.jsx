import React from "react";
import { Inputfield } from "../../components";
import * as S from "./Hero.style";

function Hero({ title, url }) {
  return (
    <S.Hero>
      <S.Wrapper>
        <S.FlexBlock>
          <S.Image src={url} alt="Chef" />
          <S.Title>{title}</S.Title>
        </S.FlexBlock>
        <Inputfield type="text" placeholder="Find your recipe..." />
      </S.Wrapper>
    </S.Hero>
  );
}

export default Hero;
