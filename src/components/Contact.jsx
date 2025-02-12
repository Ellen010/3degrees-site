import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const backendUrl = "http://192.168.100.197:5000";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [msgSend, setMsgSend] = useState(false);

  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, duration: 1 });
    gsap.to('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'power2.inOut',
      stagger: 0.2
    });
  }, []);
  
  

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault(); 

    console.log("Sending message:", formData);

    try {
      const response = await fetch(`${backendUrl}/email/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        setMsgSend(true);
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="w-screen overflow-hidden h-full common-padding bg-zink">
      <div className="screen-max-width p-20">
        <div className="mb-25 w-full items-end justify-between">
          <h1 id="title" className="section-heading">Contact Us</h1>
        </div>
        <div className="flex-1 flex justify-center flex-col g_fadeIn p:10">
              <p className="contact-text">Get in touch </p>
              <p className="hiw-text">We put our efforts into contious improvement of our customer service.</p>
                <p className="hiw-text">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
      </div>
      <div className="flex-1 flex justify-center flex-col g_fadeIn p:20">
              <p className="contact-text">More Ways to Shop:</p>
              <p className="contact-ways">Find our models on <a href="https://cults3d.com/en/users/3Dregrees/3d-models" target="_blank"  rel="noopener noreferrer" className="contact-link">Cults3D</a></p>
              <p className="contact-ways">Explore our designs on <a href="https://thangs.com/designer/3Degrees?srsltid=AfmBOopMAuFmHTgI8h87cecmd_VbMzET9eob4eKIVPCPkCvi8V1WEZnr" target="_blank" rel="noopener noreferrer" className="contact-link">Thangs</a></p>
              <p className="contact-ways">Print your dream model on <a href="https://makerworld.com/en/@3Degrees" target="_blank"  rel="noopener noreferrer" className="contact-link">Bambu Lab</a></p>
              <p className="contact-ways">Follow our new concepts on <a href="https://www.crealitycloud.com/user-profile/1487784242" target="_blank"  rel="no opener noreferrer" className="contact-link">Creality Cloud</a></p>
      </div>
              
      <div className="flex-1 flex justify-center flex-col g_fadeIn p:20">
              <p className="contact-text">Business Hours: </p>
              <p className="hiw-text">Monday to Friday: 9 AM - 6 PM</p>
              <p className="hiw-text">Saturday: 10 AM - 4 PM</p>
              <p className="hiw-text">Sunday: Closed</p>
              <p className="hiw-text">We look forward to connecting with you!</p>
              <p className="hiw-text">Feel free to customize it further to suit your needs!</p>
      </div>
        <form ref={formRef} onSubmit={handleSendMessage} className="g_fadeIn p-20 flex flex-col max-w-lg mx-auto">
          <label className="mb-2">Name:</label>
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange}  
            maxLength={30} 
            required 
            className="form-txt g_fadeIn p:30"
          />

          <label className="mb-2">Email:</label>
          <input 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            maxLength={30} 
            required 
            className="form-txt g_fadeIn p:30"
          />

          <label className="mb-2">Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            maxLength={500} 
            required 
            className="form-txt g_fadeIn p:30"
          ></textarea>

          <button type="submit" className="msg-btn g_fadeIn p:40">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;