import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const query = new URLSearchParams(useLocation().search);
  const orderId = query.get('orderId');

  return (
    <div className="container py-5 text-center">
      <h2>🎉 Thank you for your order!</h2>
      <p>Your order ID is <strong>{orderId}</strong>.</p>
      <p>We’ll send you a confirmation email shortly.</p>
    </div>
  );
};

export default ThankYou;