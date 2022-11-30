import { CardsContainer } from "../CardsContainer/CardsContainer";
import { Pagination } from "../Pagination/Pagination";
export const Loading = () => {
  return (
    <>
      <CardsContainer>
        {new Array(12).fill(1).map((e, i) => (
          <div key={i} className="card">
            <p className="card--loading" />
            <p className="card--name">Name...</p>
            <p className="card--status">Status...</p>
          </div>
        ))}
      </CardsContainer>
      <Pagination loading currentPage="22" pages={40} />
    </>
  );
};
