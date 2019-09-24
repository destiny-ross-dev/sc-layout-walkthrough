import React from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="Nav">
      <img src={logo} />
      <nav>
        <p>About</p>
        <p>Services</p>
        <p>Store</p>
        <p>Blog</p>
        <p>Contact</p>
      </nav>
    </div>
  );
};

export default Nav;
