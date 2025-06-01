import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Resume1Image from "./Resume1.jpg";
import Resume2Image from "./Resume2.jpg";
import "./HomeResume.css";
import Navbar from "../Components/Pages/Navbar";
import Footer from "../Components/Pages/Footer";
const HomeResume = () => {
  const [zoomedPicture, setZoomedPicture] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const handlePictureClick = (picture) => {
    setZoomedPicture(picture);
  };

  const closeZoomedPicture = () => {
    setZoomedPicture(null);
  };

  const toggleTooltip = (event, show) => {
    setShowTooltip(show);

    if (tooltipRef.current) {
      tooltipRef.current.style.left = `${
        event.currentTarget.offsetLeft + event.currentTarget.offsetWidth / 2
      }px`;
      tooltipRef.current.style.top = `${
        event.currentTarget.offsetTop + event.currentTarget.offsetHeight
      }px`;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="home-page">
        <h2
          style={{ textAlign: "center", marginTop: "5px" }}
          className="brand-name"
        >
          {/* <i className="fas fa-fire"></i> */}
          <img width="50px" src="/img/icon.png" alt="" />
          Build Your Resume
        </h2>

        <div className="pictures">
          <img
            src={Resume1Image}
            alt="First Resume"
            onClick={() => handlePictureClick(Resume1Image)}
            onMouseEnter={(e) => toggleTooltip(e, true)}
            onMouseLeave={(e) => toggleTooltip(e, false)}
          />
          <img
            src={Resume2Image}
            alt="Second Resume"
            onClick={() => handlePictureClick(Resume2Image)}
            onMouseEnter={(e) => toggleTooltip(e, true)}
            onMouseLeave={(e) => toggleTooltip(e, false)}
          />
          {showTooltip && (
            <div className="tooltip" ref={tooltipRef}>
              Click to zoom in
            </div>
          )}
        </div>

        <div className="buttons">
          <Link to="/resume-maker">
            <button className="primary-btn">First Resume</button>
          </Link>
          <Link to="/resume-second">
            <button className="primary-btn">Second Resume</button>
          </Link>

          <Link to="/resume-ats">
            <button className="primary-btn">Go to ATS Checker</button>
          </Link>
        </div>

        {zoomedPicture && (
          <div className="zoomed-picture" onClick={closeZoomedPicture}>
            <span className="close-btn" onClick={closeZoomedPicture}>
              &times;
            </span>
            <img src={zoomedPicture} alt="Zoomed Picture" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomeResume;
