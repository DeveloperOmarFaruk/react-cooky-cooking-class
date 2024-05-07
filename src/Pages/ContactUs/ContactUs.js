import React from "react";
import "./ContactUs.css";
import "../Home/Home.css";
import "../About/About.css";
import { useNavigate } from "react-router-dom";
import ContactUsComponent from "../../Components/MultiUsesComponents/ContactUsComponent";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Contact Us</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Contact Us</p>
          </div>
        </div>
      </div>

      <div>
        <ContactUsComponent />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default ContactUs;
