import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/Context";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const {
    loadingCharacter,
    calledCharacter,
    errorCharacter,
    dataCharacter,
    filterCharacter,
  } = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const nameParams = searchParams.get("name");

  useEffect(() => {
    if (filterCharacter !== undefined) {
      typeof nameParams === "string"
        ? filterCharacter(nameParams)
        : filterCharacter();
    }
  }, []);

  return (
    <>
      {loadingCharacter || !calledCharacter ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1>Series Characters</h1>
          {dataCharacter ? (
            <CardsContainer>
              {dataCharacter.characters.results.map((e) => (
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
