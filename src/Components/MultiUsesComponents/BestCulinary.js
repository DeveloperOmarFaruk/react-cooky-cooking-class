import React from "react";
import "./MultiUsesComponents.css";
import Executive from "../../Images/executive-chef.png";
const BestCulinary = () => {
  return (
    <>
      <div className="best-culinary-container">
        <div className="section best-culinary-section">
          <div className="row section-row ">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
              <div className="best-culinary-text" data-aos="zoom-in">
                <h1># Best Culinary Course</h1>
                <p>
                  ” Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.”
                </p>
                <h4>Norman Bendell</h4>
                <h6>Executive Chef</h6>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
              <div className="best-culinary-image" data-aos="zoom-in">
                <img src={Executive} alt={Executive} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestCulinary;
