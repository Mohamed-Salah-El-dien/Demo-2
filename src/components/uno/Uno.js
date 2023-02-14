import React from "react";
import { BsFillBootstrapFill, BsArrowRight } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";

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
          <GiProgression className="icon" style={{ backgroundColor: "red" }} />

          <h5>Scale Your Activity</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
            expedita tempora molestiae excepturi eos recusandae atque, nemo
            voluptate, pariatur dicta?
          </p>
        </div>

        <div className="step">
          <BsFillBootstrapFill
            className="icon"
            style={{ backgroundColor: "rgb(22, 200, 231)" }}
          />

          <h5>Bootcamps</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
            expedita tempora molestiae excepturi eos recusandae atque, nemo
            voluptate, pariatur dicta?
          </p>
        </div>

        <div className="step">
          <MdHighQuality
            className="icon"
            style={{ backgroundColor: "purple" }}
          />

          <h5>High Quality</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
            expedita tempora molestiae excepturi eos recusandae atque, nemo
            voluptate, pariatur dicta?
          </p>
        </div>

        <div className="step">
          <AiOutlineSafetyCertificate
            className="icon"
            style={{ backgroundColor: "green" }}
          />

          <h5>Get Certification</h5>

          <div className="line" />

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quasi doloribus repellat enim magnam? Nisi ipsum, nobis ab vel
            expedita tempora molestiae excepturi eos recusandae atque, nemo
            voluptate, pariatur dicta?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Uno;
