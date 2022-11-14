import { LocationType } from "../../types";
import "./style.scss";

interface Props {
  location: LocationType;
}

export const CardLocation = ({ location }: Props) => {
  console.log(location);
  return (
    <div className="card-location" key={location.id}>
      <p>Name: {location.name}</p>
      <p>Type: {location.type}</p>
      <div className="mini-cards">
        <p>location Characters</p>
        <ul className="mini-cards-list">
          <li>
            <img src={location.residents[0]?.image} alt="" />
          </li>
          <li>
            <img src={location.residents[1]?.image} alt="" />
          </li>
          <li>
            <img src={location.residents[2]?.image} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
