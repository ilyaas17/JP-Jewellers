import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Gold Jewelry Co. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="footer-links">
              <li><a href="#" target='_blank'>Terms of Service</a></li>
              <li><a href="#" target='_blank'>Privacy Policy</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
