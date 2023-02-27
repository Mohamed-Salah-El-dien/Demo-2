import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import pic from "../../assets/cover.png";
import dots from "../../assets/ellipse.png";

import "./Tres.css";

const Tres = () => {
  return (
    <div className="tresContainer">
      {/* top side */}
      <div className="topSide">
        <h4>Advanced Customer Service Platform</h4>

        <h1>Platform Overview</h1>

        <p className="pGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat
          necessitatibus nulla officiis esse sit dicta illo illum minus ex,
          voluptatem voluptas deserunt suscipit iste accusamus. Voluptate
          sapiente aut totam?
        </p>
      </div>

      {/* bottom side swiper */}
      <Swiper className="mySwiper">
        <SwiperSlide className="swiper-slide slide">
          <img src={pic} alt="img" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <img src={pic} alt="img" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <img src={pic} alt="img" />
        </SwiperSlide>
      </Swiper>
      <img src={dots} alt="" className="dots" />
    </div>
  );
};

export default Tres;
