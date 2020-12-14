import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Facebook from "../svg/facebook.svg";
import Linkedin from "../svg/linkedin.svg";
import Twitter from "../svg/twitter.svg";
import Hamburger from 'react-hamburgers';
import "./style.css";
const MainNavbar = (props) => {
  return (
    <div className="navbar-container">
      <Navbar expand="lg" sticky="top" className="light-navbar">
        <div className="brand-left">
          <div className="d-flex">
            <div className="mr-2">
              <a href="https://www.facebook.com/charl.roux.52/">
                <img src={Facebook} alt="Facebook icone" />
              </a>
            </div>
            <div className="mr-2">
              <a href="https://www.linkedin.com/in/charl-roux-50b124122/">
                <img src={Linkedin} alt="LinkedIn icone" />
              </a>
            </div>
            <div className="mr-2">
              <a href="https://twitter.com/charlroux641">
                <img src={Twitter} alt="Twitter icone" />
              </a>
            </div>
          </div>
        </div>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>Charl Roux</Navbar.Text>
        </Navbar.Collapse>
        <div className="toggleIcon" onClick={props.navToggle}>
          <div
            id="nav-icon1"
            className={props.isMenuOpen === true ? "open" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Navbar>
      <div
        className={`collapseDiv ${
          props.isMenuOpen === true ? "open scale-up-ver-bottom" : "closed"
        }`}
      >
        <div className="collapseContainer">
          <div className="container">
            <div className="row py-5 mt-5">
              <div className="col text-center">
                <div className="link pb-5" onClick={props.navToggle}>
                  Home
                </div>
                <div className="link pb-5" onClick={props.navToggle}>
                  About
                </div>
                <div className="link pb-5" onClick={props.navToggle}>
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
