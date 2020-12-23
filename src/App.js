import React,{useState} from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
function App() {
  const [menuSate, setMenuState] = useState({isMenuOpen: false});
  const updateMenuState = () => {
      menuSate === true?  setMenuState(false):setMenuState(true)
  }
  return (
    <div className="body-wrapper">
      <Navbar navToggle={updateMenuState} isMenuOpen={menuSate} />
      <Banner />
    </div>
  );
}

export default App;
