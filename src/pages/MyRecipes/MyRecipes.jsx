import React, { useEffect, useState, useContext } from "react";
import { Section, RecipeCard } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./MyRecipes.style";

function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const auth = useContext(AuthContext);
  const uniqueRecipes = myRecipes.filter((item, index) => {
    return myRecipes.indexOf(item) !== index;
  });
  console.log(uniqueRecipes);

  useEffect(() => {
    fetch("http://localhost:8080/my-recipes", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyRecipes(data));
  }, [auth.token]);

  return (
    <S.Main>
      <Section>
        <S.Title>My recipes list</S.Title>
        <S.Subtitle>
          {myRecipes.length === 0 && "Your recipes list is empty"}
        </S.Subtitle>
        <RecipeCard
          allRecipes={myRecipes}
          addOrRemove="remove"
          privateList={myRecipes}
        />
      </Section>
    </S.Main>
  );
}

export default MyRecipes;
