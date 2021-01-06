import React from "react";
import "./style.css";
const Footer = (props) => {
    return (
      <div className="Footer-container mt-5">
        <div className="container">
          <div className="d-flex footer-flex py-5">
            <div className="left-div">
              <h2>About Me</h2>
              <p className="w-50">
                I love to work in UI & UX designing. Because I love to solve the
                design problem and find easy and better solutions to solve it. I
                always try my best to make good user interface with the best
                user experience. I have been working as a Visual designer from.
              </p>
            </div>
            <div className="right-div">
              <h2>Let's work together</h2>
              <div className="info-contianer">charlroux641@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;