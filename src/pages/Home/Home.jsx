import React, { useEffect, useState, useContext } from "react";
import { Hero, Section, RecipeCard } from "../../components";
import "dotenv";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Home.style";
import Chef from "../../assets/logo.svg";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const auth = useContext(AuthContext);
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;

  useEffect(() => {
    fetch(`${url}/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, [url, setRecipes]);

  useEffect(() => {
    fetch(`${url}/my-recipes`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyRecipes(data));
  }, [url, auth.token]);

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
        callbackButton={(e) =>
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
          privateList={myRecipes}
        />
      </Section>
    </S.Main>
  );
}

export default Home;
