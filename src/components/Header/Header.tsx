import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <Link className="link" to="/">
              Characters
            </Link>
            <span className="border"></span>
          </li>
          <li>
            <Link className="link" to="/episodes">
              Episodes
            </Link>
            <span className="border"></span>
          </li>
          <li>
            <Link className="link" to="/locations">
              Locations
            </Link>
            <span className="border"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
