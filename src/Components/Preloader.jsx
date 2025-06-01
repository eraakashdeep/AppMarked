import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <body class="my-special-page">
      <div className="preloader">
        <h1 className="brand-name1">
          <img width="50px" src="/img/icon.png" alt="" /> Resume Builder
        </h1>
        <div className="spinner"></div>
        <div className="welcome-text">
          <h1>👋 Welcome to APPMARKED Resume Builder webpage! 🚀</h1>
          <h3 className="preloaderh3">Let's build your resume! 🌟</h3>
        </div>
      </div>
    </body>
  );
};

export default Preloader;
