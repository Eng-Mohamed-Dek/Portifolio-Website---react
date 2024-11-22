import React from "react";
import man from "../assets/man.png";

const Herosection = () => {
  return (
    <div className="home-page">
      <div className="info">
        <h1>
          Hi, I am <span>MERN STACK</span>
        </h1>
        <p>
          Hi, I'm Mohamed Dek a freelance web designer from Hirkaab Academy. I
          help brands turn their ideas into high quality websites.
        </p>
        <button>Hire Me !</button>
        <button className="cv">Download CV</button>
      </div>
      <div className="man-image">
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default Herosection;
