import React from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";
import { CharactersType } from "../types";
import { ContextType } from "./context";

const AppContext = React.createContext<ContextType>({});

type Props = {
  children: JSX.Element;
};

const AppProvider = ({ children }: Props) => {
  const [
    getCharacter,
    {
      loading: loadingCharacter,
      called: calledCharacter,
      error: errorCharacter,
      data: dataCharacter,
    },
  ] = useLazyQuery<CharactersType>(GET_CHARACTERS);

  const filterCharacter = (name?: string, page?: Number): void => {
    if (name) {
      getCharacter({ variables: { name, page } });
    } else {
      getCharacter();
    }
  };

  return (
    <AppContext.Provider
      value={{
        loadingCharacter,
        calledCharacter,
        errorCharacter,
        dataCharacter,
        filterCharacter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
