import React from 'react'
import Lottie from "react-lottie";
import btech from './btech.json';
import high from './high1.json';
import inter from './inter1.json';
import './education.css';
import Particle from './Particle';
function Education() {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: inter,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: high,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: btech,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };



    return (
        <>
            <Particle />
            <div className='edu1'>
                <div className='edu'>
                    <h3 className='edu-heading'>EDUCATION</h3>
                    <div className='edu-main'>
                        <div className='edu-content'>
                            <h4 className='h4'>B. TECH (2020-2024)</h4>
                            {/* <br/> */}
                            <p className='p-1'>
                                I AM A STUDENT OF B. TECH IN CS&IT.
                                I'M CURRENTLY STUDIES IN  MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY, BAREILLY UTTAR PRADESH</p>
                        </div>
                        <div className='edu-image'>
                            <Lottie
                                options={defaultOptions}
                                height={200}
                                width={200}
                            />
                        </div>
                    </div>
                    <div className='edu-main'>
                        <div className='edu-content'>
                            <h4 className='h4'>INTERMEDIATE (2017-2019)</h4>
                            {/* <br/> */}
                            <p className='p-1'>
                                I HAVE PASSED INTERMEDIATE EXAMINATION FROM M.A.V.M SENINOR SECONDARY SCHOOL KASIA KUSHINAGAR UTTAR PRADESH, BOARD OF UTTAR PRADESH BOARD WITH AGGREGATE 76%.
                            </p>
                        </div>
                        <div className='edu-image'>
                            <Lottie
                                options={defaultOptions1}
                                height={200}
                                width={200}
                            />
                        </div>
                    </div>
                    <div className='edu-main'>
                        <div className='edu-content'>
                            <h4 className='h4'>HIGH SCHOOL (2015-2017)</h4>
                            {/* <br/> */}
                            <p className='p-1'>
                                I HAVE PASSED HIGH SCHOOL EXAMINATION FROM M.A.V.M SENINOR SECONDARY SCHOOL KASIA KUSHINAGAR UTTAR PRADESH, BOARD OF UTTAR PRADESH BOARD  WITH AGGREGATE 85%.
                            </p>
                        </div>
                        <div className='edu-image'>
                            <Lottie
                                options={defaultOptions2}
                                height={200}
                                width={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education