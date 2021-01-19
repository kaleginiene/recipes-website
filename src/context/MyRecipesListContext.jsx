import React, { createContext, useState } from "react";

export const MyRecipesListContext = createContext();

export const MyRecipesListProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <MyRecipesListContext.Provider value={{ state, setState }}>
      {children}
    </MyRecipesListContext.Provider>
  );
};

export default MyRecipesListProvider;
