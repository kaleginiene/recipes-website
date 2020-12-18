import React from "react";
import { Inputfield } from "../../components";
import * as S from "./Hero.style";
import { Search } from "../../assets/icons";

function Hero({ title, url, callback }) {
  return (
    <S.Hero>
      <S.Wrapper>
        <S.FlexBlock>
          <S.Image src={url} alt="Chef" />
          <S.Title>{title}</S.Title>
        </S.FlexBlock>
        <S.InputWrapper>
          <S.Search src={Search} />
          <Inputfield
            type="text"
            placeholder="Find your recipe..."
            handleChange={callback}
          />
        </S.InputWrapper>
      </S.Wrapper>
    </S.Hero>
  );
}

export default Hero;
