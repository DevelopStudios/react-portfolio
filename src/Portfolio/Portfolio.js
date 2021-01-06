import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Portfolio = (props) => {
  const newLocal = "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
    const style={
  backgroundImage: "url(" + newLocal + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}
    return (
      <div className="Portfolio-container mt-5">
        <div className="container-fluid">
          <div className="porfolio-flex-container">
            <Link to="/portfolio-item">
              <div className="portfolio-entry" style={style}>
                test
              </div>
            </Link>
            <Link to="/portfolio-item">
              <div className="portfolio-entry" style={style}>
                test
              </div>
            </Link>
            <Link to="/portfolio-item">
              <div className="portfolio-entry" style={style}>
                test
              </div>
            </Link>
            <Link to="/portfolio-item">
              <div className="portfolio-entry" style={style}>
                test
              </div>
            </Link>
            <Link to="/portfolio-item">
              <div className="portfolio-entry" style={style}>
                test
              </div>
            </Link>
          </div>
        </div>
      </div>
    );}

    export default Portfolio;