import './contact.css';
import React, { useRef } from 'react'
import Lottie from "react-lottie";
import animation from "./form.json";
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaPhoneAlt, FaHome } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import Particle from './Particle';

const notify = () => toast('Response Submitted Successfully ✅');
function Contact() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qyowdrc', 'template_f7k82nk', form.current, 'evokoXK24PDZ5TtU7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
        <Particle />
        <div className="contact1">
            <div className='contact'>
                <h4 className='head-1'>Contact Us</h4>
                <div className='contact-main'>

                    <div className='contact-point'>
                        <div className='contact-content'>
                            <div className='logof'>
                                <FaMailBulk style={{ fontSize: "30" }} />
                                <h5 className='head'>Email</h5>
                            </div>


                            <p className='email'><a href='adityakushinagar123@gmail.com'>adityakushinagar123@gmail.com</a> </p>
                        </div>
                        <div className='contact-content'>
                            <div className='logof'>
                                <FaPhoneAlt style={{ fontSize: "30" }} />
                                <h5 className='head'>Call</h5>
                            </div>


                            <p className='email'>9792855377</p>
                        </div>
                        <div className='contact-content'>
                            <div className='logof'>
                                <FaHome style={{ fontSize: "30" }} />
                                <h5 className='head'>Home</h5>
                            </div>


                            <p className='email'>Fazilnagar, Kushinagar</p>
                        </div>
                    </div>
                    <div className='contact-container'>
                        <div className='form'>
                            <form ref={form} onSubmit={sendEmail}
                            >
                                <div className='main-form'>
                                    <input type="text" placeholder='Name' className='input' name='from_name' />
                                    <br />
                                    <input type="email" placeholder='Email-Id' className='input' name='email' />
                                    <br />
                                    <input type="text" placeholder='Subject' className='input' name='subject' />
                                    <br />
                                    <textarea placeholder='Your Message' className='area' name='message' >

                                    </textarea>
                                    <br />
                                    {/* <button type='submit' className='btn-nav sub'>Submit</button> */}
                                    <input type="submit" value="Send" className='btn-nav sub' onClick={notify} />
                                    <Toaster position="bottom-center"
                                        reverseOrder={false}
                                        gutter={8}
                                        containerClassName=""
                                        containerStyle={{}}
                                        toastOptions={{
                                            // Define default options
                                            className: 'tost',
                                            duration: 5000,
                                            style: {
                                                background: '#363636',
                                                color: '#fff',
                                            },

                                            // Default options for specific types
                                            success: {
                                                duration: 3000,
                                                theme: {
                                                    primary: 'green',
                                                    secondary: 'black',
                                                },
                                            },
                                        }} />
                                </div>
                            </form>
                        </div>
                        <div className="lottie">
                            <Lottie options={defaultOptions1}

                                height={600}
                                width={600}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default Contact;
