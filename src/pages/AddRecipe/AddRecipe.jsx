import React from "react";
import { Section, Inputfield } from "../../components";
import { Button } from "../../components/Button/Button.style";
import * as S from "./AddRecipe.style";

function AddRecipe() {
  return (
    <S.Main>
      <Section width="56">
        <S.Form>
          <S.Title>Add a recipe</S.Title>

          <Inputfield
            type="text"
            placeholder="E.g.: Apple pie"
            label="Title"
            required
          />
          <S.FlexBlock>
            <S.Label>Duration</S.Label>
            <S.Duration>
              <Inputfield
                type="number"
                step="1"
                minNumber="0"
                maxNumber="24"
                placeholder="H"
              />
            </S.Duration>
            <S.Span>:</S.Span>
            <S.Duration>
              <Inputfield
                type="number"
                step="1"
                minNumber="0"
                maxNumber="59"
                placeholder="min"
                required
              />
            </S.Duration>
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
            />
          </S.FlexBlock>
          <Inputfield
            type="text"
            placeholder="E.g.: https://www.url.com"
            label="Image"
            required
          />
          <Inputfield
            type="longtext"
            placeholder="Type ingredients list here..."
            label="Ingredients"
          />
          <Inputfield
            type="longtext"
            placeholder="Type your recipe description here..."
            label="Description"
          />

          <Button type="submit">Add recipe</Button>
        </S.Form>
      </Section>
    </S.Main>
  );
}

export default AddRecipe;
