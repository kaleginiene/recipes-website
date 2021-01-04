import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { RecipeContext } from "../../context/RecipeContext";
import * as S from "./RecipeCard.style";
import { MealNone } from "../../assets/icons";

const refreshPage = () => {
  window.location.reload();
};

function firstUppChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function RemoveFromList(auth, recipeID) {
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;

  fetch(`${url}/remove-my-recipe`, {
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
        refreshPage();
      }
    })
    .catch((err) => console.log(err));
}

function AddToList(auth, recipeID) {
  const url =
    process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_LOCALHOST;

  fetch(`${url}/my-recipes`, {
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
        refreshPage();
      }
    })
    .catch((err) => console.log(err));
}

function RecipeCard({ allRecipes, addOrRemove, privateList }) {
  const auth = useContext(AuthContext);
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
                        RemoveFromList(auth, item.id);
                      }}
                    />
                  ) : privateList.filter((listItem) => listItem.id === item.id)
                      .length === 0 && addOrRemove === "add" ? (
                    <S.Icon
                      addOrRemove={addOrRemove}
                      className="add"
                      onClick={() => {
                        AddToList(auth, item.id);
                      }}
                    />
                  ) : (
                    <S.Icon
                      addOrRemove={addOrRemove}
                      className="remove"
                      onClick={() => {
                        if (addOrRemove === "remove") {
                          RemoveFromList(auth, item.id);
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
