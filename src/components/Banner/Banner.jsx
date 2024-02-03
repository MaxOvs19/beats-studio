import React from "react";

import bat from "../../assets/battary.svg";
import puls from "../../assets/pulse.svg";
import micro from "../../assets/microphone.svg";

import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-cost">
        <h1>Beats Studio Buds + </h1>
        <p>Powerful Sound. Perfect Fit</p>

        <div className="banner-cost__tab">
          <span>£150</span>
          <h2>£5</h2>
        </div>
      </div>
      <div className="banner-tabs">
        <div className="banner-tab">
          <img src={bat} alt="@" />
          <p>Up to 1.6x MoreActive Noise Cancelling</p>
        </div>
        <div className="banner-tab">
          <img src={puls} alt="@" />
          <p>Up to 36 Hours of Listening Time with Charging Case</p>
        </div>
        <div className="banner-tab">
          <img src={micro} alt="@" />
          <p>3x Larger Mics for Crisp, Clear Calls</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
