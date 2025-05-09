import React from "react";
import "./Opportunity.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Opportunity = () => {
  return (
    <div>
    <Navbar/>
    <div className="react-page">
      <h1 className="page-title">🚀 React JS Tech Challenge is LIVE!</h1>

      <a
        href="https://forms.gle/ND1nWM1QRrc7jJ1e8"
        target="_blank"
        rel="noopener noreferrer"
        className="react-tab"
      >
        👉Register Now
      </a>

      <div className="marquee-container">
        <div className="marquee-text">
          🚀 Learn React - Build amazing UIs - We're excited to launch the React JS Tech Challenge, powered by AppMarked!
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Opportunity;
