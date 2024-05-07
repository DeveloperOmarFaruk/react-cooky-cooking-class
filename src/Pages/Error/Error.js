import React from "react";
import "../About/About.css";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import Error404 from "../../Components/MultiUsesComponents/Error404";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Error Page</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Error Page</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <Error404 />
      </div>
    </>
  );
};

export default Error;
