import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import {explore3Img, explore4Img } from '../utils';


const Contact = () => {
  useGSAP(() => {
    gsap.to("#title", {opacity:1, y:0})

   animateWithGsap('.g_fadeIn', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut'
      })
    }, []);
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

  return (
    <section id="contact" className="w-screen overflow-auto-hidden h-full common-pading bg-zink">
      <div className="screen-max-width p-20">
       <div className="mb-25 w-full items-end justify between ">
      <h1 id="title" className="section-heading">Contact Us</h1>
              </div>

      <div className="flex-1 flex justify-center flex-col g_fadeIn p:20">
              <p className="contact-text">Get in touch </p>
              <p className="hiw-text">We put our efforts into contious improvement of our customer service.</p>
                <p className="hiw-text">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
      </div>
      <div className="flex-1 flex justify-center flex-col g_fadeIn p:20">
              <p className="contact-text">More Ways to Shop:</p>
              <p className="contact-ways">Find our models on <a href="https://cults3d.com/en/users/3Dregrees/3d-models" target="_blank" target="_blank" rel="noopener noreferrer">Cults3D</a></p>
              <p className="contact-ways">Explore our designs on <a href="https://thangs.com/designer/3Degrees?srsltid=AfmBOopMAuFmHTgI8h87cecmd_VbMzET9eob4eKIVPCPkCvi8V1WEZnr" target="_blank" target="_blank" rel="noopener noreferrer">Thangs</a></p>
      </div>
              
      <div className="flex-1 flex justify-center flex-col g_fadeIn p:20">
              <p className="contact-text">Business Hours: </p>
              <p className="hiw-text">Monday to Friday: 9 AM - 6 PM</p>
              <p className="hiw-text">Saturday: 10 AM - 4 PM</p>
              <p className="hiw-text">Sunday: Closed</p>
              <p className="hiw-text">We look forward to connecting with you!</p>
              <p className="hiw-text">Feel free to customize it further to suit your needs!</p>
      </div>


      {/* <p className="text-lg mb-8">This is the contact page.</p>
      <button className="control-btn">
        Send Message
      </button> */}
    </div>
    </section>
  );
};

export default Contact