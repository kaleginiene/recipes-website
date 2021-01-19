import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { RecipeContext } from "../../context/RecipeContext";
import { MyRecipesListContext } from "../../context/MyRecipesListContext";
import * as S from "./RecipeCard.style";
import { MealNone } from "../../assets/icons";

function firstUppChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function RemoveFromList(auth, recipeID, privateList, myRecipes) {
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;

  fetch(`${url}/remove-my-recipe`, {
    //remove recipe from database
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      recipeID: recipeID,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (
        data.msg === "You have successfully removed a recipe from your list."
      ) {
        const index = privateList.findIndex((index) => index.id === recipeID); //finding index od the recipe that is going to be removed
        privateList.splice(index, 1); //remove it from my recipes list
        const updatedList = privateList.filter((x) => x.id !== recipeID); //filtering all items without the removed one
        myRecipes.setState(updatedList); //updating the context, that no reload would be necessary
      }
    })
    .catch((err) => console.log(err));
}

function AddToList(auth, recipeID, allRecipes, myRecipes) {
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;

  fetch(`${url}/my-recipes`, {
    //adding the recipe to database
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      recipeID,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "You successfully added recipe to your list.") {
        const addedRecipe = allRecipes.filter((item) => item.id === recipeID); //checking if the item is in the private list
        if (addedRecipe.length === 1) {
          const updatedRecipesList = myRecipes.state.concat(addedRecipe); //add the recipe to context
          myRecipes.setState(updatedRecipesList); //updating context that no reload would be necessary
        } else {
          console.log("Wrong recipe id.");
        }
      }
    })
    .catch((err) => console.log(err));
}

function RecipeCard({ allRecipes, addOrRemove, privateList }) {
  const auth = useContext(AuthContext);
  const myRecipes = useContext(MyRecipesListContext);
  const recipeID = useContext(RecipeContext);
  const history = useHistory();

  return (
    <S.FlexBlock className="main">
      {allRecipes &&
        allRecipes.map((item) => {
          return (
            <S.Card key={item.id}>
              {item.image === "undefined" ||
              !item.image ||
              !item.image.includes("http") ? (
                <S.Image src={MealNone} className="none" />
              ) : (
                item.image.includes("http") && (
                  <S.Image
                    src={item.image}
                    onClick={() => {
                      recipeID.setState(item.id);
                      history.push("/recipe");
                    }}
                  />
                )
              )}
              <S.FlexBlock className="parent">
                <S.FlexBlock className="icons">
                  <S.Icon className="duration" />
                  <S.Subtitle>
                    {item.duration.slice(0, item.duration.length - 3)}
                  </S.Subtitle>
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
              <S.Title>{firstUppChar(item.title)}</S.Title>
              {auth.token ? (
                <>
                  {privateList.filter((listItem) => listItem.id === item.id)
                    .length > 0 && addOrRemove !== "remove" ? (
                    <S.Icon
                      addOrRemove={addOrRemove}
                      className="full"
                      onClick={() => {
                        RemoveFromList(auth, item.id, privateList, myRecipes);
                      }}
                    />
                  ) : privateList.filter((listItem) => listItem.id === item.id)
                      .length === 0 && addOrRemove === "add" ? (
                    <S.Icon
                      addOrRemove={addOrRemove}
                      className="add"
                      onClick={() => {
                        AddToList(auth, item.id, allRecipes, myRecipes);
                      }}
                    />
                  ) : (
                    <S.Icon
                      addOrRemove={addOrRemove}
                      className="remove"
                      onClick={() => {
                        if (addOrRemove === "remove") {
                          RemoveFromList(auth, item.id, privateList, myRecipes);
                        } else {
                          console.log("Something went wrong");
                        }
                      }}
                    />
                  )}
                </>
              ) : (
                <>
                  <S.Icon
                    addOrRemove={addOrRemove}
                    className="add"
                    onClick={() => {
                      history.push("/login");
                    }}
                  />
                </>
              )}
            </S.Card>
          );
        })}
    </S.FlexBlock>
  );
}

export default RecipeCard;
