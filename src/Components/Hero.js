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
              <button className="shop-now">
                SHOP NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="link-icon"
                >
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
