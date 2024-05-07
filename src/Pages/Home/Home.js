import React, { useEffect, useState } from "react";
import "./Home.css";
import "../../Components/MultiUsesComponents/MultiUsesComponents.css";
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
import ContactUsComponent from "../../Components/MultiUsesComponents/ContactUsComponent";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  // Data Load
  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBlogData(data[0].blog));
  }, [URL]);

  // Data filter
  const filterData = blogData.filter(
    (item) => item.id === 5010 || item.id === 5011 || item.id === 5012
  );

  // Onclick url path
  const navigate = useNavigate();

  // Animaion
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="home-section">
        <div className="banner-div">
          <div className="section">
            <div className="row section-row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div className="banner-image" data-aos="zoom-out-up">
                  <img src={HeaderImage} alt="Image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 m-4">
                <div className="banner-text" data-aos="fade-up">
                  <p># Premium Cooking Class</p>
                  <h2>Ratatoullie</h2>
                  <h1>French Cuisine</h1>
                </div>

                <div className="banner-text-icon" data-aos="zoom-in">
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

            <div className="row banner-image-div section-row">
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 banner-image-second"
                data-aos="zoom-in"
              >
                <img src={Italian} alt={Italian} />
                <h5>Italian</h5>
                <p>Bolognese Pasta</p>
              </div>

              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 banner-image-second"
                data-aos="zoom-in"
              >
                <img src={Japanese} alt={Japanese} />
                <h5>Japanese</h5>
                <p>Katsu Curry</p>
              </div>

              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 banner-image-second"
                data-aos="zoom-in"
              >
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
        <div className="section">
          <div className="row section-row ">
            <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12 mt-4">
              <div className="our-cooking-class-text" data-aos="zoom-in">
                <h6># News & Blog</h6>
                <h1>Recent Blog</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12 mt-4">
              <div className="our-cooking-class-text" data-aos="zoom-in">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse non purus feugiat, luctus arcu vel, molestie
                  sapien. Ut fringilla mattis risus, non placerat nibh. Duis
                  vulputate purus in malesuada finibus.
                </p>
              </div>
            </div>
          </div>

          <div className="row section-row ">
            {filterData.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                key={item.id}
              >
                <div className="news-blog-card" data-aos="zoom-in">
                  <img src={item.img} alt={item.img} />
                  <div className="news-blog-card-text">
                    <h3>{item.title}</h3>
                    <p>{item.thm_description}</p>

                    <button
                      onClick={() => {
                        navigate(`/blog-detail/${item.id}`);
                      }}
                    >
                      read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <ContactUsComponent />
      </div>
    </>
  );
};

export default Home;
