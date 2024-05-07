import React, { useEffect, useState } from "react";
import "./MultiUsesComponents.css";
import { useNavigate } from "react-router";

const OurCookingClass = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCourses(data[0].course));
  }, []);

  return (
    <>
      <div className="our-cooking-class-container">
        <div className="section ">
          <div className=" our-cooking-section">
            <div className="our-cooking-class-text" data-aos="zoom-in">
              <h6># Our Cooking Class</h6>
              <h1>
                Be The Best Chef As
                <br /> You Can Be
              </h1>
            </div>

            <div className="row section-row">
              {courses.map((course) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4"
                  key={course.id}
                >
                  <div
                    className="our-cooking-class-card-div"
                    data-aos="zoom-in"
                  >
                    <img src={course.thumble_img} alt={course.thumble_img} />
                    <h3>{course.title}</h3>
                    <p>{course.card_description}</p>
                    <button
                      onClick={() => {
                        navigate(`/course-detail/${course.id}`);
                      }}
                    >
                      <i class="fa-solid fa-paper-plane"></i> &nbsp; Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCookingClass;
