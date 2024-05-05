import React from "react";
import "./MultiUsesComponents.css";
import Chief from "../../Images/chef-cooking.jpg";
import Beef from "../../Images/beef-steak-flambe.jpg";

const OurCookingClass = () => {
  return (
    <>
      <div className="our-cooking-class-container">
        <div className="section our-cooking-section">
          <div className="our-cooking-class-text">
            <h6># Our Cooking Class</h6>
            <h1>
              Be The Best Chef As
              <br /> You Can Be
            </h1>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
              <div className="our-cooking-class-card-div">
                <img src={Chief} alt={Chief} />
                <h3>Basic Culinary</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <button>
                  <i class="fa-solid fa-paper-plane"></i> &nbsp; Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="our-cooking-class-card-div">
                <img src={Beef} alt={Beef} />
                <h3>Advanced Culinary</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <button>
                  <i class="fa-solid fa-paper-plane"></i> &nbsp; Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCookingClass;
