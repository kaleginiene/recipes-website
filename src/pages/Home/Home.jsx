import React, { useEffect, useState, useContext } from "react";
import { Hero, Section, RecipeCard } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Home.style";
import Chef from "../../assets/logo.svg";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const auth = useContext(AuthContext);

  console.log(recipes);

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [setRecipes]);

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
      <Hero
        title="Anyone can COOK!"
        url={Chef}
        allRecipes={recipes}
        callback={(e) =>
          setFilterRecipes(
            recipes.filter((item) =>
              item.title.toLowerCase().includes(e.target.value)
            )
          )
        }
      />
      <Section>
        <h2>Check the recipes</h2>

        <RecipeCard
          allRecipes={filterRecipes.length > 0 ? filterRecipes : recipes}
          addOrRemove="add"
          privateList={myRecipes}
        />
      </Section>
    </S.Main>
  );
}

export default Home;
