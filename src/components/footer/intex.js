import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section company-info">
          <h2>Timesseo</h2>
          <p>
            Timesseo is an expert SEO agency dedicated to boosting your online visibility
            and driving growth. We create customized strategies to improve search rankings,
            increase traffic, and elevate your brand’s presence.
          </p>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>On Page SEO</li>
            <li>Off Page SEO</li>
            <li>Technical SEO</li>
            <li>Keyword Research</li>
            <li>SEO Audits</li>
            <li>Content Optimization</li>
            <li>SEO Consulting</li>
            <li>Link Buildings</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>4th Floor, Tower B, Tech Park, Sector 62, Noida, Uttar Pradesh, India</li>
            <li>+91 9876543210</li>
            <li>+91 9876549494</li>
            <li>untypeetch@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© All Rights Reserved The Untypetech</p>
        <div className="footer-links">
          <span>Term of Use</span>
          <span>Privacy Policy</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
