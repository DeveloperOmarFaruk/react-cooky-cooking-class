import React from "react";
import "./MultiUsesComponents.css";
import SeniorMan from "../../Images/Senior.png";
import { useNavigate } from "react-router";

const OnlineClass = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="section">
        <div className="row section-row ">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="online-class-text" data-aos="zoom-in">
              <h6># Online Class</h6>
              <h1>Learn How To Cook From Your Home</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in nunc mauris. Pellentesque sit amet accumsan urna. Proin quis
                est fermentum, elementum orci a, hendrerit lectus. Nullam
                dapibus tortor turpis.
              </p>

              <button
                onClick={() => {
                  navigate("/pricing");
                }}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="online-class-image" data-aos="zoom-in">
              <img src={SeniorMan} alt={SeniorMan} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineClass;
