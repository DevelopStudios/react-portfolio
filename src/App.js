import React,{useState} from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Navbar from './Navbar/Navbar';
import Portfolio from './Portfolio/Portfolio';
import Timeline from './Timeline/Timeline';
function App() {
  const [menuSate, setMenuState] = useState({isMenuOpen: false});
  const updateMenuState = () => {
      menuSate === true?  setMenuState(false):setMenuState(true)
  }
  return (
    <div className="body-wrapper">
      <Navbar navToggle={updateMenuState} isMenuOpen={menuSate} />
      <Banner />
      <Experience />
      <Timeline />
      <Portfolio />
    </div>
  );
}

export default App;
