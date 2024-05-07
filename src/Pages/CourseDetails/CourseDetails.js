import React from "react";
import "./CourseDetails.css";
import "../About/About.css";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";
import CookingClassDetail from "../../Components/MultiUsesComponents/CookingClassDetail";

const CourseDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Course Detail</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i>{" "}
            <p
              onClick={() => {
                navigate("/course");
              }}
            >
              Course
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Course Detail</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <CookingClassDetail />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default CourseDetails;
