import React from "react";
import "./MultiUsesComponents.css";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="section">
        <div className="error-header-div" data-aos="zoom-in">
          <h1>404</h1>
          <h3>Something Is Wrong</h3>
          <p>The Page You’re Looking For Was Not Found</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error404;
