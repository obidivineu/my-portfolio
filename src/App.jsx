import React, { useState } from 'react';
import './App.css';
import IMG1 from "../src/assets/img1-2264a710.png";
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <main className={`body ${darkMode ? 'dark-mode' : ''}`}>
      <header className='header'>
        <div className='leftDiv'>
          <p>Divine O.</p>
        </div>
        <div className='rightDiv'>
          <li className='navText'>Portfolio</li>
          <li className='navText'>About Me</li>
          <li className='navText'>Contact</li>
          <li className='toggleDarkMode' onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </li>
        </div>
      </header>
      <section className='heropage'>
        <div className='herotext'>
          <h1>I’m Divine<br />
            Glad to see you!</h1>
          <p className='paragraphtext'>I’m a software developer! I can help you build a product feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
          <div className='letsconnectholder'>
            <span className='letsconnect'>
              Let’s Connect <span className='Here'> Here</span>
            </span>
            <div className='dropicon'><MdOutlineArrowDropDownCircle /></div>
          </div>
        </div>
      </section>
      <div className='boxD'>
        <div className='fristbox'>
          <div className='imagebox'>
            <img src={IMG1} alt="Project Image" />
          </div>
          <div className='text'>
            <h1>Awesome Books</h1>
            <div className='writes'>
              <div>Library</div>
              <div><GoDotFill /></div>
              <div>FRONT END DEVELOPER</div>
              <div><GoDotFill /></div>
              <div>2023</div>
              <div><GoDotFill /></div>
              <div>React</div>
            </div>
            <span>It’s an online library application that enables users to keep track of books in their <br/>library by adding to and removing books from a list. Built with JavaScript<br/> ES6 syntax, HTML, and CSS.</span>
            <div className='bgtext'>
            <div className='bgdiv'>
              <p>HTML</p>
            </div>
            <div className='bgdiv'>
              <p>JavaScript</p>
            </div>
            <div className='bgdiv'>
              <p>CSS</p>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
