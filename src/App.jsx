import { useState } from 'react'
import reactLogo from './assets/react.svg'

import peneetaPortrait from './assets/peneeta_portrait.jpg'

import './App.css'

import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="hero">
        <div className="portrait-wrapper">
          <div className="square top-left"></div>
          <div className="square bottom-right"></div>
          <div className="portrait">
            <img className="peneeta-portrait square" src={peneetaPortrait} alt="peneeta portrait" />
          </div>
        </div>
        
        <div className="container">
          <div className="text-wrapper">
            <h1>Hello, my name is <strong>Peneeta.</strong></h1>
            <div className="subtext-wrapper">
              <p>I am an undergraduate student at the University of Virginia with a passion for creative front-end web development.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-text">
            <h1>I study Biomedical Engineering and Data Science.</h1>
            <p>My career interests lie at the intersection of computer science and biology. I have participated in a diverse set of research experiences, from cancer research to synthetic biology. My goal is to pursue a career in drug discovery or computational modeling.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-text">
            <h1>My Creative Outlet</h1>
            <p>After designing and implementing my first complete website for the iGEM competition, I realized the influence that good UI/UX design has. I am self-taught and still have a lot to learn, however I find ways to improve my design skills in addition to my studies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
