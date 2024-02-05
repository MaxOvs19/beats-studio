import React, { useState } from "react";

import open from "../../../assets/open.svg";
import close from "../../../assets/close.svg";

import "./tab.scss";

const Tab = ({ item }) => {
  const [active, setActive] = useState(false);

  function toggle() {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  return (
    <div className="tab" onClick={() => toggle()}>
      <div className="tab-title">
        <img src={item.img} alt="@" />
        <h3>{item.title}</h3>
      </div>

      <p className={active ? "activeTabs" : ""}>{item.text}</p>
      <button className="tab-icon">
        <img src={active ? close : open} alt="@" />
      </button>
    </div>
  );
};

export default Tab;
