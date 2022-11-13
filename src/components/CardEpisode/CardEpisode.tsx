import { EpisodeType } from "../../types";
import "./style.scss";

interface Props {
  episode: EpisodeType;
}

export const CardEpisode = ({ episode }: Props) => {
  return (
    <div className="card-episode" key={episode.id}>
      <p>Episode: {episode.episode}</p>
      <p>Name: {episode.name}</p>
      <p>Air Date: {episode.air_date}</p>
      <div className="mini-cards">
        <p>Episode Characters</p>
        <ul className="mini-cards-list">
          <li>
            <img src={episode.characters[0].image} alt="" />{" "}
          </li>
          <li>
            <img src={episode.characters[1].image} alt="" />{" "}
          </li>
          <li>
            <img src={episode.characters[2].image} alt="" />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
