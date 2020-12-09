import React from "react";
import { Hero, Button, Section } from "../../components";
import * as S from "./Home.style";
import Chef from "../../assets/logo.svg";
import Food from "../../assets/content/food.jpg";
import FoodBowl from "../../assets/content/bowl.jpg";

function Home() {
  return (
    <S.Main>
      <Hero title="Anyone can COOK!" url={Chef} />
      <Section fullWidth background="eee">
        <S.FlexBlock>
          <S.HalfContainer>
            <S.Image src={Food} className="picture" />
          </S.HalfContainer>
          <S.HalfContainer>
            <S.H2>
              Home of simple, delicous recipes from all over the world
            </S.H2>
            <S.Article>
              In this website, you can find various recipes. Also, you can
              create your account and make your own recipes list or upload your
              recipe! Various recipes from cuisines all over the world:
              desserts, breakfast, dinner or supper ideas are more than welcome.
            </S.Article>
            <S.Article>And remember, Anyone can COOK!</S.Article>
            <S.Image src={FoodBowl} />
          </S.HalfContainer>
        </S.FlexBlock>
      </Section>
      <Section>
        <h2>Check the recipes</h2>
      </Section>
      <Section>
        <Button color="primary">Check React Out</Button>
      </Section>
    </S.Main>
  );
}

export default Home;
