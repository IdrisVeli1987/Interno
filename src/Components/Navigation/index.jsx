import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/Project">Project</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
