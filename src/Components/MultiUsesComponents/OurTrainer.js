import React from "react";
import "./MultiUsesComponents.css";
import "./OurTrainer.css";

const OurTrainer = (props) => {
  const trainerData = props.trainerData;

  console.log(trainerData);
  return (
    <>
      <div className="section">
        <div className="row section-row">
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12 mt-4">
            <div className="our-cooking-class-text" data-aos="zoom-in">
              <h6># Our Trainer</h6>
              <h1>Meet Our Chef</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12 mt-4">
            <div className="our-cooking-class-text" data-aos="zoom-in">
              <p>
                Morbi metus augue, molestie eget imperdiet sit amet, iaculis
                vitae mi. Duis sagittis lobortis tellus ornare ornare. Donec sed
                vestibulum lacus, ac pellentesque tellus. Curabitur laoreet
                egestas aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="row section-row">
          {trainerData.map((item) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="wrapper" data-aos="zoom-in">
                <div className="box vintage">
                  <img src={item.image} alt={item.image} />
                  <h2>{item.name}</h2>
                  <p>{item.degicnation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTrainer;
