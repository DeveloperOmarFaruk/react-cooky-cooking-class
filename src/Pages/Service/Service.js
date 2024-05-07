import React from "react";
import "./Service.css";
import "../Home/Home.css";
import "../About/About.css";
import { useNavigate } from "react-router-dom";
import OnlineClass from "../../Components/MultiUsesComponents/OnlineClass";
import CulinaryCourse from "../../Components/MultiUsesComponents/CulinaryCourse";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";
import WhyChooseUs from "../../Components/MultiUsesComponents/WhyChooseUs";

const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Service</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Service</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <OnlineClass />
      </div>

      <div className="online-container">
        <CulinaryCourse />
      </div>

      <div className="online-container">
        <WhyChooseUs />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default Service;
