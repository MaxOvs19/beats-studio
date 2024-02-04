import React, { useState } from "react";

import "./sliderItem.scss";

const SliderItem = ({ images }) => {
  const [image, setImage] = useState(images.first);

  return (
    <div className="slide">
      <img src={image} alt="@" className="slide-img-main" />
      <div className="slide-type">
        <img
          src={images.first}
          alt="@"
          onClick={(e) => {
            setImage(e.target.src);
          }}
        />
        <img
          src={images.second}
          alt="@"
          onClick={(e) => {
            setImage(e.target.src);
          }}
        />
        <img
          src={images.third}
          alt="@"
          onClick={(e) => {
            setImage(e.target.src);
          }}
        />
      </div>
    </div>
  );
};

export default SliderItem;
