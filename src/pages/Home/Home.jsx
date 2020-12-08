import React from "react";
import { Button, Section } from "../../components";
import * as S from "./Home.style";

function Home() {
  return (
    <S.Main>
      <Section background="e3e3e3">
        Welcome to my React boilterplate. I hope that this will bring you up to
        speed with your development.
      </Section>
      <Section>
        This boilerplate uses storybook, styled-components and React.
      </Section>
      <Section>
        In this boilerplate you can find most kinds of inputs, styled loader and
        themed style elements.
      </Section>
      <Section>
        <Button color="primary">Check React Out</Button>
      </Section>
    </S.Main>
  );
}

export default Home;
