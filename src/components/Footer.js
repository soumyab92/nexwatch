import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark p_80 pb-0 text-white">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4 desc_box">
            <div className="mb-3">
              <img
                src="/images/white-logo.png"
                srcSet="/images/white-logo@2x.png 2x, /images/white-logo@3x.png 3x"
                alt="NexWatch Logo"
                className="logo_brand"
              />
            </div>
            <p>
              At Nex Watch, we believe a watch is more than just a timekeeper—it's a
              statement. We offer a curated selection of premium watches that blend
              craftsmanship, innovation, and timeless style.
            </p>
            <div className="d-flex gap-2 social-icon">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-md-2 col-6 mb-4">
            <ul className="list-unstyled common_ul">
              <li><a href="#" className="text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-decoration-none">Services</a></li>
              <li><a href="#" className="text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-decoration-none">Brands</a></li>
              <li><a href="#" className="text-decoration-none">Shop</a></li>
              <li><a href="#" className="text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-md-2 col-6 mb-4">
            <ul className="list-unstyled common_ul">
              <li><a href="#" className="text-decoration-none">Support</a></li>
              <li><a href="#" className="text-decoration-none">Knowledge Base</a></li>
              <li><a href="#" className="text-decoration-none">Live Chat</a></li>
              <li><a href="#" className="text-decoration-none">Return/Exchange</a></li>
              <li><a href="#" className="text-decoration-none">Shipping Policy</a></li>
              <li><a href="#" className="text-decoration-none">Sitemap</a></li>
            </ul>
          </div>

          {/* Subscribe and Payments */}
          <div className="col-md-4 mb-4">
            <h6><i className="far fa-envelope"></i> Subscribe Us</h6>
            <form className="d-flex">
              <input type="email" className="form-control" placeholder="Enter your Email" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div>
              <h4>Secure Checkout</h4>
              <div className="mt-2">
                <img src="/images/cards.svg" alt="Cards" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top border-white mt-3 copy-rights">
          <p className="mb-0">© 2025 Nex Watch. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-decoration-none">Terms &amp; Condition</a>
            <a href="#" className="text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;