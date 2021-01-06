import React from "react";
import "./style.css";
import suitecase from '../../src/svg/suitecase.svg';
import hat from '../../src/svg/hat.svg'
const Timeline = (props) => {
    return (
      <div className="timeline-container">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="d-flex justify-content-center">
                <div className="left-container">
                  <div className="icon">
                    <img src={suitecase} alt="Timeline Illustration" />
                  </div>
                  <div className="line"></div>
                </div>
                <div className="right-container">
                  <div className="timeline-stamp">2017 - PRESENT</div>
                  <div className="timeline-header">test</div>
                  <div className="timeline-description">test</div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="left-container">
                  <div className="icon">
                    <img src={suitecase} alt="Timeline Illustration" />
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
            <div className="col-6">
              <div className="d-flex justify-content-center">
                <div className="left-container">
                  <div className="icon">
                    <img src={hat} alt="Timeline Illustration" />
                  </div>
                  <div className="line"></div>
                </div>
                <div className="right-container">
                  <div className="timeline-stamp">2017 - PRESENT</div>
                  <div className="timeline-header">test</div>
                  <div className="timeline-description">test</div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="left-container">
                  <div className="icon">
                    <img src={hat} alt="Timeline Illustration" />
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
          </div>
        </div>
      </div>
    );
}
export default Timeline;