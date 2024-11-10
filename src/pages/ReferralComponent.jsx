import React, { useState } from 'react';
import "./styles.css";

const ReferralComponent = ({ applyDiscount }) => {
  const [code, setCode] = useState('');

  const handleApply = () => {
    applyDiscount(code);
  };

  return (
    <div className="referral">
      <h2>Apply Referral Code / Offer</h2>
      <input 
        type="text" 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
        placeholder="Enter code" 
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default ReferralComponent;
