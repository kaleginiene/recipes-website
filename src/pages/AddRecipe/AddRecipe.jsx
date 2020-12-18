import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Section, Inputfield } from "../../components";
import { Button } from "../../components/Button/Button.style";
import * as S from "./AddRecipe.style";

function nl2br(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, "<br>");
}

function insertRecipe(auth, recipe, history, setNotification) {
  fetch("http://localhost:8080/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      title: recipe.title,
      image: recipe.image,
      duration: recipe.duration,
      description: nl2br(recipe.description),
      type: recipe.type,
      difficulty: recipe.difficulty,
      ingredients: nl2br(recipe.ingredients),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.msg === "You successfully added a recipe.") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    description: "",
    duration: "",
    type: "",
    difficulty: "",
    ingredients: "",
  });
  const [duration, setDuration] = useState({
    hours: null,
    mins: null,
  });
  const durationFull = duration.hours + ":" + duration.mins;
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [notification, setNotification] = useState();

  console.log(recipe);

  return (
    <S.Main>
      <Section>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            setRecipe({ ...recipe, duration: durationFull });
            insertRecipe(auth, recipe, history, setNotification);
          }}
        >
          <S.Title>Add a recipe</S.Title>
          <h3>{notification}</h3>

          <Inputfield
            type="text"
            placeholder="E.g.: Apple pie"
            label="Title"
            required
            handleChange={(e) =>
              setRecipe({ ...recipe, title: e.target.value })
            }
          />
          <S.FlexBlock>
            <S.FlexBlock className="mobile-flex">
              <S.Label>Duration</S.Label>
              <S.Duration>
                <Inputfield
                  type="number"
                  step="1"
                  minNumber="0"
                  maxNumber="24"
                  placeholder="H"
                  handleChange={(e) => {
                    if (e.target.value < 10) {
                      const hours = 0 + e.target.value;
                      setDuration({
                        ...duration,
                        hours: hours,
                      });
                    } else {
                      setDuration({ ...duration, hours: e.target.value });
                    }
                  }}
                />
              </S.Duration>
              <S.Span>:</S.Span>
              <S.Duration>
                <Inputfield
                  type="number"
                  step="5"
                  minNumber="0"
                  maxNumber="59"
                  placeholder="min"
                  required
                  handleChange={(e) => {
                    if (e.target.value < 10) {
                      const mins = 0 + e.target.value;
                      setDuration({
                        ...duration,
                        mins: mins,
                      });
                    } else {
                      setDuration({ ...duration, mins: e.target.value });
                    }
                  }}
                />
              </S.Duration>
            </S.FlexBlock>
            <S.Label>Select type</S.Label>
            <Inputfield
              type="dropdown"
              options={[
                { id: 0, name: "Select type" },
                { id: 1, name: "breakfast", value: "breakfast" },
                { id: 2, name: "lunch", value: "lunch" },
                { id: 3, name: "dinner", value: "dinner" },
                { id: 4, name: "supper", value: "supper" },
                { id: 5, name: "dessert", value: "dessert" },
                { id: 6, name: "apetizer", value: "apetizer" },
                { id: 7, name: "soup", value: "soup" },
              ]}
              handleChange={(e) =>
                setRecipe({ ...recipe, type: e.target.value })
              }
            />
            <S.Label>Difficulty</S.Label>
            <Inputfield
              type="dropdown"
              options={[
                { id: 0, name: "Select difficulty" },
                { id: 1, name: "easy", value: "easy" },
                { id: 2, name: "need some effort", value: "need some effort" },
                { id: 3, name: "expert", value: "expert" },
              ]}
              handleChange={(e) =>
                setRecipe({ ...recipe, difficulty: e.target.value })
              }
            />
          </S.FlexBlock>
          <Inputfield
            type="text"
            placeholder="E.g.: https://www.url.com"
            label="Image"
            required
            handleChange={(e) =>
              setRecipe({ ...recipe, image: e.target.value })
            }
          />
          <Inputfield
            type="longtext"
            placeholder="Type ingredients list here..."
            label="Ingredients"
            handleChange={(e) =>
              setRecipe({ ...recipe, ingredients: String(e.target.value) })
            }
          />
          <Inputfield
            type="longtext"
            placeholder="Type your recipe description here..."
            label="Description"
            handleChange={(e) =>
              setRecipe({ ...recipe, description: String(e.target.value) })
            }
          />

          <Button type="submit">Add recipe</Button>
        </S.Form>
      </Section>
    </S.Main>
  );
}

export default AddRecipe;
