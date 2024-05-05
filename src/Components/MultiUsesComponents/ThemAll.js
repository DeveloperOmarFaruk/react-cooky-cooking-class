import React from "react";
import "./MultiUsesComponents.css";
import Grilled from "../../Images/grilled-fish.png";
import Kastu from "../../Images/kastu-sanwiche.png";
import Curry from "../../Images/carry-fried-rice.png";

const ThemAll = () => {
  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12">
            <div className="our-cooking-class-text">
              <h6># We'll Cook Them All</h6>
              <h1>
                From Easy Meal To
                <br /> Exquisite Dish
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12">
            <div className="our-cooking-class-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                cursus, tortor nec dignissim semper, felis eros venenatis metus,
                id molestie sapien augue mattis lacus. Curabitur vel nibh
                libero.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="theme-all-card">
              <img src={Grilled} alt={Grilled}></img>
              <h3>Grilled Fish</h3>
              <div>
                <div>
                  <p className="pt-4">Difficulty</p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar progress-edit-50">Easy</div>
                  </div>
                </div>

                <div>
                  <p className="pt-4">Preparation</p>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar progress-edit-80">Moderate</div>
                  </div>
                </div>

                <div>
                  <p className="pt-4">Cooking Time</p>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Warning example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar progress-edit-50">Quick</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="theme-all-card">
              <img src={Kastu} alt={Kastu}></img>
              <h3>Katsu Sandwich</h3>
              <div>
                <div>
                  <p className="pt-4">Difficulty</p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar progress-edit-80">Medium</div>
                  </div>
                </div>

                <div>
                  <p className="pt-4">Preparation</p>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar progress-edit-50">Quick</div>
                  </div>
                </div>

                <div>
                  <p className="pt-4">Cooking Time</p>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Warning example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar progress-edit-80">Moderate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="theme-all-card">
              <img src={Curry} alt={Curry}></img>
              <h3>Curry Fried Rice</h3>
              <div>
                <div>
                  <p className="pt-4">Difficulty</p>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar progress-edit-80">Medium</div>
                  </div>
                </div>

                <div>
                  <p className="pt-4">Preparation</p>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar progress-edit-80">Moderate</div>
                  </div>
                </div>

                <div>
                  <p className="pt-4">Cooking Time</p>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Warning example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar progress-edit-100">Long</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemAll;
