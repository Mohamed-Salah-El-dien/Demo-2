import React from "react";
import Navbar from "../navbar/Navbar";
import pic from "../../assets/cover.png";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="heroSection">
      <Navbar />
      <div className="heroContainer">
        {/* left side */}
        <div className="leftSide">
          <h4>Advanced Platform</h4>

          <h1>Take your team to the next level</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            eligendi provident doloribus itaque, quam modi magni?
          </p>

          <button className="button heroBtn">About us</button>
        </div>

        {/* right side */}
        <img src={pic} alt="img" />
      </div>

      {/* the bottom brands */}
      <div className="brands">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
    </section>
  );
};

export default Hero;
