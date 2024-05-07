import React, { useEffect, useState } from "react";
import "./MultiUsesComponents.css";
import { useParams } from "react-router";

const BlogReadDetails = () => {
  const [blogData, setBlogData] = useState([]);

  const { id } = useParams();

  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBlogData(data[0].blog));
  }, []);

  const filterData = blogData.filter((item) => item.id == id);

  return (
    <>
      {filterData.map((item) => (
        <>
          <div className="section" key={item.id}>
            <div className="row section-row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="online-class-text" data-aos="zoom-in">
                  <h6># {item.type}</h6>
                  <h1>{item.title}</h1>
                  <p>{item.thm_description}</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="online-class-image" data-aos="zoom-in">
                  <img src={item.img} alt={item.img} />
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="cooking-class-details-div" data-aos="zoom-in">
              <h2>{item.name}</h2>
              <p>{item.description_1}</p>

              <p>{item.description_2}</p>

              <p>{item.description_3}</p>
              <p>{item.description_4}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default BlogReadDetails;
