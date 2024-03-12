import React from "react";
import "./Header.css";
const Header = ({ user }) => {
  return (
    <div className="headerWrapper">
      <img src={user?.picture?.medium} alt="img" />
      <p>
        {user?.name?.first} {user?.name?.last}
      </p>
    </div>
  );
};

export default Header;
