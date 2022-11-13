import Card from "../Card/Card";
import { Character } from "../../types";
import "./style.scss";

interface Props {
  characters: Character[];
}

const CardsContainer = ({ characters }: Props) => {
  return (
    <section className="cards-container">
      {characters.map((e) => (
        <Card character={e} key={e.id} />
      ))}
    </section>
  );
};

export default CardsContainer;
