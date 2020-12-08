import React from "react";
import { storiesOf } from "@storybook/react";
import Hero from "./Hero";
import Chef from "../../assets/logo.svg";

storiesOf("Hero", module).add("Hero", () => (
  <Hero title="Anyone can COOK!" url={Chef} />
));
