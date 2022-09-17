import React from 'react'
import './about.css'
import Particle from './Particle';


function About() {



    return (
        <>
            <Particle />
            <div className="about">
                <h2 className='about-heading'>About Me</h2>
                <div className='about-main'>
                    <div className='about-content'>
                        <p className='about-para'>
                            Hi! My name is Aditya sharma.
                            <br />
                            I am a <span className='front'>Front-end Web developer</span>,
                            and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success.
                            I enjoy every step of the design process, from discussion and collaboration.
                        </p>

                    </div>
                    <div className='about-image'>
                        <div className='image-design'>
                            <img className='aditya-img' src="aditya.jpg" alt=" -- " />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About