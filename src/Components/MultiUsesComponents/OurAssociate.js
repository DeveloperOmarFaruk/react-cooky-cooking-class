import React, { useEffect, useState } from "react";
import "./MultiUsesComponents.css";

const OurAssociate = () => {
  const [associateData, setAssociateData] = useState([]);
  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAssociateData(data[0].associate));
  }, [URL]);

  return (
    <>
      <div className="section">
        <div className="our-cooking-class-text" data-aos="zoom-in">
          <h6># Our Associate</h6>
          <h1>In Partnership With</h1>
        </div>

        <div className="row section-row ">
          {associateData.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6" key={item.id}>
              <div className="our-associate-img" data-aos="zoom-in">
                <img src={item.img} alt={item.img} />
              </div>
            </div>
          ))}
        </div>

        <div className="our-associate-text-div" data-aos="zoom-in">
          <i class="fa-solid fa-quote-left"></i>
          <p>
            Etiam vitae libero eget est sodales accumsan sed in eros.
            Suspendisse gravida tellus libero, a sagittis orci rhoncus
            dignissim. Suspendisse a commodo ante. Nunc eget dui pretium,
            lacinia neque ut, tincidunt felis.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurAssociate;
