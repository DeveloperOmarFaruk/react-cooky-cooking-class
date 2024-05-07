import React from "react";
import "./MultiUsesComponents.css";

const OurCoursePlan = (props) => {
  const priceData = props.priceData;
  return (
    <>
      <div className="section">
        <div
          className="online-class-text our-course-plan-header-text"
          data-aos="zoom-in"
        >
          <h6># Choose Your Plan</h6>
          <h1>Our Course Plan</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="section our-course-plan-section">
        <div className="row section-row">
          {priceData.map((item) => (
            <div
              className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="our-course-plan-card" data-aos="zoom-in">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h5>
                  <span>${item.price}</span>/Month
                </h5>

                <h6>{item.course_offer1}</h6>
                <h6>{item.course_offer2}</h6>
                <h6>{item.course_offer3}</h6>
                <h6>{item.course_offer4}</h6>
                <button>Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurCoursePlan;
