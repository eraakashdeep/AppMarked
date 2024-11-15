// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="mb-0 text-center">
//         <div className="d-flex align-items-center justify-content-center pb-5">
//           <div className="col-md-6">
//              <p className="mb-3 mb-md-0">
//              &copy; {new Date().getFullYear()} Developed by Aakash Deep. All
//              rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../Assets/images/Great-Place-to-Work.webp';
import logo1 from '../Assets/images/awards.jpg';
import logo2 from '../Assets/images/bestplaces.jpeg'
import client from "../Assets/Infojini.jpeg";
import client3 from "../Assets/CareerNet.png";
import client4 from "../Assets/hirect.png";
import client5 from "../Assets/vedantu.jpg";
import client6 from "../Assets/udemy.jpg";
import client7 from "../Assets/byjus.jpg";
import client8 from "../Assets/Simplilearn.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt="Great Work Logo" className="logo" />
          <img src={logo1} alt="Awards Logo" className="logo" />
          <img src={logo2} alt="BestPlaces Logo" className="logo" />
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/share/FQDDhT5Qr7dHyw5Y/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f social-icon"></i>
          </a>
          <a href="https://x.com/eraakashdeep?t=o8E99eumVmBcwY2MTtotrg&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter social-icon"></i>
          </a>
          <a href="https://www.linkedin.com/company/deeptedx/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in social-icon"></i>
          </a>
          <a href="https://www.instagram.com/deep_tedx?igsh=cmJiM3p3ODh6MjQw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram social-icon"></i>
          </a>
          <a href="http://www.youtube.com/@DeepTedx" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube social-icon"></i>
          </a>
        </div>
        <div className="client-logos">
          <img src={client} alt="Client 1 Logo" className="client-logo" />
          <img src={client3} alt="Client 4 Logo" className="client-logo" />
          <img src={client4} alt="Client 5 Logo" className="client-logo" />
          <img src={client5} alt="Client 6 Logo" className="client-logo" />
          <img src={client6} alt="Client 7 Logo" className="client-logo" />
          <img src={client7} alt="Client 8 Logo" className="client-logo" />
          <img src={client8} alt="Client 9 Logo" className="client-logo" />
        </div>
        <p className="footer-text"> &copy; {new Date().getFullYear()} Developed by APPMARKED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

