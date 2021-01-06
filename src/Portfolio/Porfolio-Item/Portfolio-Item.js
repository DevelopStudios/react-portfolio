import React from "react";
import "./style.css";
const PortfolioItem = (props) => {
// Load to top when componet loads
  window.scrollTo(0, 0);
  return (
    <div className="Portfolio-Item-Container">
      <div className="Portfolio-Item-Banner">
        <div className="Text-container">
          <div className="Portfolio-Item-Header">Praesent Porttitor</div>
          <div className="Portfolio-Item-Text">
            <div className="Portfolio-directory">Home</div>
            <div className="Portfolio-directory-arrow">{">"}</div>
            <div className="Portfolio-directory">My Projects</div>
            <div className="Portfolio-directory-arrow">{">"}</div>
            <div className="Portfolio-directory name">Project Name</div>
          </div>
          <div className="scroll-icon-container">
            <div className="icon-scroll"></div>
          </div>
        </div>
      </div>
      <div className="Banner-body">
        <div className="intro-image container d-flex justify-content-center mt-4 pt-4">
          <img
            src="https://assets.website-files.com/5f4f98ba6b9aeb58efc262ea/5f5105e55c95111ddf85fe3f_port-3b.jpg"
            alt="project feature"
          />
        </div>
        <div className="description summary container">
          <h2>Summary</h2>
          <p>Testing</p>
        </div>
        <div className="description what-was-done container">
          <h2>What we did</h2>
          <p>Testing</p>
        </div>
        <div className="intro-image container d-flex justify-content-center mt-4 pt-4">
          <img
            src="https://assets.website-files.com/5f4f98ba6b9aeb58efc262ea/5f5105e55c95111ddf85fe3f_port-3b.jpg"
            alt="project feature"
          />
        </div>
        <div className="description what-was-done container">
          <h2>After work was done</h2>
          <p>
            Creating a landing page with clear and targeted messaging was a
            crucial step in increasing conversions. Together with the Fortun
            team, we have compiled a new product page structure using the AIDA
            model and packed that in a nice cover 🙂
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
