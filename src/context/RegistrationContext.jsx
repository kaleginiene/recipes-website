import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [state, setState] = useState("");

  return (
    <RegistrationContext.Provider value={{ state, setState }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationProvider;
