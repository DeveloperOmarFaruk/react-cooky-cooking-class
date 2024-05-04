import React from "react";
import "./Navbar.css";
import $ from "jquery";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavLogo from "../../Images/nav-logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  $(window).scroll(function () {
    if ($(document).scrollTop() < 1) {
      $(".header").removeClass("fixed");
      $(".header").removeClass("active");
    } else if ($(document).scrollTop() > 40) {
      $(".header").removeClass("fixed");
      $(".header").addClass("active");
    } else {
      $(".header").addClass("fixed");
    }
  });

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="logo" onClick={() => navigate("/")}>
              <img src={NavLogo} alt="logo" />
            </div>

            <input type="checkbox" id="click" />
            <label for="click" className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
            <ul>
              <li>
                <NavLink to="/" className="nav-links" activeClass="active">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about-us" className="nav-links">
                  About Us
                </NavLink>
              </li>

              <li>
                <div className="dropdown">
                  <NavLink className="nav-links" to="/services">
                    Pages
                    <i className="fa-solid fa-angle-down down-arrow"></i>
                  </NavLink>
                  <div className="dropdown-content">
                    <NavLink to="/web-development">Services</NavLink>
                    <NavLink to="/mobile-app-development">Course</NavLink>

                    <NavLink to="/api-integration-development">
                      Course Details
                    </NavLink>

                    <NavLink to="/qa-testing">Trainer</NavLink>

                    <NavLink to="/script-bot-automation">Pricing</NavLink>
                    <NavLink to="/ui-ux-design-development">Blog</NavLink>
                  </div>
                </div>
              </li>

              <li>
                <NavLink to="/contact" className="nav-links">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
