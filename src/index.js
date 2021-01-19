import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import { RecipeProvider } from "./context/RecipeContext";
import { RegistrationProvider } from "./context/RegistrationContext";
import { MyRecipesListProvider } from "./context/MyRecipesListContext";
import theme from "./theme";
import "normalize.css";

const GlobalBodyStyle = createGlobalStyle`
  body {
    color: #1b261f;
    font-family: 'Martel', serif;

  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RegistrationProvider>
          <RecipeProvider>
            <MyRecipesListProvider>
              <GlobalBodyStyle />
              <Routes />
            </MyRecipesListProvider>
          </RecipeProvider>
        </RegistrationProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
