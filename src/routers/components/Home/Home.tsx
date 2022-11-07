import { useQuery } from "@apollo/client"
import { GET_CHARACTERS } from "../../graphql/queries"
import { Characters } from "../../../types"


const Home = () => {
  const {loading,error,data } = useQuery<Characters>(GET_CHARACTERS)

  console.log(data)
  return (
    <>
      {
        loading ? <p>Loading....</p> : 
        <div>
          {data?.characters?.results.map((e)=> e.name ).join(' --- ')}
        </div>
      }
    </>
  )
}


export default Home

