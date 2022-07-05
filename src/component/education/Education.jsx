import React from 'react'
import Lottie from "react-lottie";
import btech from './btech.json';
import high from './high1.json';
import inter from './inter1.json';
import './education.css';

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
        <div className='edu1'>
            <div className='edu'>
                <h2 className='edu-heading'>Education</h2>
                <div className='edu-main'>
                    <div className='edu-content'>
                        <h4 className='h4'>B. Tech (2020-2024)</h4>
                        {/* <br/> */}
                        <p className='p-1'>
                            I am a student of B. Tech in CS&IT.
                            I'm currently studies in MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY, BAREILLY UTTAR PRADESH</p>
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
                        <h4 className='h4'>Intermediate (2017-2019)</h4>
                        {/* <br/> */}
                        <p className='p-1'>
                            I have passed INTERMEDIATE examination from MAHARSHI ARVIND VIDYA MANDIR KASIA KUSHINAGAR, Board UTTAR PRADESH BOARD with aggregate 76%.
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
                        <h4 className='h4'>High School (2015-2017)</h4>
                        {/* <br/> */}
                        <p className='p-1'>
                            I have passed HIGHSCHOOL examination from MAHARSHI ARVIND VIDYA MANDIR KASIA KUSHINAGAR, Board UTTAR PRADESH BOARD with aggregate 85%.
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
    )
}

export default Education