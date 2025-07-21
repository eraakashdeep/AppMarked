import React, { useRef } from "react";
import { Card, Button, Carousel } from "antd";
import "./CharityEducationPage.css";
import images from "../../assets/donate/images.jpeg";
import chelp from "../../assets/donate/chelp.png";
import childhelp from "../../assets/donate/child-help.png";
import ourkid from "../../assets/donate/OurKid.png";
import amazingGrace from "../../assets/donate/amazing_grace_children.jpeg";
import helpus from "../../assets/donate/helpus.jpeg";
import Banner from "../../assets/donate/Banner1-scaled.jpg";
import bg from "../../assets/donate/b2.jpg";
import qrcode from "../../assets/donate/qrcode.jpg";
const Donate = () => {
  const qrRef = useRef(null);

  const scrollToQR = () => {
    if (qrRef.current) {
      qrRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="charity-page">
      <div className="charity-logo">
        <img
          src={images}
          style={{ height: "85px", width: "100px" }}
          alt="Charity Logo"
        />
      </div>
      <section className="charity-hero">
        <div className="hero-content">
          <h1>Support Education for Underprivileged Children</h1>
          <p style={{color:"black"}}>
            Your donation helps provide books, school supplies, and a future.
          </p>
          <Button
            type="primary"
            size="large"
            className="donate-button"
            onClick={scrollToQR}
          >
            Donate Now
          </Button>
        </div>
      </section>
      <section className="charity-info">
        <div className="info-grid">
       <div className="info-images-row">
            <img style={{width:"500px",height:"200px"}} src={helpus} alt="Image 1" />
            <img src={Banner} style={{width:"500px",height:"200px"}} alt="Image 2" />
            <img src={bg} style={{width:"1000px",height:"400px"}} alt="Image 2" />
          </div>
          <div className="info-text">
            <h2>Why It Matters</h2>
            <p>
              Millions of children lack access to basic education. With your
              support, we help build schools, provide uniforms, nutritious
              meals, and hope for a better future.
            </p>
          </div>
        </div>
      </section>
      <section className="charity-pay" ref={qrRef}>
        <h2>Scan & Donate Instantly</h2>
        <p>
          Support our mission by scanning the QR code to make a quick donation.
        </p>
        <div className="qr-card">
          <Card bordered className="qr-container">
            <img
              src={qrcode}
              alt="Pay QR Code"
            />
          </Card>
        </div>
      </section>
      <div className="charity-marquee">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          🌟 Help a child dream — Donate for Education | Support the future,
          educate the poor | Give to grow: Educate every child | Charity Kid
          Foundation | 💖 Uplift through education 💖
        </marquee>
      </div>
      <section className="charity-clients">
        <h2>Trusted by Leading Organizations</h2>
        <div className="client-logos">
          <img
            src={chelp}
            alt="Client 1"
          />
          <img
            src={childhelp}
            alt="Client 2"
          />
          <img
            src={ourkid}
            alt="Client 3"
          />
          <img
            src={amazingGrace}
            alt="Client 4"
          />
        </div>
      </section>
      <footer className="charity-footer">
        &copy; {new Date().getFullYear()} Hope For Kids Foundation. All rights
        reserved. Powered by <strong>AppMarked</strong>
      </footer>
    </div>
  );
};
export default Donate;