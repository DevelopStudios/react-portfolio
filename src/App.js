import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
function App() {
  const [menuSate, setMenuState] = useState({isMenuOpen: false});
  const updateMenuState = () => {
      menuSate === true?  setMenuState(false):setMenuState(true)
  }
  return <Navbar navToggle={updateMenuState} isMenuOpen={menuSate} />;
}

export default App;
