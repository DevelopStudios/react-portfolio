import React from "react";
import rocketIcon from "../../src/svg/rocket.svg"
import "./style.css";
const Experience = (props) => {
    return (
      <div className="experience-container">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="experience-header">I build exprience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 text-center">
              <div className="icon">
                <img src={rocketIcon} />
              </div>
              <div className="service-header">Front End Developement</div>
              <div className="service-description">test</div>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="icon">
                <img src={rocketIcon} />
              </div>
              <div className="service-header">Web Developement</div>
              <div className="service-description">test</div>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="icon">
                <img src={rocketIcon} />
              </div>
              <div className="service-header">Hosting/Maintenance</div>
              <div className="service-description">test</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Experience;