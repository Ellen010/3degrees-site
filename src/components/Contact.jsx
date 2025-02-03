import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:ewlen04@gmail.com?subject=Contact%20Form%20Message&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AMessage:%20${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-screen overflow-hidden h-full common-padding bg-zink">
      <div className="screen-max-width p-20">
        <div className="mb-25 w-full items-end justify-between">
          <h1 id="title" className="section-heading">Contact Us</h1>
        </div>
        
        <div className="flex-1 flex justify-center flex-col g_fadeIn p-20">
          <p className="contact-text">Get in touch</p>
          <p className="hiw-text">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="g_fadeIn p-20 flex flex-col max-w-lg mx-auto">
          <label className="mb-2">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="mb-4 p-2 border border-gray-300 rounded"
          />

          <label className="mb-2">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="mb-4 p-2 border border-gray-300 rounded"
          />

          <label className="mb-2">Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="mb-4 p-2 border border-gray-300 rounded h-32"
          ></textarea>

          <button type="submit" className="msg-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
