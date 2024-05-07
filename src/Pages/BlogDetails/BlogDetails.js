import React from "react";
import "./BlogDetails.css";
import "../About/About.css";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";
import BlogReadDetails from "../../Components/MultiUsesComponents/BlogReadDetails";

const BlogDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Blog Detail</h1>
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
                navigate("/blog");
              }}
            >
              Blog
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Blog Detail</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <BlogReadDetails />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default BlogDetails;
