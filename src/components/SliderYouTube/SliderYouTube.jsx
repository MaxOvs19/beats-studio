import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import youTube from "../../assets/youTube.svg";

import "swiper/css";
import "swiper/css/pagination";
import "./sliderYouTube.scss";

const SliderYouTube = () => {
  return (
    <div className="youTube-main">
      <h1>What the Experts are Saying</h1>
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <div className="youTube">
            <p>
              “These deliver superior audio experience across all frequency
              ranges.”
            </p>
            <div>
              <img src={youTube} alt="@" />
              <h2>@DailyTekk Tech Reviewer</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="youTube">
            <p>“The noise cancellation on these earbuds is easily top tier.”</p>
            <div>
              <img src={youTube} alt="@" />
              <h2>@FlossyCarter Tech Reviewer</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="youTube">
            <p>
              “How do they sound on phone calls? These headphones sound great.”
            </p>
            <div>
              <img src={youTube} alt="@" />
              <h2>@PayetteForward Tech Reviewer</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderYouTube;
