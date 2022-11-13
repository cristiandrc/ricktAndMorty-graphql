import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query{
    characters{
      results{
        name
        id
        status
        image
      }
    }
  }

`

export const GET_EPISODES = gql`

query{
  episodes{
    results{
      name
      id
      episode
      air_date
      characters{
        id
        image
      }
    }
  }
}
`