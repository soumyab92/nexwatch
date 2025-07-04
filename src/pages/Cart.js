import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQty } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  // Helper to clean price
  const parsePrice = (val) =>
    parseFloat(val?.toString().replace(/[^0-9.]/g, '') || 0);

  // Redirect to shop if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/shop');
    }
  }, [cartItems, navigate]);

  // Quantity handler
  const handleQtyChange = (product, type) => {
    if (type === 'inc') {
      dispatch(updateQty({ id: product.id, qty: product.qty + 1 }));
    } else {
      if (product.qty > 1) {
        dispatch(updateQty({ id: product.id, qty: product.qty - 1 }));
      }
    }
  };

  // Remove item
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parsePrice(item.sale || item.price) * item.qty;
  }, 0);

  return (
    <section className="cart_sec p_80">
      <div className="container">
        <div className="row gy-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between p-3 mb-3 shadow-sm bg-white rounded"
              >
                <div className="d-flex align-items-center gap-3">
                  <img src={item.image} alt={item.name} width="80" />
                  <div>
                    <h5 className="mb-1">{item.name}</h5>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => handleQtyChange(item, 'dec')}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.qty}</span>
                      <button
                        onClick={() => handleQtyChange(item, 'inc')}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <p className="mb-0 fw-bold">
                    ${parsePrice(item.sale || item.price).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="btn btn-outline-danger"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="border rounded p-4 shadow-sm bg-white">
              <h4>Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span className="fw-bold">${subtotal.toFixed(2)}</span>
              </div>
              <small className="text-muted d-block mb-3">
                By continuing to checkout, you agree to our Terms of Use and Privacy Policy.
              </small>
              <Link to="/checkout" className="btn btn-primary w-100">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;