import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1>Hi, my name is Peneeta.</h1>
          </div>

          <div className="anim-wrapper">
            <p>This portfolio is still under development.</p>

          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-text">
            {/* <p>I am an undergraduate student at the University of Virginia with a passion for creative web development.</p> */}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-text">
            {/* <p>I study Biomedical Engineering and Data Science with career interests in computational biomedical research.</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
