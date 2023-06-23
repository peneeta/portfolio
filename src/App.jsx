import Lottie from 'lottie-react'
import nameAnimation from './assets/peneeta_penstroke.json'


import peneetaPortrait from './assets/peneeta_portrait.jpg'
import './App.css'

import Footer from './components/Footer';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="home" className="hero">
        <div className="container">
          <div className="portrait-wrapper">
                <img src={peneetaPortrait} alt="peneeta portrait" />
          </div>
          <div className="text-wrapper">
            <div className="headline">
              <h2>Hello, my name is</h2>
              <h1>Peneeta</h1>
              {/* <Lottie className="written animation"
                animationData={nameAnimation}
                loop={false}
                viewBox={"800 90 1920 1500"}
              /> */}
            </div>
            <div className="subtitle">
              <p>I am an undergraduate student at the University of Virginia with passions in computational biology, computer science, and web design.</p>
            </div>
            <div className="icons-wrapper">
              <a href="https://www.linkedin.com/in/peneeta/" target="_blank">
                <div className="icon linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </a>
              <a href="https://github.com/peneeta" target="_blank">
                <div className="icon github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <div id="research" className="section">
        <div className="container">
          <div className="section-text">
            <h1>Research Experience</h1>
            <p>My career interests lie at the intersection of computer science and biology. I have participated in a diverse set of research experiences, from cancer research to synthetic biology. I plan to pursue a doctoral degree after graduation with a goal of pursuing a career in industry.</p>
          </div>
        </div>
        <Timeline/>
      </div>

      <div id="projects" className="section">
        <div className="container">
          <div className="section-text">
            <h1>Projects</h1>
            <p>This website</p>
            <p>iGEM 2022 Team Wiki</p>
          </div>
        </div>
      </div>

      <div id="contact" className="section">
        <div className="container">
          <div className="section-text">
            <h1 className="big">Get in Touch</h1>
            <p>I am always open to new opportunities or just to chat! Reach out to me via email or LinkedIn.</p>
          </div>
        </div>

        <ContactForm/>


      </div>
      <Footer/>
    </div>
  )
}

export default App
