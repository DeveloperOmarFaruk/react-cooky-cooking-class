import React, { useEffect, useState } from "react";
import "./MultiUsesComponents.css";
import { useParams } from "react-router";

const CookingClassDetail = () => {
  const [courseData, setCourseData] = useState([]);

  const { id } = useParams();

  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCourseData(data[0].course));
  }, []);

  const filterData = courseData.filter((item) => item.id == id);

  return (
    <>
      {filterData.map((item) => (
        <>
          <div className="section" key={item.id}>
            <div className="row section-row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="online-class-image" data-aos="zoom-in">
                  <img src={item.thumble_img} alt={item.thumble_img} />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="online-class-text" data-aos="zoom-in">
                  <h6># {item.type}</h6>
                  <h1>{item.title}</h1>
                  <p>{item.card_description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="cooking-class-details-div" data-aos="zoom-in">
              <h2>{item.name}</h2>
              <p>{item.full_description}</p>
            </div>
          </div>

          <div className="section">
            <div className="row section-row">
              {item.image.map((data) => (
                <div
                  className=" col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-4"
                  key={data.id}
                >
                  <div
                    className="cooking-class-details-img-div"
                    data-aos="zoom-in"
                  >
                    <img src={data.img} alt={data.img} />
                    <h5>{data.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default CookingClassDetail;
