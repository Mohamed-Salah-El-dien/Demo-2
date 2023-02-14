import React from "react";

import "./Cinco.css";

const Cinco = () => {
  return (
    <div className="cincoContainer">
      {/* left side */}
      <div className="leftSide">
        <h1>Acceleration Process to Grow Your Business</h1>

        <p className="pGray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
          soluta optio ut nihil ad perspiciatis delectus in veritatis temporibus
          quam praesentium alias dolor omnis placeat commodi earum inventore
          reprehenderit error.
        </p>

        <button className="button aboutRed">About us</button>
      </div>

      {/* right side */}
      <div className="rightSide">
        <div className="step">
          {/* number and line */}
          <div className="number">
            <h3>1</h3>

            <div className="vLine"></div>
          </div>

          {/* text */}
          <div className="text">
            <h2>Market Research</h2>

            <p className="pGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              harum ipsum quidem, adipisci doloremque est fuga, distinctio off.
            </p>
          </div>
        </div>

        <div className="step">
          {/* number and line */}
          <div className="number">
            <h3>1</h3>

            <div className="vLine" />
          </div>

          {/* text */}
          <div className="text">
            <h2>Market Research</h2>

            <p className="pGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              harum ipsum quidem, adipisci doloremque est fuga, distinctio off.
            </p>
          </div>
        </div>

        <div className="step">
          {/* number and line */}
          <div className="number">
            <h3>1</h3>

            <div className="vLine"></div>
          </div>

          {/* text */}
          <div className="text">
            <h2>Market Research</h2>

            <p className="pGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              harum ipsum quidem, adipisci doloremque est fuga, distinctio off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinco;
