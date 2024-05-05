import React from "react";
import "./Home.css";
import HeaderImage from "../../Images/header-vegetarian-dish.png";
import Italian from "../../Images/italian.png";
import Japanese from "../../Images/japanese.png";
import Oriental from "../../Images/oriental.png";
import OnlineClass from "../../Components/MultiUsesComponents/OnlineClass";
import CulinaryCourse from "../../Components/MultiUsesComponents/CulinaryCourse";
import OurCookingClass from "../../Components/MultiUsesComponents/OurCookingClass";
import ThemAll from "../../Components/MultiUsesComponents/ThemAll";
import OurAssociate from "../../Components/MultiUsesComponents/OurAssociate";
import BestCulinary from "../../Components/MultiUsesComponents/BestCulinary";
import NewsBlog from "../../Components/MultiUsesComponents/NewsBlog";
import ContactUsComponent from "../../Components/MultiUsesComponents/ContactUsComponent";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="banner-div">
          <div className="section">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div className="banner-image">
                  <img src={HeaderImage} alt="Image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 m-4">
                <div className="banner-text">
                  <p># Premium Cooking Class</p>
                  <h2>Ratatoullie</h2>
                  <h1>French Cuisine</h1>
                </div>

                <div className="banner-text-icon">
                  <p>
                    <i class="fa-solid fa-play"></i>&nbsp; Cooke with us
                  </p>{" "}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <p>
                    <i class="fa-solid fa-book"></i>&nbsp; Get Recipe
                  </p>
                </div>
              </div>
            </div>

            <div className="row banner-image-div">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 banner-image-second">
                <img src={Italian} alt={Italian} />
                <h5>Italian</h5>
                <p>Bolognese Pasta</p>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 banner-image-second">
                <img src={Japanese} alt={Japanese} />
                <h5>Japanese</h5>
                <p>Katsu Curry</p>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 banner-image-second">
                <img src={Oriental} alt={Oriental} />
                <h5>Oriental</h5>
                <p>Brown Noodle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="online-container">
        <OnlineClass />
      </div>

      <div className="online-container">
        <CulinaryCourse />
      </div>

      <div>
        <OurCookingClass />
      </div>

      <div className="online-container">
        <ThemAll />
      </div>

      <div className="online-container">
        <OurAssociate />
      </div>

      <div>
        <BestCulinary />
      </div>

      <div className="online-container">
        <NewsBlog />
      </div>

      <div>
        <ContactUsComponent />
      </div>
    </>
  );
};

export default Home;
