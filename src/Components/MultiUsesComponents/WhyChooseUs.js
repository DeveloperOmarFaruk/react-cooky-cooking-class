import React from "react";
import "./MultiUsesComponents.css";
import Certificate from "../../Images/Grains-and-Nuts1.png";
import Eat from "../../Images/Eat1.png";
import HatCap from "../../Images/Chefs-Hat1.png";
import Cutting from "../../Images/Cutting-Board1.png";

const WhyChooseUs = () => {
  return (
    <>
      <div className="section">
        <div className="row section-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="online-class-text" data-aos="zoom-in">
              <h6># Why Choose Us</h6>
              <h1>
                Helping You Find
                <br />
                Your Inner Chef
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed cursus massa. Nullam auctor augue neque, et faucibus est
                bibendum venenatis. Nunc eu erat velit. Nam ullamcorper rutrum
                nisi at pharetra. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="row section-row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12 why-choose-us-col-div"
                data-aos="zoom-in"
              >
                <img src={Certificate} alt={Certificate} />
                <h4>Certified Course</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12 why-choose-us-col-div"
                data-aos="zoom-in"
              >
                <img src={Eat} alt={Eat} />
                <h4>Plating Arts</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12 why-choose-us-col-div"
                data-aos="zoom-in"
              >
                <img src={Cutting} alt={Cutting} />
                <h4>Cutting Mastery</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12 why-choose-us-col-div"
                data-aos="zoom-in"
              >
                <img src={HatCap} alt={HatCap} />
                <h4>Seasoned Chef</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
