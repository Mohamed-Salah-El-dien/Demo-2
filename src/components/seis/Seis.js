import React from "react";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import pic1 from "../../assets/pic-1.png";
import pic2 from "../../assets/pic-2.png";
import pic3 from "../../assets/pic-3.png";

import "./Seis.css";

const Seis = () => {
  return (
    <div className="seisContainer">
      {/* top side */}
      <div className="topSide">
        <h1>Don't just Take our Word for it</h1>

        <div className="milestones">
          <div className="item">
            <h2>570</h2>
            <h3>Downloads</h3>
          </div>

          <div className="item">
            <h2>570</h2>
            <h3>Active Users</h3>
          </div>

          <div className="item">
            <h2>570</h2>
            <h3>Positive Feedback </h3>
          </div>

          <div className="item">
            <h2>570</h2>
            <h3>+ ratings</h3>
          </div>
        </div>
      </div>

      {/* bottom side */}
      <div className="bottomSide">
        {/* left side swiper */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide className="swiper-slide slide">
            <img src={pic1} alt="img" />

            <div className="text">
              <h4>Steven Jacobs</h4>

              <h5>CEO of company</h5>

              <p className="pGray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                nihil blanditiis provident expedita ad recusandae.
              </p>

              <div className="rating">
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide slide">
            <img src={pic2} alt="img" />

            <div className="text">
              <h4>Steven Jacobs</h4>

              <h5>CEO of company</h5>

              <p className="pGray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                nihil blanditiis provident expedita ad recusandae.
              </p>

              <div className="rating">
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide slide">
            <img src={pic3} alt="img" />

            <div className="text">
              <h4>Steven Jacobs</h4>

              <h5>CEO of company</h5>

              <p className="pGray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                nihil blanditiis provident expedita ad recusandae.
              </p>

              <div className="rating">
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
                <AiFillStar className="star" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* right side text */}
        <div className="invite">
          <h1>Grow Your Business and Join Our Happy Users</h1>

          <p className="pGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at esse
            quod? Corrupti non impedit explicabo libero adipisci veritatis, sed
            exercitationem tempore cum, dicta, rerum beatae asperiores error
            tempora. Corrupti!
          </p>

          <button className="button aboutRed">About us</button>
        </div>
      </div>
    </div>
  );
};

export default Seis;
