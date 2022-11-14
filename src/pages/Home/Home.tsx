import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/queries";
import { Characters } from "../../types";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";

const Home = () => {
  const { loading, error, data } = useQuery<Characters>(GET_CHARACTERS);
  const { hi } = useContext(AppContext);
  console.log(hi);
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
