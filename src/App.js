import React,{useState} from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Navbar from './Navbar/Navbar';
import Portfolio from './Portfolio/Portfolio';
import Timeline from './Timeline/Timeline';
import {BrowserRouter, Route} from 'react-router-dom';
import PortfolioItem from './Portfolio/Porfolio-Item/Portfolio-Item';
import Footer from './Footer/Footer';
function App() {
  const [menuSate, setMenuState] = useState({isMenuOpen: false});
  const updateMenuState = () => {
      menuSate === true?  setMenuState(false):setMenuState(true)
  }
  return (
    <div className="body-wrapper">
      <BrowserRouter>
        <Navbar navToggle={updateMenuState} isMenuOpen={menuSate} />
        <Route exact path="/" render={Banner} />
        <Route exact path="/" render={Experience} />
        <Route exact path="/" render={Timeline} />
        <Route exact path="/" render={Portfolio} />
        <Route exact path="/portfolio-item" render={PortfolioItem} />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
