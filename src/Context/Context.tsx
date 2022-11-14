import React from "react";

const AppContext = React.createContext<{ hi?: string }>({});

type Props = {
  children: JSX.Element;
};

const AppProvider = ({ children }: Props) => {
  return (
    <AppContext.Provider value={{ hi: "hi" }}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
