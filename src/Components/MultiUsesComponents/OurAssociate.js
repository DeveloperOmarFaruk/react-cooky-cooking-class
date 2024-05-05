import React from "react";
import "./MultiUsesComponents.css";
import Star from "../../Images/star-fork.png";
import Knife from "../../Images/knife-chef.png";
import FoodChief from "../../Images/foodChef.png";
import FoodPeen from "../../Images/foodPin.png";

const OurAssociate = () => {
  return (
    <>
      <div className="section">
        <div className="our-cooking-class-text">
          <h6># Our Associate</h6>
          <h1>In Partnership With</h1>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div className="our-associate-img">
              <img src={Star} alt={Star} />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div className="our-associate-img">
              <img src={Knife} alt={Knife} />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div className="our-associate-img">
              <img src={FoodPeen} alt={FoodPeen} />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div className="our-associate-img">
              <img src={FoodChief} alt={FoodChief} />
            </div>
          </div>
        </div>

        <div className="our-associate-text-div">
          <i class="fa-solid fa-quote-left"></i>
          <p>
            Etiam vitae libero eget est sodales accumsan sed in eros.
            Suspendisse gravida tellus libero, a sagittis orci rhoncus
            dignissim. Suspendisse a commodo ante. Nunc eget dui pretium,
            lacinia neque ut, tincidunt felis.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurAssociate;
