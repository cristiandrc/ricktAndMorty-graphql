import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/queries";
import { Characters } from "../../types";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";

const Home = () => {
  const { loading, error, data } = useQuery<Characters>(GET_CHARACTERS);

  console.log(data);
  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1>Series Characters</h1>
          {data ? (
            <CardsContainer>
              {data.characters.results.map((e) => (
                <Card character={e} key={e.id} />
              ))}
            </CardsContainer>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Home;
