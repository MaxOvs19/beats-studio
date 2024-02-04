import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./slider.scss";
import "swiper/css";

import slide1 from "../../assets/sliders/slide1-0.png";
import slide12 from "../../assets/sliders/slide1-1.png";
import slide13 from "../../assets/sliders/slide1-2.png";
import SliderButtons from "../SliderButtons/SliderButtons";
import SliderItem from "../SliderItem/SliderItem";
import { arrImg } from "./img";

const Slider = () => {
  const [image, setImage] = useState(slide1);

  return (
    <>
      <Swiper>
        <SliderButtons type={0} />
        <SliderButtons type={1} />

        {arrImg.map((item) => {
          return (
            <SwiperSlide>
              <SliderItem images={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
