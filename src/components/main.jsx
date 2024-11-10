import React from "react";
import logo from "../Assets/Home.png";
import "../pages/styles.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
        <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>
      </div>
          {/* <img
            className="card-img img-fluid"
            src={logo}
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
              <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/product">Browse Jobs</Link>
        </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
