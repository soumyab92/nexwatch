import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductActions = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    onAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="d-flex gap-3 mt-3">
      <button className="btn btn-outline-primary" onClick={onAddToCart}>
        Add To Cart
      </button>
      <button className="btn btn-primary" onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;