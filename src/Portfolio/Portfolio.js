import React from "react";
import "./style.css";
const Portfolio = (props) => {
    const style={
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}
    return (
      <div className="Portfolio-container">
        <div className="container-fluid">
          <div className="porfolio-flex-container">
            <div className="portfolio-entry" style={style}>
              test
            </div>
            <div className="portfolio-entry" style={style}>
              test
            </div>
            <div className="portfolio-entry" style={style}>
              test
            </div>
            <div className="portfolio-entry" style={style}>
              test
            </div>
            <div className="portfolio-entry" style={style}>
              test
            </div>
          </div>
        </div>
      </div>
    );}

    export default Portfolio;