import React from "react";

import logo from "../../assets/mainLogo.svg";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <h2>Flash Sale in 'Country': Free 2-3 Day express delivery!</h2>
      </div>
      <div className="header-bottom">
        <img src={logo} alt="@" />
        <ul>
          <li>About Product</li>
          <li>Reviews</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
