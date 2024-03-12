import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navWrapper">
      <ul className="navigasyonWrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
