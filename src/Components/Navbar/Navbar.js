import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the React icons
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="logo">
          <a href="/">
            <img src="/assets/handyman-logo.png" alt="logo" width="250px"></img>
          </a>
        </div>
      {/* Use a React component for toggle with icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Conditionally render the navigation menu based on state */}
      <div className={isOpen ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/Testimonial">Testimonials</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
