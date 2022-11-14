import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../graphql/queries";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { CardEpisode } from "../../components/CardEpisode/CardEpisode";
import { EpisodesType } from "../../types";

export const Episodes = () => {
  const { loading, error, data } = useQuery<EpisodesType>(GET_EPISODES);
  return (
    <div>
      <h1>Series Episodes</h1>
      <CardsContainer>
        {data?.episodes.results.map((e) => (
          <CardEpisode episode={e} key={e.id} />
        ))}
      </CardsContainer>
    </div>
  );
};
