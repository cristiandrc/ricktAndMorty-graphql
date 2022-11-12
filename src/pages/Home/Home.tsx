import { useQuery } from "@apollo/client"
import { GET_CHARACTERS } from "../../graphql/queries"
import { Characters } from "../../types"
import Card from "../../components/Card/Card"


const Home = () => {
  const {loading,error,data } = useQuery<Characters>(GET_CHARACTERS)

  console.log(data)
  return (
    <>
      {
         loading? <p>Loading....</p> 
        :( 
        <div>
          { data ? <Card characters={data?.characters.results} /> : null } 
        </div>)
      }
    </>
  )
}


export default Home

