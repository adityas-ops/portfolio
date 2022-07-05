import React from 'react';
import video from './video.json';
import web from './web.json';
import thinking from './thinking.json';
import Lottie from "react-lottie";
import './service.css';





function Service() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: web,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions12 = {
    loop: true,
    autoplay: true,
    animationData: video,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions13 = {
    loop: true,
    autoplay: true,
    animationData: thinking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='ser1'>
      <div className='service'>
        <h3 className='heading-service'>What I do</h3>
        <div className='main-service'>
          <div className='service-content'>
            <h3 className='content-heading'>Web Development</h3>
            <p className='para-service'>I am technically skilled in front-end web development.I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          </div>
          <div className='service-anime'>
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className='main-service'>
          <div className='service-content'>
            <h3 className='content-heading'>Editing</h3>
            <p className='para-service'>

              As a Photo/video editor, I'll manage material such as camera footage, sound effects, graphics and special effects to produce a final film or video product.
            </p>
          </div>
          <div className='service-anime'>
            <Lottie
              options={defaultOptions12}
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className='main-service'>
          <div className='service-content'>
            <h3 className='content-heading'>Problem Solving</h3>
            <p className='para-service'>I give contests on different coding platforms to develop problem solving skills.<br /><br />
              <a className='ser2' href='https://www.codechef.com/users/goldminati' target='_blank' rel='noopener noreferrer'>Codechef</a>
              <a className='ser2' href='https://leetcode.com/aditya-ops/' target='_blank' rel='noopener noreferrer'>Leetcode</a>
              <a className='ser2' href='https://codeforces.com/profile/adityaops' target='_blank' rel='noopener noreferrer'>CodeForce</a>
            </p>
          </div>
          <div className='service-anime'>
            <Lottie
              options={defaultOptions13}
              height={350}
              width={350}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service