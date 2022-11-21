import { ApolloError } from "@apollo/client";
import { CharactersType } from "../types";

export interface ContextType {
  loadingCharacter?: boolean
  calledCharacter?: boolean
  errorCharacter?: ApolloError
  dataCharacter?: CharactersType
  filterCharacter?: (page?: number) => void
}



// export interface ContextCharacterType {
//   loadingCharacter?: boolean
//   calledCharacter?: boolean
//   errorCharacter?: ApolloError
//   dataCharacter?: CharactersType
// }