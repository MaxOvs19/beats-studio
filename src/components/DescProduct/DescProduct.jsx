import React from "react";

import apple from "../../assets/apple.svg";
import music from "../../assets/music.svg";

import "./descProduct.scss";

const DescProduct = () => {
  return (
    <div className="desc-product">
      <div className="desc-product__systems">
        <div>
          <img src={music} alt="@" />
          <h3>Free Apple Music Trial</h3>
        </div>
        <p>Get 6 months of access to over 100 million songs, ad-free</p>
      </div>

      <div className="desc-product__systems">
        <div>
          <img src={apple} alt="@" />
          <h3>In-Store Pickup</h3>
        </div>
        <p>Pick up your Beats at an Apple Store near you</p>
      </div>

      <div className="desc-characteristic">
        <div className="desc-product-info">
          <h3>Earbuds</h3>
          <div className="desc-product-info__table">
            <div>
              <p>Height:</p>
              <p>Weight:</p>
            </div>
            <div>
              <span>0.59 in / 1.5 cm</span>
              <span>5 g</span>
            </div>
          </div>
        </div>

        <div className="desc-product-info">
          <h3>Case</h3>
          <div className="desc-product-info__table">
            <div>
              <p>Height:</p>
              <p>Weight:</p>
              <p>Length:</p>
              <p>Width:</p>
            </div>
            <div>
              <span>1 in / 2.55 cm</span>
              <span>48 g</span>
              <span>2.83 in / 7.2 cm</span>
              <span>2 in / 5.1 cm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescProduct;
