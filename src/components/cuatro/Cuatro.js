import React from "react";
import pic from "../../assets/cover.png";
import pic1 from "../../assets/Rectangle.png";

import "./Cuatro.css";

const Cuatro = () => {
  return (
    <div className="cuatroContainer">
      {/* left side */}
      <div className="leftSide">
        <div className="line" />

        <h1>Best platform for the Technological Era</h1>

        <p className="pGray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
          soluta optio ut nihil ad perspiciatis delectus in veritatis temporibus
          quam praesentium alias dolor omnis placeat commodi earum inventore
          reprehenderit error.
        </p>

        <h4>Learn About Our Success</h4>
      </div>

      {/* right side */}
      <img src={pic} alt="img" />

      <img src={pic1} alt="cover" className="background" />
    </div>
  );
};

export default Cuatro;
