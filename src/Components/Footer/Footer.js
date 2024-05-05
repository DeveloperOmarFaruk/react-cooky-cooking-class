import React from "react";
import "./Footer.css";
import FooterLogo from "../../Images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="section">
          <div className="row footer-container-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="footer-logo-div">
                <img src={FooterLogo} alt={FooterLogo} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-6 footer-service-div">
                  <h4>Service</h4>
                  <p>Supply</p>
                  <p>Communities</p>
                  <p>Equipment</p>
                </div>
                <div className="col-6 footer-service-div">
                  <h4>Further Links</h4>
                  <p>Term & Condition</p>
                  <p>News</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="footer-get-touch-div">
                <h4>Get In Touch</h4>
                <p>
                  <i class="fa-solid fa-location-dot"></i>&nbsp; 2443 Oak Ridge
                  Omaha, QA 45065
                </p>
                <p>
                  <i class="fa-solid fa-phone"></i>&nbsp; 207-8767-452
                </p>
                <p>
                  <i class="fa-solid fa-message"></i>&nbsp; support@site.com
                </p>
              </div>
            </div>
          </div>

          <div className="footer-copyright-div">
            <p>Copyright © 2024 cooky | Powered by Developer.OmarFaruk</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
