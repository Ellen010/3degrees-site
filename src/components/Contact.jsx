import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
// import { useGSAP } from '@gsap/react';


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

  return (
    <section id="contact" className="w-screen overflow-auto-hidden h-full common-pading bg-zink">
      <div className="screen-max-width p-20">
       <div className="mb-25 w-full items-end justify between ">
      <h1 id="title" className="section-heading">Contact Us</h1>
              </div>

      <div className="flex-1 flex justify-center flex-col g_fadeIn p:20">
              <p className="contact-text">Get in touch </p>
              <p className="hiw-text">We put our efforts into contious improvement of our customer service.</p>
                <p className="hiw-text">If you have any questions or concerns about our products, don't hesiatte to contact us via the form below.</p>
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