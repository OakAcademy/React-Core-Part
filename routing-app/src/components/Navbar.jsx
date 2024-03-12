import { Link, NavLink } from "react-router-dom";
import logo from "../img/react.png";
const Navbar = () => {
  return (
    <nav className="navWrapper">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="navigasyonWrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/personnel">Personnel</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/paths">Paths</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
