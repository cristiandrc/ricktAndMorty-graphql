import { CardsContainer } from "../CardsContainer/CardsContainer";
export const Loading = () => {
  return (
    <CardsContainer>
      {new Array(11).fill(1).map((e, i) => (
        <div key={i} className="card">
          <p className="card--loading" />
          <p className="card--name">Name...</p>
          <p className="card--status">Status...</p>
        </div>
      ))}
    </CardsContainer>
  );
};
