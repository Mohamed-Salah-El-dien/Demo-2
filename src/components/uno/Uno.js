import React from "react";
import { BsArrowRight } from "react-icons/bs";

import pic1 from "../../assets/scale.png";
import pic2 from "../../assets/bootcamps.png";
import pic3 from "../../assets/hq.png";
import pic4 from "../../assets/certified.png";

import "./Uno.css";

const Uno = () => {
  return (
    <main className="UnoContainer">
      {/* left side */}
      <div className="leftSide">
        <div className="line" />

        <h1>The best business solution for you</h1>

        <p className="pGray">
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

      {/* right side */}
      <div className="rightSide">
        <div className="step">
          <img src={pic1} alt="scale-Pic" className="icon" />

          <h5>Scale Your Activity</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
          </p>
        </div>

        <div className="step">
          <img src={pic2} alt="bootCamp-Pic" className="icon" />

          <h5>Bootcamps</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
          </p>
        </div>

        <div className="step">
          <img src={pic3} alt="hq-Pic" className="icon" />

          <h5>High Quality</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
          </p>
        </div>

        <div className="step">
          <img src={pic4} alt="certified-Pic" className="icon" />

          <h5>Get Certification</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
          </p>
        </div>
      </div>
    </main>
  );
};

export default Uno;
