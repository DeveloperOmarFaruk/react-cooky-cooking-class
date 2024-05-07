import React from "react";
import "./Blog.css";
import "../Home/Home.css";
import "../About/About.css";
import { useNavigate } from "react-router-dom";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";
import NewsBlog from "../../Components/MultiUsesComponents/NewsBlog";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Blog</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Blog</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <NewsBlog />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default Blog;
