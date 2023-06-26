import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          Îmage
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-me" className="nav-links">
              About-me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stats" className="nav-links">
              Stats
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
