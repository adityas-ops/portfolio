import React from 'react'
import Lottie from "react-lottie";
import coder from './coding.json'
import Typical from 'react-typical'
import './Home.css';
import Particle from './Particle';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <Particle />
      <div className="home">
        <div className='main'>
          <div className='content'>

            <Typical loop={Infinity}
              steps={[
                "Hi, 👋🏻 ",
                4000,
                "I'm Aditya Sharma ",
                2000,
                "I'm a Web Developer💻 ",
                2000,
                "I'm Competitive Programmer😎 ",
                2000,
              ]}
            />
            <div className='multi'>
              <p className='para'> “Java is to JavaScript what car is to Carpet.” – Chris Heilmann</p>
              <div className='icons'>
                <div className='circle'>
                  <a className='c' href='https://www.facebook.com/home.php'><FaFacebookF /></a>
                </div>
                <div className='circle'>
                  <a href='https://www.instagram.com/aditya.0.0.8/'><FaInstagram /></a>
                </div>
                <div className='circle'>
                  <a href='https://www.linkedin.com/in/aditya-sharma-6645b41ab/'><FaLinkedinIn /></a>
                </div>
                <div className='circle'>
                  <a href='https://twitter.com/ADITYAOPS'><FaTwitter /></a>
                </div>
              </div>
              <div className='btn1'>
                <div className='btn'>
                  <button className='but'><NavLink to="/Contact" activeClassName="active">Contact</NavLink></button>
                  <button className='but'><a href="alr.pdf">Resume</a></button>
                </div>

              </div>
            </div>
          </div>
          <div className='coder'>
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home