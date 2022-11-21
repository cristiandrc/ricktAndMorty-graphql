import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import Card from "../../components/Card/Card";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/Context";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

const Home = () => {
  const { loadingCharacter, calledCharacter, dataCharacter, filterCharacter } =
    useContext(AppContext);

  const [searchParams] = useSearchParams();
  const pageParams = searchParams.get("page");

  useEffect(() => {
    if (filterCharacter !== undefined) {
      pageParams ? filterCharacter(Number(pageParams)) : filterCharacter();
    }
  }, [pageParams]);

  return (
    <>
      {loadingCharacter || !calledCharacter ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h1>Series Characters</h1>
          {dataCharacter ? (
            <>
              <CardsContainer>
                {dataCharacter.characters.results.map((e) => (
                  <Card character={e} key={e.id} />
                ))}
              </CardsContainer>
              <Pagination
                pages={dataCharacter.characters.info.pages}
                currentPage={pageParams}
              />
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Home;
