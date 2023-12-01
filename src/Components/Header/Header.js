// Header.js
import React from 'react';
import { FaYoutube, FaTimes, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="header">
        <div className="right">
          <FaFacebookF className="header-social-icon" />
          <FaTimes className="header-social-icon" />
          <FaInstagram className="header-social-icon" />
          <FaYoutube className="header-social-icon" />
        </div>
        <div>
          <span className="social-left">FAQs</span>
          <span className="social-left">Safety Policy</span>
          <span className="social-left">Privacy Policy</span>
          <span className="social-left">Contact Us</span>
        </div>
      </header>
    </div>
  );
}

export default Header;