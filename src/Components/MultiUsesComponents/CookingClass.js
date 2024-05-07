import React from "react";
import "./MultiUsesComponents.css";
import ProfessionalChef from "../../Images/professional-chef2.png";

const CookingClass = () => {
  return (
    <>
      <div className="section">
        <div className="row section-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="online-class-text" data-aos="zoom-in">
              <h6># Cooking Class</h6>
              <h1>
                The Best Cooking <br />
                Class In Town
              </h1>
              <p>
                Etiam maximus ipsum in magna sollicitudin, dignissim luctus
                turpis pulvinar. Donec consectetur maximus dui, sed condimentum
                diam maximus eu. Integer et bibendum augue, non sodales nisl.
                Suspendisse ultrices eleifend massa, vel suscipit felis aliquet
                vitae.
              </p>

              <p>
                Vivamus id accumsan sapien. Etiam ut mauris viverra, congue odio
                in, aliquet sem. Praesent efficitur molestie dui, id condimentum
                neque tristique cursus.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="online-class-image" data-aos="zoom-in">
              <img src={ProfessionalChef} alt={ProfessionalChef} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookingClass;
