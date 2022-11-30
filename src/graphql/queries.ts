import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query($name:String, $page:Int){
    characters(page:$page,filter:{name: $name }){
      info{
        pages
      }
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
    info{
      pages
    }
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

export const GET_LOCATIONS = gql`
  query{
    locations{
      results{
        id
        name
        type
        residents{
          id
          image
        }
      }
    }
  }
`