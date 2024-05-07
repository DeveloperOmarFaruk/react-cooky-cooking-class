import React from "react";
import "./MultiUsesComponents.css";
import Watch from "../../Images/watch-icon.png";
import Address from "../../Images/adress-icon.png";
import Message from "../../Images/message-icon.png";

const ContactUsComponent = () => {
  return (
    <>
      <div className="contact-us-component-container">
        <div className="section contact-us-component-section">
          <div className="row section-row ">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
              <div className="contact-us-component-div" data-aos="zoom-in">
                <h4># Contact Us</h4>
                <h1>Get In Touch</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>

                <form className="contact-us-component-form">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Your Name"
                    />
                    <label for="floatingInput">Your Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Your Email"
                    />
                    <label for="floatingInput">Your Email</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Title"
                    />
                    <label for="floatingPassword">Title</label>
                  </div>

                  <div className="form-floating mt-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label for="floatingTextarea2">Message</label>
                  </div>

                  <button>Send</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
              <div className="contact-us-component-address" data-aos="zoom-in">
                <img src={Watch} alt={Watch} />
                <h3>Opening Hours</h3>
                <p>Mon-Fri: 9 AM – 6 PM</p>
                <p>Saturday: 9 AM – 4 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="contact-us-component-address" data-aos="zoom-in">
                <img src={Address} alt={Address} />
                <h3>Address</h3>
                <p>2443 Oak Ridge Omaha, QA 45065</p>
              </div>

              <div className="contact-us-component-address" data-aos="zoom-in">
                <img src={Message} alt={Message} />
                <h3>Our Contact</h3>
                <p>Telephone: 207-8767-452</p>
                <p>Email: support@site.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsComponent;
