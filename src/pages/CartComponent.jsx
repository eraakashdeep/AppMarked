import React from 'react';
import "./styles.css";

const CartComponent = ({ items }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
