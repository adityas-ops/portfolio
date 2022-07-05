import './skill.css';
import Lottie from "react-lottie";
import React from 'react'
import skillani from './skill.json';
import Pro from './Pro';

function Skills() {

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: skillani,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (

        <div className='Skills'>

            <h2 className='n'> Skills</h2>
            <div className='Skills-container'>
                <div className='Skills-container-left'>
                    <h4 className='heading-d'>Programming Language</h4>
                    <div className='program'>

                        <div className='program-content'>
                            <Pro value={80} />
                            <h2>C</h2>
                        </div>
                        <div className='program-content'>


                            <Pro value={90} />
                            <h2>C++</h2>
                        </div>
                        <div className='program-content'>
                            <Pro value={40} />
                            <h2>Java</h2>
                        </div>
                        <div className='program-content'>

                            <Pro value={60} />
                            <h2>Python</h2>
                        </div>

                    </div>
                    <div className='dev'>
                        <h4 className='heading-d'>Development</h4>
                        <div className='program'>

                            <div className='program-content'>

                                <Pro value={95} />
                                <h2>HTML</h2>
                            </div>
                            <div className='program-content'>
                                <Pro value={90} />
                                <h2>CSS</h2>
                            </div>
                            <div className='program-content'>
                                <Pro value={75} />
                                <h2>Java Script</h2>
                            </div>
                            <div className='program-content'>
                                <Pro value={80} />
                                <h2>React JS</h2>
                            </div>

                        </div>
                    </div>


                </div>
                <div className='Skills-container-right'>
                    <Lottie
                        options={defaultOptions1}
                        height={600}
                        width={600}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills