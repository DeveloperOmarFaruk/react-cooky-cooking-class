import React from "react";
import "./MultiUsesComponents.css";
import { useNavigate } from "react-router";

const StayUpDate = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="stay-up-date-container">
        <div className="section">
          <div className="stay-up-date-section">
            <div className="row section-row ">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="online-class-text" data-aos="zoom-in">
                  <h6># Stay Up to Date</h6>
                  <h1>Join Our Newsletter</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    vehicula mattis mauris. Ut ultrices molestie ligula non
                    accumsan.
                  </p>

                  <button
                    onClick={() => {
                      navigate("/pricing");
                    }}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayUpDate;
