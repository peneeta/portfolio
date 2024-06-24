import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Stylesheets
import './App.css'
import './index.css'

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  )
}

export default App
