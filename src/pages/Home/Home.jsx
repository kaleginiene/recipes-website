import React, { useEffect, useState, useContext } from "react";
import { Hero, Section, RecipeCard } from "../../components";
import "dotenv";
import { MyRecipesListContext } from "../../context/MyRecipesListContext";
import * as S from "./Home.style";
import Chef from "../../assets/logo.svg";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const myRecipes = useContext(MyRecipesListContext);
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;
  console.log(myRecipes.state);

  useEffect(() => {
    //getting all the recipes from server database
    fetch(`${url}/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [url, setRecipes]);

  return (
    <S.Main>
      <Hero
        title="Anyone can COOK!"
        url={Chef}
        allRecipes={recipes}
        callback={(
          e //filtering Recipes list by input value
        ) =>
          setFilterRecipes(
            recipes.filter((item) =>
              item.title.toLowerCase().includes(e.target.value)
            )
          )
        }
      />
      <Section>
        <S.H2>Check the recipes</S.H2>

        <RecipeCard
          allRecipes={filterRecipes.length > 0 ? filterRecipes : recipes}
          addOrRemove="add"
          privateList={myRecipes.state}
        />
      </Section>
    </S.Main>
  );
}

export default Home;
