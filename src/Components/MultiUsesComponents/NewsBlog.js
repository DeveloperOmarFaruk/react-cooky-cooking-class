import React, { useEffect, useState } from "react";
import "./MultiUsesComponents.css";
import { useNavigate } from "react-router-dom";

const NewsBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const URL = `https://developeromarfaruk.github.io/react-cooky-cooking-class-api/cookingClassData.json`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setBlogData(data[0].blog));
  }, [URL]);

  const navigate = useNavigate();

  return (
    <>
      <div className="section">
        <div className="row section-row">
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12 mt-4">
            <div className="our-cooking-class-text" data-aos="zoom-in">
              <h6># News & Blog</h6>
              <h1>Recent Blog</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12 mt-4">
            <div className="our-cooking-class-text" data-aos="zoom-in">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse non purus feugiat, luctus arcu vel, molestie sapien.
                Ut fringilla mattis risus, non placerat nibh. Duis vulputate
                purus in malesuada finibus.
              </p>
            </div>
          </div>
        </div>

        <div className="row section-row">
          {blogData.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="news-blog-card" data-aos="zoom-in">
                <img src={item.img} alt={item.img} />
                <div className="news-blog-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.thm_description}</p>

                  <button
                    onClick={() => {
                      navigate(`/blog-detail/${item.id}`);
                    }}
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsBlog;
