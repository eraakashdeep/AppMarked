import React from 'react';
import "./styles.css";

const OrderSummaryComponent = ({ items, discount, paymentMethod }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const discountedTotal = total - discount;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Total: ${total}</p>
      <p>Discount: ${discount}</p>
      <p>Amount to Pay: ${discountedTotal}</p>
      <p>Payment Method: {paymentMethod}</p>
    </div>
  );
};

export default OrderSummaryComponent;
