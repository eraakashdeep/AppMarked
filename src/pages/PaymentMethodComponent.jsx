import React, { useState } from 'react';
import "./styles.css";

const PaymentMethodComponent = ({ setPaymentMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSelection = (method) => {
    setSelectedMethod(method);
    setPaymentMethod(method);
  };

  return (
    <div className="payment-method">
      <h2>Payment Method</h2>
      <ul>
        <li onClick={() => handleSelection('Cash on Delivery')}>Cash on Delivery</li>
        <li onClick={() => handleSelection('UPI')}>UPI</li>
        <li onClick={() => handleSelection('Barcode')}>Barcode</li>
      </ul>
      <p>Selected Method: {selectedMethod}</p>
    </div>
  );
};

export default PaymentMethodComponent;
