import React, { useEffect, useState } from "react";
import "./Pricing.css";
import "../About/About.css";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import BestCulinary from "../../Components/MultiUsesComponents/BestCulinary";
import ContactUsComponent from "../../Components/MultiUsesComponents/ContactUsComponent";
import OurCoursePlan from "../../Components/MultiUsesComponents/OurCoursePlan";

const Pricing = () => {
  const navigate = useNavigate();

  const [priceData, setPriceData] = useState([]);
  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPriceData(data[0].pricing));
  }, [URL]);

  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Pricing</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Pricing</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <OurCoursePlan priceData={priceData} />
      </div>

      <div>
        <BestCulinary />
      </div>

      <div>
        <ContactUsComponent />
      </div>
    </>
  );
};

export default Pricing;
