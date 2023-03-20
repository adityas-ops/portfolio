
import React from 'react';
import './App.css';
import Home from './component/home/Home';
import About from './component/about/About';
import Education from './component/education/Education';
import Skills from './component/skills/Skills';
import Contact from './component/contact/Contact';
import Navbar1 from './component/navbar/Navbar1';
import Projects from './component/projects/Projects';
import Particle from './Particle';
function App() {
  return (
    <div className='App'>
      <Particle />
      <div className="App1">
        <Navbar1 />
      </div>
      <div className="App2">
        <Home />
        <div>
          <About />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
