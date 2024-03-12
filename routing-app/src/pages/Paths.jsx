import React from "react";
import { Link, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="pathWraper">
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, illo!
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo debitis
        corrupti dolore provident unde vitae possimus impedit voluptas magni
        placeat dolorem nisi veniam, fugit praesentium quis atque labore ea
        quaerat.s
      </p>
      <div className="btnGroup">
        <Link to="frontend">Frontend</Link>
        <Link to="backend">Backend</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
