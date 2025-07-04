import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [coupon, setCoupon] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const cleanPrice = (val) => parseFloat(val?.toString().replace(/[^0-9.]/g, '') || 0);

  const subtotal = cartItems.reduce((total, item) => {
    const price = cleanPrice(item.sale || item.price);
    return total + price * item.qty;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'phone', 'email', 'address', 'city', 'state', 'postalCode'];
    if (paymentMethod === 'card') {
      requiredFields.push('cardNumber', 'cardName', 'expiry', 'cvv');
    }

    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = true;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (!validateForm()) return;

    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    dispatch(clearCart()); // ✅ clear cart
    navigate(`/thank-you?orderId=${orderId}`);
  };

  return (
    <section className="checkout_sec p-5">
      <div className="container">
        <div className="row">
          {/* Billing Form */}
          <div className="col-md-7">
            <h4>Billing Details</h4>
            <div className="row g-3">
              {[
                { name: 'firstName', label: 'First Name' },
                { name: 'lastName', label: 'Last Name' },
                { name: 'phone', label: 'Phone' },
                { name: 'email', label: 'Email' },
                { name: 'address', label: 'Address', col: 12 },
                { name: 'apartment', label: 'Apartment (optional)' },
                { name: 'city', label: 'City' },
                { name: 'state', label: 'State' },
                { name: 'postalCode', label: 'Postal Code' },
              ].map(({ name, label, col = 6 }) => (
                <div className={`col-md-${col}`} key={name}>
                  <input
                    className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                    placeholder={label}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            {/* Payment Method */}
            <div className="mt-4">
              <h5>Payment Method</h5>
              <div className="form-check">
                <input
                  type="radio"
                  name="payment"
                  id="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="form-check-input"
                />
                <label htmlFor="cod" className="form-check-label">Cash on delivery</label>
              </div>
              <div className="form-check mt-2">
                <input
                  type="radio"
                  name="payment"
                  id="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="form-check-input"
                />
                <label htmlFor="card" className="form-check-label">Card</label>
              </div>

              {paymentMethod === 'card' && (
                <div className="mt-3 row g-3">
                  {[
                    { name: 'cardNumber', label: 'Card Number', col: 12 },
                    { name: 'cardName', label: 'Name on Card', col: 12 },
                    { name: 'expiry', label: 'MM/YY' },
                    { name: 'cvv', label: 'CVV' },
                  ].map(({ name, label, col = 6 }) => (
                    <div className={`col-md-${col}`} key={name}>
                      <input
                        className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                        placeholder={label}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="col-md-5">
            <h4>Your Order</h4>
            <div className="border p-3 rounded">
              {cartItems.map(item => (
                <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src={item.image} alt={item.name} style={{ width: '60px' }} />
                    <div>
                      <p className="mb-0">{item.name}</p>
                      <small>Qty: {item.qty}</small>
                    </div>
                  </div>
                  <p className="mb-0 fw-bold">${(cleanPrice(item.sale || item.price) * item.qty).toFixed(2)}</p>
                </div>
              ))}

              {/* Coupon */}
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="btn btn-primary">Apply</button>
              </div>

              {/* Subtotal */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="fw-bold mb-0">Subtotal</p>
                <p className="fw-bold mb-0">${subtotal.toFixed(2)}</p>
              </div>

              {/* Checkout Button */}
              <button className="btn btn-primary w-100 mt-3" onClick={handleCheckout}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;