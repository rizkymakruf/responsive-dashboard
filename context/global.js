import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [menu, setMenu] = useState("dashboard");

  const contextValue = {
    globalCtx: {
      menu,
    },
    globalAct: {
      setMenu,
    },
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
