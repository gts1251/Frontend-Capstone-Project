import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import "../App.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <img src={littlelemon_logo} alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
