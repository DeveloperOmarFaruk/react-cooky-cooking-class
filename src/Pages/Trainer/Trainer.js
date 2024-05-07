import React, { useEffect, useState } from "react";
import "./Trainer.css";
import "../About/About.css";
import "../Home/Home.css";
import "../../Components/MultiUsesComponents/MultiUsesComponents.css";
import { useNavigate } from "react-router-dom";
import StayUpDate from "../../Components/MultiUsesComponents/StayUpDate";
import OurTrainer from "../../Components/MultiUsesComponents/OurTrainer";

const Trainer = () => {
  const navigate = useNavigate();

  const [trainerData, setTrainerData] = useState([]);

  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTrainerData(data[0].trainer));
  }, [URL]);

  return (
    <>
      <div className="pages-header-container">
        <div className="section">
          <div className="pages-header-div">
            <h1>Trainer</h1>
          </div>

          <div className="pages-header-button-div">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>{" "}
            <i class="fa-solid fa-angle-right"></i> <p>Trainer</p>
          </div>
        </div>
      </div>

      <div className="online-container">
        <OurTrainer trainerData={trainerData} />
      </div>

      <div>
        <StayUpDate />
      </div>
    </>
  );
};

export default Trainer;
