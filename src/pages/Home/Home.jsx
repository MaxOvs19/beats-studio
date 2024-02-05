import React from "react";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import DescProduct from "../../components/DescProduct/DescProduct";
import Tabs from "../../components/Tabs/Tabs";
import SliderYouTube from "../../components/SliderYouTube/SliderYouTube";

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
      <DescProduct />
      <Tabs />
      <SliderYouTube />
    </>
  );
};

export default Home;
