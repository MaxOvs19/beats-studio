import React, { useState } from "react";

import time from "../../assets/time.svg";
import apple from "../../assets/applePay.svg";
import google from "../../assets/google-pay-logo.svg";
import master from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import pay from "../../assets/samsung pay.svg";
import { useSwiper } from "swiper/react";

import "./settings.scss";

const Settings = ({}) => {
  const swiper = useSwiper();
  const [active, setActive] = useState(0);

  return (
    <div className="settings">
      <h1>Beats Studio Buds + </h1>
      <p className="settings-desc">True Wireless Noise Cancelling Earbuds</p>
      <div className="settings-cost">
        <span>£150</span>
        <h2>£3</h2>
        <div>
          <span>90%</span>
          <span>OFF</span>
        </div>
      </div>
      <h6>Color:</h6>
      <div className="settings-selector">
        <button
          onClick={() => {
            swiper.slideTo(0);
            setActive(0);
          }}
          className={active == 0 ? "activeColor" : ""}
        >
          <p></p>
        </button>
        <button
          onClick={() => {
            swiper.slideTo(1);
            setActive(1);
          }}
          className={active == 1 ? "activeColor" : ""}
        >
          <p></p>
        </button>
        <button
          onClick={() => {
            swiper.slideTo(2);
            setActive(2);
          }}
          className={active == 2 ? "activeColor" : ""}
        >
          <p></p>
        </button>
        <button
          onClick={() => {
            swiper.slideTo(3);
            setActive(3);
          }}
          className={active == 3 ? "activeColor" : ""}
        >
          <p></p>
        </button>
      </div>

      <button className="settings-button-buy">BUY NOW</button>

      <div className="settings-time">
        <div>
          <img src={time} alt="@" />
          <span>Hurry up! Sale Ends in</span>
        </div>

        <p>03 h : 59 m : 37.7 s</p>
      </div>

      <div className="settings-payment">
        <div>
          <img src={visa} alt="@" />
        </div>
        <div>
          <img src={master} alt="@" />
        </div>
        <div>
          <img src={pay} alt="@" />
        </div>
        <div>
          <img src={apple} alt="@" />
        </div>
        <div>
          <img src={google} alt="@" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
