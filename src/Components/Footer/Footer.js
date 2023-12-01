import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons
import './Footer.css'; // Import your CSS file
import { FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
    <div className='footer-container-black'>
    <div className='footer-black1'>
      <p>Highly Qualified, Time Served Professional Handyman</p>
    </div>
    <div className='footer-black2'>
       <p><FaPhone  className="footer-black2-icon"/>1-800-123-4567</p>
    </div>
    </div>

    <div className='footer-container-yellow'>
    <div className='footer-yellow1'>
      <img  className="footer-yellow1-img" src="assets/handyman-logo.png" alt="handyman"></img>
    </div>
    <div className='footer-yellow2'>
       <button className='footer-yellow-button1'>Chat Directly With Us</button>
       <button className='footer-yellow-button2'>Book An Appointment</button>
    </div>
    </div>

      <div className="footer-container">
        <div className="footer-item">
          <ul>
            <li>Services</li>
            <li>Testimonials</li>
            <li>About Us</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li>Carpentry</li>
            <li>Maintenance</li>
            <li>Decorating</li>
            <li>Plumbing</li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li>FAQs</li>
            <li>Safety Policy</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li>
              <div className='footer-icon'>
                Like Us On Facebook
                <FaFacebook className="social-icon" />
              </div>
            </li>
            <li>
              <div className='footer-icon'>
              
                Follow Us On Twitter
                <FaTwitter className="social-icon" />
              </div>
            </li>
            <li>
              <div className='footer-icon'>
             
                Follow Us On Instagram
                <FaInstagram className="social-icon" />
              </div>
            </li>
            <li >
              <div className='footer-icon'>
                Follow Us On LinkedIn
                <FaLinkedin className="social-icon" />
              </div>
            </li>
          </ul>
        </div>

      </div>
      <hr className='footer-hr'></hr>
      <h4 className='footer-copyright'>© Copyright 2012 - 2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</h4>
    </footer>
  );
}

export default Footer;
