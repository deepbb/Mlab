// Home.js

import React from "react";
import "./Home.css"; // Import CSS file for styling
import { FaCheck } from "react-icons/fa";
function Home() {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-background-image">
          <div className="overlay-text">
            <h3 className="Home-header-text-top">TRUSTED HANDYMAN SERVICES</h3>
            <h1 className="Home-header-text-middle">
              Trusted & Reliable Handyman Services
            </h1>
            <div className="Home-underline"></div>
            <h3 className="Home-header-text-bottom">
              Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue
              leo eget malesuada praesent sapien masse.
            </h3>
          </div>
        </div>
      </div>
      <div className="Home-Services-container">
        <div className="Home-Services">
          <img
            className="Home-service-img"
            src="/assets/maintance.jpg"
            alt="maintance"
          ></img>
          <h2>Maintenance</h2>
          <p>
            Nulla quis lorem ut libero malesuada feugiat mauris blandit aliquet
            elit.
          </p>
          <button className="Home-service-button">Read More</button>
        </div>
        <div className="Home-Services">
          <img
            className="Home-service-img"
            src="assets/plumbing.jpg"
            alt="plumbing"
          ></img>
          <h2>Plumbing</h2>
          <p>
            Nulla quis lorem ut libero malesuada feugiat mauris blandit aliquet
            elit.
          </p>
          <button className="Home-service-button">Read More</button>
        </div>
        <div className="Home-Services">
          <img
            className="Home-service-img"
            src="assets/decorating.jpg"
            alt="decorating"
          ></img>
          <h2>Decorating</h2>
          <p>
            Nulla quis lorem ut libero malesuada feugiat mauris blandit aliquet
            elit.
          </p>
          <button className="Home-service-button">Read More</button>
        </div>
      </div>

      <div className="Home-service-background"></div>

      <div className="Home-paragraph-container">
        <div className="Home-paragraph-flex1">
          <h3 className="Home-paragraph-h3">HIGHLY EXPERIENCED HANDYMEN</h3>
          <h1 className="Home-paragraph-h1">Ready & Waiting To Assist</h1>
          <div className="Home-paragraph-hr"></div>
          <div className="checklist">
            <ul>
              <li className="Home-paragraph-checklist">
                <FaCheck className="Home-checklist" />
                Pellentesque in ipsum id orci porta dapibus.
              </li>
              <li className="Home-paragraph-checklist">
                <FaCheck className="Home-checklist" />
                Donec rutrum congue leo eget malesuada.
              </li>
              <li className="Home-paragraph-checklist">
                <FaCheck className="Home-checklist" />
                Praesent sapien massa, convallis a pellentesque.
              </li>
              <li className="Home-paragraph-checklist">
                <FaCheck className="Home-checklist" />
                Egestas non nisi donec sollicitudin molestie.
              </li>
            </ul>
          </div>
        </div>

        <div className="Home-paragraph-flex2">
          <img
            className="Home-paragraph1-img"
            src="assets/paragraph1.jpg"
            alt="paragraph1"
          ></img>
        </div>
      </div>
      <div className="Home-paragraph-container">
        <div className="Home-paragraph-flex2">
          <img
            className="Home-paragraph2-img"
            src="assets/paragraph2.jpg"
            alt="paragraph2"
          ></img>
        </div>

        <div className="Home-paragraph-flex1">
          <h3 className="Home-paragraph-h3">HIGHLY EXPERIENCED HANDYMEN</h3>
          <h1 className="Home-paragraph-h1">Best Services In Town</h1>
          <div className="Home-paragraph-hr"></div>
          <div className="checklist">
            <p>Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis
             a pellentesque nec, egestas non nisi. Donec sollicitudin molestie.</p>
             <button className="Home-paragraph2-button">Learn more about us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
