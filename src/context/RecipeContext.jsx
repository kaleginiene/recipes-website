import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [state, setState] = useState();

  return (
    <RecipeContext.Provider value={{ state, setState }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
