import React from "react";
import { Link } from "react-router-dom";
import photography from "../assets/photography.jpeg";
import lingerie from "../assets/lingerie.jpeg";
import group from "../assets/group-model.jpeg";
import "./landing.css";

const Landing = () => {
  return (
    <div className="LandingPage">
      <Link to="/photography" className="photocontainer">
        <div className="photography" />
        <p>Professional Photography</p>
      </Link>
      <Link to="/store" className="photocontainer">
        <div className="lingerie" />
        <p>Custom Lingerie</p>
      </Link>
      <Link to="/modeling" className="photocontainer large">
        <div className="modeling" />
        <p>Jumpstart Modeling Services</p>
      </Link>
    </div>
  );
};

export default Landing;
