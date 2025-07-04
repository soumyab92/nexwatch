import React from 'react';

const ProductInfo = ({ name, price, sale, discount, qty, setQty, description }) => {
  const getNumericPrice = (value) => {
    if (!value) return 0;
    return parseFloat(value.replace(/[^\d.]/g, ''));
  };

  const displayPrice = getNumericPrice(sale || price);
  const originalPrice = getNumericPrice(price);

  const handleIncrease = () => setQty(prev => prev + 1);
  const handleDecrease = () => setQty(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product_info">
      <h2>{name}</h2>

      <p className="price">
        ${displayPrice.toFixed(2)}
        {sale && (
          <span className="ms-2 text-muted text-decoration-line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </p>

      {discount && <p className="text-success">{discount}% Off</p>}

      {description && (
        <p className="product-desc mt-3">{description}</p>
      )}

      <div className="qty-box mt-3 d-flex align-items-center gap-2">
        <label className="me-2">Quantity:</label>
        <button className="btn btn-outline-secondary" onClick={handleDecrease}>−</button>
        <span className="px-3">{qty}</span>
        <button className="btn btn-outline-secondary" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default ProductInfo;