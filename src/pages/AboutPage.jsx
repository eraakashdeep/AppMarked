import React from "react";
import { Footer, Navbar } from "../components";
import advisor from "../Assets/rss.jpg";
import advisors from "../Assets/mrs.jpg";
import client from "../Assets/Infojini.jpeg";
import client1 from "../Assets/Quess.png";
import client3 from "../Assets/CareerNet.png";
import client4 from "../Assets/hirect.png";
import client5 from "../Assets/vedantu.jpg";
import client6 from "../Assets/vahak.png";
import client7 from "../Assets/kreditbee.png";
import client8 from "../Assets/blackbuck_logo-1.png";
import team from "../Assets/ssad.jpg";
import team1 from "../Assets/sp.jpg";
import team2 from "../Assets/ks.jpeg";
import avater from "../Assets/a.png";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Leading job consultancy and placement service dedicated to helping
          individuals at all career stages achieve their goals.As a premier job
          consultancy and placement provider, we are committed to helping
          individuals from recent graduates to seasoned professionals—achieve
          their career ambitions.Our Services:Job Consultancy & Placement: We
          offer tailored job consultancy and placement services, ensuring that
          your career trajectory is aligned with the latest industry demands.
          Our team of expert consultants leverages deep market insights to
          connect you with positions that reflect your skills and aspirations.
        </p>

        {/* <h2 className="text-center py-4">Meet our Advisors and Consultants</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={advisor}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Dr. Rakesh Shah</h5>
                <p className="card-title text-center">Colorectal Surgeon</p>
                <div className="text-center">
                  <a
                    href="https://www.facebook.com/share/QLzehHmQiLgBr1JY/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="mailto:example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={advisors}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Megha Rani Shah</h5>
                <p className="card-title text-center">Nursing Officer</p>
                <div className="text-center">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="mailto:example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4">Meet our Leadership Team</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={avater}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Er. Aakash Deep</h5>
                <p className="card-title text-center">CEO & CTO</p>
                <p className="card-title text-center">Software Engineer</p>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/eraakashdeep/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="mailto:example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={avater}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Er. Shiwangi Patra</h5>
                <p className="card-title text-center">Co-Founder</p>
                <p className="card-title text-center">Civil Engineer</p>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/shiwangi-patra-0975ab208/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="mailto:example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={avater}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Barsha Mahato</h5>
                <p className="card-title text-center">CFO</p>
                <p className="card-title text-center">Medicine Officer</p>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/barsha-mahato-a27141302/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="mailto:example@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <h2 className="text-center py-4">Our Clients</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Infojini</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client1}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Quess Corp</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client4}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Hirect
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client3}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">CareerNet</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client5}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Vedantu</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client6}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Vahak</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client7}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">KreditBee</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={client8}
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">BlackBuck</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
