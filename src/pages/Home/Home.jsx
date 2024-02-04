import React from "react";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import Settings from "../../components/Settings/Settings";

import star from "../../assets/logo-star.svg";

import "./home.scss";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="title-slider">
        <p>See our 437 reviews on</p>
        <img src={star} alt="@" />
      </div>
      <Slider />
    </>
  );
};

export default Home;
