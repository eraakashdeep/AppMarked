import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CertificateVerify.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const CertificateVerify = () => {
  const [certificateId, setCertificateId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validId = "EC25DE1AE4";

    if (certificateId.trim() === validId) {
      setError("");
      navigate("/certificate-view-page", { state: { certificateId } });
    } else {
      setError("Certificate ID not found");
    }
  };

  return (
    <>
      <Navbar />
      <div className="verify-container">
        <div className="verify-box">
          <h1 className="verify-title">Verify Certificate</h1>
          <p className="verify-description">Enter the certificate ID below to verify its authenticity.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="verify-input"
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              required
            />
            <button type="submit" className="verify-button">Search</button>
          </form>
          {error && <p className="verify-error">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CertificateVerify;
