import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Facebook from '../svg/facebook.svg';
import Linkedin from "../svg/linkedin.svg";
import Twitter from "../svg/twitter.svg";
import './style.css';
const navbar = () => {
    return (
      <div className="navbar-container">
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          className="light-navbar"
        >
          <div className="brand-left mr-auto">
            <div className="d-flex">
              <div className="mr-2">
                <img src={Facebook} />
              </div>
              <div className="mr-2">
                <img src={Linkedin} />
              </div>
              <div className="mr-2">
                <img src={Twitter} />
              </div>
            </div>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Charl Roux</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default navbar;