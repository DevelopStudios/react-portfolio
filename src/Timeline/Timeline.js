import React from "react";
import "./style.css";
import suitecase from '../../src/svg/suitecase.svg'
const Timeline = (props) => {
    return (
      <div className="timeline-container">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="d-flex">
                <div className="left-container">
                  <div className="icon">
                    <img src={suitecase} />
                  </div>
                  <div className="line"></div>
                </div>
                <div className="right-container">
                  <div className="timeline-stamp">2017 - PRESENT</div>
                  <div className="timeline-header">test</div>
                  <div className="timeline-description">test</div>
                </div>
              </div>
            </div>
            <div className="col-6">test</div>
          </div>
        </div>
      </div>
    );
}
export default Timeline;