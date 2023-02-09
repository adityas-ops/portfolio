
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
import Aos from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className='App'>
      <Particle />
      <div className="App1">
        <Navbar1 />
      </div>
      <div className="App2">
        <Home />
        <div data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <About />
        </div>
        <div data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <Education />
        </div>
        <div data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <Skills />
        </div>
        <div data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
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
