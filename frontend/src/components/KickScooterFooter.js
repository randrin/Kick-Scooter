import React from "react";
import { Link } from "react-router-dom";

const KickScooterFooter = () => {
  return (
    <footer className="footer-wrapper footer footer-dark">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="widget widget-about">
                <img
                  src="assets/images/demos/demo-10/logo-footer.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                />
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat.{" "}
                </p>

                <div className="social-icons">
                  <a
                    href="#"
                    className="social-icon"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Youtube"
                    target="_blank"
                  >
                    <i className="icon-youtube"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>

                <ul className="widget-list">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <a href="#">How to shop on Molla</a>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/signin">Log in</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>

                <ul className="widget-list">
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Money-back guarantee!</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>

                <ul className="widget-list">
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/cart">View Cart</Link>
                  </li>
                  {/* <li>
                    <a href="#">My Wishlist</a>
                  </li> */}
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2019 Molla Store. All Rights Reserved.
          </p>
          <figure className="footer-payments">
            <img
              src="assets/images/payments.png"
              alt="Payment methods"
              width="272"
              height="20"
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default KickScooterFooter;
