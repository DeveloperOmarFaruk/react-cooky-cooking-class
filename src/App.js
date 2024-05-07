import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Course from "./Pages/Course/Course";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Trainer from "./Pages/Trainer/Trainer";
import Pricing from "./Pages/Pricing/Pricing";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error/Error";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Animaion
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail/:id" element={<BlogDetails />} />
        <Route path="/course-detail/:id" element={<CourseDetails />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
