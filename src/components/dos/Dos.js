import React from "react";
import { BsArrowRight } from "react-icons/bs";

import pic from "../../assets/cover.png";

import "./Dos.css";

const Dos = () => {
  return (
    <div className="dosContainer">
      {/* left side */}
      <img src={pic} alt="" />

      {/* right side */}
      <div className="rightSide">
        <div className="line" />

        <h1>Best platform for the Technological Era</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
          soluta optio ut nihil ad perspiciatis delectus in veritatis temporibus
          quam praesentium alias dolor omnis placeat commodi earum inventore
          reprehenderit error.
        </p>

        <div className="link">
          <h4>Learn About Our Success</h4>

          <BsArrowRight className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Dos;
