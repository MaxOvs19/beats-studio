import React from "react";
import { useSwiper } from "swiper/react";

import arrow from "../../assets/arrow.svg";

import "./sliderButtons.scss";

const SliderButtons = ({ type }) => {
  const swiper = useSwiper();
  return (
    <>
      {type == 0 && (
        <button onClick={() => swiper.slidePrev()} className={"left"}>
          <img src={arrow} alt="@" />
        </button>
      )}
      {type == 1 && (
        <button onClick={() => swiper.slideNext()} className={"right"}>
          <img src={arrow} alt="@" />
        </button>
      )}
    </>
  );
};

export default SliderButtons;
