
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
// import Navbar from './component/navbar/Navbar1';
import About from './component/about/About';
import Education from './component/education/Education';
import Skills from './component/skills/Skills';
import Contact from './component/contact/Contact';
import Service from './component/service/Service';
import Navbar1 from './component/navbar/Navbar1';
function App() {
  return (

    <div className='App'>
      <div className="App1">
        <Navbar1 />
      </div>

      <div className="App2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />

        </Routes>
      </div>
    </div>

  );
}

export default App;
