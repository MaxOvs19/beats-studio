import React from "react";
import Tab from "./Tab/Tab";

import delivery from "../../assets/shipping.svg";
import guarantee from "../../assets/guarantee.svg";
import warranty from "../../assets/warranty.svg";

import "./tabs.scss";

const Tabs = () => {
  const tabs = [
    {
      img: delivery,
      title: "Free shipping in “Country”",
      text: "All purchases are shipped from our warehouse in “Country” and are fully insured with a tracking number. Tracked delivery between 2 - 4 days in “Country” + Free Delivery",
    },
    {
      img: guarantee,
      title: "100% money-back guarantee",
      text: "If you're not satisfied with your Case, we offer a 100% Money Back Guarantee. No Questions Asked.",
    },
    {
      img: warranty,
      title: "5 years warranty",
      text: "All purchases are shipped from our warehouse in “Country” and are fully insured with a tracking number. Tracked delivery between 2 - 4 days in “Country” + Free Delivery",
    },
  ];
  return (
    <div className="tabs-box">
      {tabs.map((item, index) => {
        return <Tab item={item} key={index} />;
      })}
    </div>
  );
};

export default Tabs;
