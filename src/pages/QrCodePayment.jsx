// src/QrCodePayment.js
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import Barcode from "../Assets/Barcode.jpg";
import Gpay from "../Assets/gpay.png";
import Phonepay from "../Assets/PhonePe.png";
import Paytm from "../Assets/Paytm.jpg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const QrCodePayment = () => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          navigate(-1); 
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleCancel = () => {
    setShowPopup(true);
  };

  const handleConfirmCancel = () => {
    setShowPopup(false);
    navigate(-1);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="qr-payment">
      <h2>Scan And Pay</h2>
      <p>Scan with any UPI App</p>
      {/* <QRCode value="https://example.com/payment" size={200} /> */}
      <img src={Barcode} width="200px" />
      <p>
        Valid for <span className="time">{formatTime(timeLeft)}</span> minutes
      </p>
      <div className="payment-icons">
        <img src={Gpay} width="100px" alt="GPay" />
        <img src={Phonepay} width="100px" alt="PhonePe" />
        <img src={Paytm} width="100px" alt="Paytm" />
        {/* <span>& more</span> */}
      </div>
      <button className="cancel-button" onClick={handleCancel}>
        Cancel Payment
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to cancel the payment?</p>
            <button onClick={handleConfirmCancel}>Yes</button>
            <button onClick={handleClosePopup}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QrCodePayment;
