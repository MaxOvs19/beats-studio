import React, { useState } from "react";

import arrow from "../../assets/arrow.svg";

import "./sliderItem.scss";

const SliderItem = ({ images }) => {
  const [image, setImage] = useState(images.first);
  const [index, setIndex] = useState(0);

  function changeImg(idx) {
    if (idx < 3) {
      setIndex(idx);

      switch (idx) {
        case 0:
          setImage(images.first);
          break;
        case 1:
          setImage(images.second);
          break;
        case 2:
          setImage(images.third);
          break;

        default:
          setImage(images.first);
          setIndex(0);
          break;
      }
    }
  }

  return (
    <div className="slide">
      <button
        className={"left"}
        onClick={() => {
          if (index != 0) {
            changeImg(index - 1);
          }
        }}
      >
        <img src={arrow} alt="@" />
      </button>

      <button
        className={"right"}
        onClick={() => {
          changeImg(index + 1);
        }}
      >
        <img src={arrow} alt="@" />
      </button>

      <img src={image} alt="@" className="slide-img-main" />
      <div className="slide-type">
        <img
          src={images.first}
          alt="@"
          onClick={(e) => {
            setImage(e.target.src);
            setIndex(0);
          }}
          className={index == 0 ? "activeImg" : " "}
        />

        <img
          src={images.second}
          alt="@"
          onClick={(e) => {
            setImage(e.target.src);
            setIndex(1);
          }}
          className={index == 1 ? "activeImg" : " "}
        />

        <img
          src={images.third}
          alt="@"
          onClick={(e) => {
            setImage(e.target.src);
            setIndex(2);
          }}
          className={index == 2 ? "activeImg" : " "}
        />
      </div>
    </div>
  );
};

export default SliderItem;
