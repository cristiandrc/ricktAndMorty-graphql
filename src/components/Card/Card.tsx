import { Character } from "../../types";
import "./style.scss";

interface Props {
  character: Character;
}

const Card = ({ character }: Props) => {
  return (
    <div className="card" key={character.id}>
      <img className="card--img" src={character.image} alt="" />
      <p className="card--name">{character.name}</p>
      <p className="card--status">{character.status}</p>
    </div>
  );
};

export default Card;
