import React from "react";
import "./MultiUsesComponents.css";
import CountUp from "react-countup";

const CountUpComponent = () => {
  return (
    <>
      <div className="count-up-background-container">
        <div className="section">
          <div className="count-up-background-section">
            <div className="row section-row">
              <div
                className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter-div"
                data-aos="zoom-in"
              >
                <h1>
                  <CountUp start={0} end={114} duration={8} />+
                </h1>
                <p>Active Trainee</p>
              </div>

              <div
                className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter-div"
                data-aos="zoom-in"
              >
                <h1>
                  <CountUp start={0} end={16} duration={8} />
                </h1>
                <p>Chef Trainer</p>
              </div>

              <div
                className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter-div"
                data-aos="zoom-in"
              >
                <h1>
                  <CountUp start={0} end={30} duration={8} />
                </h1>
                <p>Certification</p>
              </div>

              <div
                className="col-lg-3 col-md-3 col-sm-6 col-xs-6 counter-div"
                data-aos="zoom-in"
              >
                <h1>
                  <CountUp start={0} end={120} duration={8} />+
                </h1>
                <p>Cooking Competition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountUpComponent;
