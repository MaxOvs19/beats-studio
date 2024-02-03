import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slider.scss";
import "swiper/css";

import slide1 from "../../assets/sliders/slide1-0.png";
import slide12 from "../../assets/sliders/slide1-1.png";
import slide13 from "../../assets/sliders/slide1-2.png";
import SliderButtons from "../SliderButtons/SliderButtons";

const Slider = () => {
  return (
    <>
      <Swiper>
        <SliderButtons type={0} />
        <SliderButtons type={1} />
        <SwiperSlide>
          <div className="slide">
            <img src={slide1} alt="@" />
            <div className="slide-type">
              <img src={slide1} alt="@" />
              <img src={slide12} alt="@" />
              <img src={slide13} alt="@" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={slide1} alt="@" />
            <div className="slide-type">
              <img src={slide1} alt="@" />
              <img src={slide12} alt="@" />
              <img src={slide13} alt="@" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={slide1} alt="@" />
            <div className="slide-type">
              <img src={slide1} alt="@" />
              <img src={slide12} alt="@" />
              <img src={slide13} alt="@" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
