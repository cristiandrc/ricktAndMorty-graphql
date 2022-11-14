import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../graphql/queries";
import { LocationsType } from "../../types";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { CardLocation } from "../../components/CardLocation/CardLocation";

export const Locations = () => {
  const { loading, error, data } = useQuery<LocationsType>(GET_LOCATIONS);
  return (
    <div>
      <h1>Series Locations</h1>
      <CardsContainer>
        {data?.locations.results.map((e) => (
          <CardLocation location={e} key={e.id} />
        ))}
      </CardsContainer>
    </div>
  );
};
