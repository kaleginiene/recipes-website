import React from "react";
import * as S from "./RecipeCard.style";
import { MealNone } from "../../assets/icons";

function RecipeCard({ allRecipes }) {
  return (
    <S.FlexBlock className="main">
      {allRecipes &&
        allRecipes.map((item) => {
          return (
            <S.Card key={item.id}>
              {item.image === "undefined" || !item.image || !new Image() ? (
                <S.Image src={MealNone} className="none" />
              ) : (
                <S.Image src={item.image} />
              )}
              <S.FlexBlock className="parent">
                <S.FlexBlock className="icons">
                  <S.Icon className="duration" />
                  <S.Subtitle>{item.duration}</S.Subtitle>
                </S.FlexBlock>
                <S.FlexBlock className="icons">
                  <S.Difficulty>
                    <S.Level level={item.difficulty}></S.Level>
                    <S.Level level={item.difficulty}></S.Level>
                    <S.Level level={item.difficulty}></S.Level>
                  </S.Difficulty>
                  <S.Subtitle>{item.difficulty}</S.Subtitle>
                </S.FlexBlock>
                <S.FlexBlock className="icons">
                  <S.Icon className="type" />
                  <S.Subtitle>{item.type}</S.Subtitle>
                </S.FlexBlock>
              </S.FlexBlock>
              <S.Title>{item.title}</S.Title>
              <S.Icon className="add" />
            </S.Card>
          );
        })}
    </S.FlexBlock>
  );
}

export default RecipeCard;
