import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../graphql/queries";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { EpisodesType } from "../../types";

export const Episodes = () => {
  const { loading, error, data } = useQuery<EpisodesType>(GET_EPISODES);
  console.log(data);
  return (
    <div>
      <h1>Series Episodes</h1>
      <CardsContainer>
        {data?.episodes.results.map((e) => (
          <div key={e.id}>
            <p>{e.name}</p>
            <p>{e.episode}</p>
            <p>{e.air_date}</p>
          </div>
        ))}
      </CardsContainer>
    </div>
  );
};
