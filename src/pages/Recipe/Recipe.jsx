import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { Section } from "../../components";
import * as S from "./Recipe.style";

function br2nl(str) {
  if (str === null || str === undefined) {
    return str;
  } else if (str.includes("<br>")) {
    return str.replace(/<br>/g, "\n");
  } else {
    return str;
  }
}

function NewlineText(str) {
  if (str === null || str === undefined) {
    return str;
  } else if (str.includes("\n") && str != null) {
    const newText = str
      .split("\n")
      .filter((x) => x.length > 0)
      .map((str, index) => <li key={index}>{str}</li>);

    return newText;
  } else {
    return str;
  }
}

function Recipe() {
  const recipeID = useContext(RecipeContext);
  const [recipe, setRecipe] = useState([]);
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;

  useEffect(() => {
    fetch(`${url}/recipes/${recipeID.state}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [url, recipeID]);

  return (
    <S.Main>
      <Section>
        <S.FlexBlock>
          <S.Image
            src={
              recipe.length > 0
                ? recipe[0].image
                : "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg"
            }
          />
          <S.Block>
            <S.Title>
              {recipe.length > 0
                ? recipe[0].title.charAt(0).toUpperCase() +
                  recipe[0].title.slice(1).toLowerCase()
                : "There is no title"}
            </S.Title>
            <S.Subtitle>Ingredients</S.Subtitle>
            <S.UL>
              {recipe.length > 0
                ? NewlineText(br2nl(recipe[0].ingredients))
                : "Sorry, but there is no ingredients to show"}
            </S.UL>
          </S.Block>
        </S.FlexBlock>
        <S.Subtitle className="center">Directions</S.Subtitle>
        <S.Article>
          <S.UL>
            {recipe.length > 0
              ? NewlineText(br2nl(recipe[0].description))
              : "Sorry, but there is no description"}
          </S.UL>
        </S.Article>
      </Section>
    </S.Main>
  );
}

export default Recipe;
