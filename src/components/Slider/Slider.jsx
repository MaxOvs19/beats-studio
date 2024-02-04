import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slider.scss";
import "swiper/css";

import SliderItem from "../SliderItem/SliderItem";
import { arrImg } from "./img";
import Settings from "../Settings/Settings";

const Slider = () => {
  return (
    <>
      <Swiper>
        {arrImg.map((item) => {
          return (
            <SwiperSlide>
              <SliderItem images={item} />
            </SwiperSlide>
          );
        })}
        <Settings />
      </Swiper>
    </>
  );
};

export default Slider;
