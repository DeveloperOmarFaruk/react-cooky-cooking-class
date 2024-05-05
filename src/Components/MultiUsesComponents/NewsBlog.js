import React from "react";
import "./MultiUsesComponents.css";
import Cooked from "../../Images/cooked-ingredients-for-dietary-salad.jpg";
import Vagetarian from "../../Images/vegetarian-dish-ratatouille.jpg";
import Cooking from "../../Images/cooking-masterclass-for-children-in-the-kitchen.jpg";

const NewsBlog = () => {
  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12">
            <div className="our-cooking-class-text">
              <h6># News & Blog</h6>
              <h1>Recent Blog</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 sol-xs-12">
            <div className="our-cooking-class-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse non purus feugiat, luctus arcu vel, molestie sapien.
                Ut fringilla mattis risus, non placerat nibh. Duis vulputate
                purus in malesuada finibus.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="news-blog-card">
              <img src={Cooked} alt={Cooked} />
              <div className="news-blog-card-text">
                <h3>Cooks With Importance</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse non purus feugiat, luctus arcu vel, molestie
                  sapien. Ut fringilla mattis risus, non placerat nibh. Duis
                  vulputate purus in malesuada finibus.
                </p>

                <button>read more</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="news-blog-card">
              <img src={Vagetarian} alt={Vagetarian} />
              <div className="news-blog-card-text">
                <h3>Wonderful And Contentful</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse non purus feugiat, luctus arcu vel, molestie
                  sapien. Ut fringilla mattis risus, non placerat nibh. Duis
                  vulputate purus in malesuada finibus.
                </p>

                <button>read more</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="news-blog-card">
              <img src={Cooking} alt={Cooking} />
              <div className="news-blog-card-text">
                <h3>Turning Students Into Chefs</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse non purus feugiat, luctus arcu vel, molestie
                  sapien. Ut fringilla mattis risus, non placerat nibh. Duis
                  vulputate purus in malesuada finibus.
                </p>

                <button>read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsBlog;
