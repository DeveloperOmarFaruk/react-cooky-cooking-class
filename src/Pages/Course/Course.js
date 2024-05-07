import React from "react";
import "./Course.css";
import "../About/About.css";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import CulinaryCourse from "../../Components/MultiUsesComponents/CulinaryCourse";
import OurCookingClass from "../../Components/MultiUsesComponents/OurCookingClass";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";
import ChildSpecialCourse from "../../Components/MultiUsesComponents/ChildSpecialCourse";

const Course = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Course</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Course</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <CulinaryCourse />
      </div>

      <div>
        <OurCookingClass />
      </div>

      <div className="online-container">
        <ChildSpecialCourse />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default Course;
