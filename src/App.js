import React, { useState, useRef } from 'react';
import './App.css';
import RightSide from './Components/RightSide/RightSide';
import { FaBars } from 'react-icons/fa';
import LeftSide from './Components/LeftSide/LeftSide';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
    // Add more refs as needed

    const scrollToSection = (section) => {
      console.log("thisis")
        if (section === 'home' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            console.log("this")
        }
        // Add more conditions for other sections
    };

  return (
    <div className="App">
      <div className="burger-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className="mainContainer">
        <div className={`container1 ${isMenuOpen ? 'show' : ''}`}>
          <LeftSide scrollToSection={scrollToSection} />
        </div>
        <div className='container2'>
          <RightSide aboutRef={aboutRef}/>
        </div>
      </div>
    </div>
  );
}

export default App;
