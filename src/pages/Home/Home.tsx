import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";

const Home = () => {
  const {
    loadingCharacter: loading,
    errorCharacter: error,
    dataCharacter: data,
  } = useContext(AppContext);

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
