import { ApolloError } from "@apollo/client";
import { CharactersType } from "../types";

export interface ContextType {
  loadingCharacter?: boolean
  errorCharacter?: ApolloError
  dataCharacter?: CharactersType
}