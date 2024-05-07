import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import CookingClass from "../../Components/MultiUsesComponents/CookingClass";
import OurAssociate from "../../Components/MultiUsesComponents/OurAssociate";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";
import CountUpComponent from "../../Components/MultiUsesComponents/CountUpComponent";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>About Us</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>About Us</p>
          </div>
        </div>
      </div>

      <div className="about-container">
        <CookingClass />
      </div>

      <div className="about-container">
        <CountUpComponent />
      </div>

      <div className="about-container">
        <OurAssociate />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default About;
