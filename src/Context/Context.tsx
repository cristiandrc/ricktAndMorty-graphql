import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";
import { CharactersType } from "../types";
import { ContextType } from "./context";

const AppContext = React.createContext<ContextType>({});

type Props = {
  children: JSX.Element;
};

const AppProvider = ({ children }: Props) => {
  const {
    loading: loadingCharacter,
    error: errorCharacter,
    data: dataCharacter,
  } = useQuery<CharactersType>(GET_CHARACTERS);

  return (
    <AppContext.Provider
      value={{ loadingCharacter, errorCharacter, dataCharacter }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
