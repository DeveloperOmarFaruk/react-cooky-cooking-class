import React from "react";
import "./MultiUsesComponents.css";
import Cooking from "../../Images/cooking-masterclass-for-children-in-the-kitchen2.jpg";
import Bake from "../../Images/Bake.png";
import Chop from "../../Images/Chop-1.png";
const ChildSpecialCourse = () => {
  return (
    <>
      <div className="section">
        <div className="row section-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="online-class-text" data-aos="zoom-in">
              <h6># Child Special Course</h6>
              <h1>
                There’s Fun In <br /> The Kitchen
              </h1>
              <p>
                Phasellus nisi felis, gravida at neque quis, tristique dictum
                est. Fusce accumsan diam lobortis nisi varius accumsan. Sed
                tincidunt rhoncus metus, quis tincidunt dolor malesuada sit
                amet.
              </p>
            </div>

            <div className="row child-course-row section-row">
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-sx-12 child-course-div"
                data-aos="zoom-in"
              >
                <img src={Bake} alt={Bake} />
                <h4>Cook And Bake</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-6 col-sx-12 child-course-div"
                data-aos="zoom-in"
              >
                <img src={Chop} alt={Chop} />
                <h4>Cutting Guidance</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="online-class-image" data-aos="zoom-in">
              <img src={Cooking} alt={Cooking} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildSpecialCourse;
