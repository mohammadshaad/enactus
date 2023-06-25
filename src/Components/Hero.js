import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <div className="landing__container">
        <div className="landing__header__container">
          <div className="landing__header">
            <h3 className="landing__header__discount">ENACTUS VITC</h3>
            <h1 className="landing__header__main">
              We are a nonprofit organisation and work worldwide
            </h1>
            <Link to="/products">
              <button className="shop-now">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
