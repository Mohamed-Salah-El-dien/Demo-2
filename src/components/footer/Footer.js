import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      {/* the top at smaller screens */}

      <div className="top">
        {/* first section */}
        <section className="first">
          <h5>Study</h5>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            recusandae!
          </p>
        </section>

        {/* second section */}
        <section className="second">
          <h6>Nos Services</h6>

          <div className="services">
            <p className="pGray">Avis clients</p>
            <p className="pGray">Mentions légales</p>
            <p className="pGray">Plan du site</p>
            <p className="pGray">Blog d’Idéematic</p>
            <p className="pGray">Le dictionnaire du digital</p>
            <p className="pGray">‹ Notre boutique /›</p>
          </div>
        </section>
      </div>

      {/* third section */}
      <section className="third">
        <h6>Sign up for Special Offers</h6>

        <div className="signup">
          <input type="text" placeholder="Mail" />

          <button className="subscribeBtn">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
