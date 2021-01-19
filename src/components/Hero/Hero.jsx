import React from "react";
import { Inputfield } from "../../components";
import * as S from "./Hero.style";
import { Search } from "../../assets/icons";

function Hero({ title, url, callback, callbackButton }) {
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
            handleKeyUp={callback}
          />
        </S.InputWrapper>
      </S.Wrapper>
    </S.Hero>
  );
}

export default Hero;
