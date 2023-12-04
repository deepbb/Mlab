// Home.js

import React from "react";
import "./Home.css"; // Import CSS file for styling
import { FaCheck } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import { CiBurger } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

function Home() {
  const HomeBlackBox = ({ backgroundImg, heading, paragraph }) => {
    const flexStyle = {
      flex: "1 1 100%",
      height: "380px",
      width: "100%",
      alignItem: "center",
      justifyContent: "center",
      paddingTop: "60px",
      fontSize: "20px",
      marginRight: "20px",
      marginBottom: "20px",
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      opacity: "0.4",
      color: "#fff",
      textAlign: "Center",
    };

    return (
      <div className="Home-container-black-style" style={flexStyle}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    );
  };

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
            <p>
              Nulla porttitor accumsan tincidunt. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi. Donec sollicitudin
              molestie.
            </p>
            <button className="Home-paragraph2-button">
              Learn more about us
            </button>
          </div>
        </div>
      </div>

      <div className="Home-services-black-background">
        <h1>Mauris Blandit Aliquet Elit</h1>
        <div className="Home-services-black-background-underline"></div>
        <p>
          Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi. Donec sollicitudin molestie.
        </p>
        <div className="Home-service-black-container">
          <div className="Home-service-black">
            <HomeBlackBox
              className="Home-service-black1"
              backgroundImg="assets/decorating.jpg"
              heading="Decorating"
              paragraph="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
            <HomeBlackBox
              backgroundImg="assets/corpate.jpg"
              heading="Carpentry"
              paragraph="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          </div>
          <div className="Home-service-black">
            <HomeBlackBox
              backgroundImg="assets/plumbing.jpg"
              heading="Maintenance"
              paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <HomeBlackBox
              backgroundImg="assets/maintance.jpg"
              heading="Plumbing"
              paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
            />
          </div>
        </div>
      </div>

      <div className="Home-help-container">
        <div className="Home-help-one">
          <h5 className="Home-help-Header">HIGHLY EXPERIENCED HANDYMEN</h5>
          <h1 className="Home-Help-h1">We’re Here To Help</h1>
          <div className="Home-paragraph-hr"></div>
          <p>
            Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis
            a pellentesque nec, egestas non nisi. Donec sollicitudin molestie.
          </p>
          <div className="Home-help-icon-container">
            <div className="Home-help-h4">
              <CiBurger className="Home-help-icon" />
              We’re fully protected with the correct equipment
            </div>
            <div className="Home-help-h4">
              <PiMedalBold className="Home-help-icon" />
              We have all of the regulatory safety certificates
            </div>
          </div>
        </div>
        <div className="Home-help-two">
          <img src="assets/women.jpg" alt="" className="home-help-img"></img>
        </div>
      </div>

      <div className="Home-workshop-new-heading">
        <div className="Home-workshop-heading">
          <h6>ARTICLES FROM THE WORKSHOP</h6>
          <h1>Latest Handyman News</h1>
          <div>
            <hr className="Home-Workshop-hr"></hr>
          </div>
        </div>
        <div className="Home-workshop-heading1">
          <button className="Home-workshop-button">Read More News</button>
        </div>
      </div>
      <div className="Home-Workshop-news-container">
        <div className="Home-Workshop-news">
          <img
            src="assets/decking.jpg"
            alt=""
            className="Home-workshop-img"
          ></img>
          <h3>Staining Your Decking</h3>
          <h5>282 words 1.6 min read</h5>
          <div>
            <hr className="Home-Workshop-hr"></hr>
          </div>
          <p className="Home-workshop-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
          <button className="Home-workshop-button">Read More</button>
        </div>
        <div className="Home-Workshop-news">
          <img
            src="assets/floating.jpg"
            alt=""
            className="Home-workshop-img"
          ></img>
          <h3>The Best Floating Shelves</h3>
          <h5>282 words 1.6 min read</h5>
          <div>
            <hr className="Home-Workshop-hr"></hr>
          </div>
          <p className="Home-workshop-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
          <button className="Home-workshop-button">Read More</button>
        </div>
        <div className="Home-Workshop-news">
          <img
            src="assets/certification.jpg"
            alt=""
            className="Home-workshop-img"
          ></img>
          <h3>Plumbing Certification</h3>
          <h5>282 words 1.6 min read</h5>
          <div>
            <hr className="Home-Workshop-hr"></hr>
          </div>
          <p className="Home-workshop-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
          <button className="Home-workshop-button">Read More</button>
        </div>
      </div>

    <div className="Home-feedback-container">
      <div className="Home-feedback-one">
      <h6>GET IN TOUCH TODAY</h6>
      <h1>Receive Your Free Quote</h1>
      <div>
            <hr className="Home-Workshop-hr"></hr>
      </div>
     <div className="Home-feedback-name">
        <div className="Home-feedback-firstname">
        <label>First Name :</label>
        <div>
        <input className="Home-feedback-input"></input>
        </div>
        </div>
        <div className="Home-feedback-firstname">
        <label>Surname :</label>
        <input className="Home-feedback-input"></input>
        </div>
     </div>

     <div className="Home-feedback-name">
        <div className="Home-feedback-firstname">
        <label>Your Email :</label>
        <input className="Home-feedback-input"></input>
        </div>

        <div className="Home-feedback-firstname">
        <label>Telephone :</label>
        <input className="Home-feedback-input"></input>
        </div>
     </div>

          <div className="Home-feedback-message">
              <label>Your Message:</label>
              <div>
                <input className="Home-feedback-input-message"></input>
              </div>
            </div>
      
            <div className="Home-feedback-button-container">
                <button className="Home-feedback-button">Sumbit Your Quote Request</button>
            </div>
        
      </div>
     


      <div className="Home-feedback-two">
        <div className="Home-feedback-box">
          <img src="assets/feedbackimg.jpeg" className="Home-feedback-img" alt=""></img>
          <h2>"Outstanding Work”</h2>
          <div className="Home-feedback-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
          <p className="Home-feedback-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries,
           but also the leap into electronic typesetting, remaining essentially unchanged.</p>
           <h3>Shona Jones</h3>
        </div>
      </div>
    </div>
          
    </div>
  );
}

export default Home;
