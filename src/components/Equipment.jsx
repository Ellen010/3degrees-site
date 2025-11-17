import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import { bambOne, prusaOne, prusaTwo, prusaThree, boatOne, bambTwo } from '../utils';
import gsap from 'gsap';

const Equipment = () => {
  const videoRef = useRef();

  useGSAP(() => {
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
    animateWithGsap('#features_title', { y: 0, opacity: 1 })
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1.inOut' },
      { scrub: 5 }
    );
    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 3 }
    )
    gsap.to("#title", { opacity: 1, y: 0, duration: 1 });
    gsap.to('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'power2.inOut',
      stagger: 0.2
    });
  }, []);

  return (
    <section className="h-full common-padding relative overflow-hidden">
      <div className="screen-max-wdith g_fadeIn p:10">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Equipment</h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-20 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold g_fadeIn p:10">3D printers</h2>
            <p className="hiw-text mt-10 g_fadeIn p:20">3D printer is a machine that creates three-dimensional objects by depositing layers of material based on a digital model. It uses various materials, such as plastic, metal, or resin, to build up objects layer by layer, allowing for precise and customizable manufacturing.</p>
            <div className="flex-center flex-col sm:px-10">
              <div className="relative h-[50vh] w-full flex items-center">
                <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center p-20" preload="none" muted autoPlay ref={videoRef}>
                  <source src={bambTwo} type="video/mp4" />
                </video>
              </div>
              <div className="flex-left flex-col sm:p-10">
              <p className="contact-text g_fadeIn p:20">Bambu Lab P1S</p>
            </div>
              <div className="flex flex-col w-full relative">
                <div className="feature-video-container">
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={bambOne} alt="titanium" className="feature-video g_grow" />
                  </div>
                  <p className="fil-text g_fadeIn p:30"> The Bambu Lab P1S is a high-performance 3D printer designed for both hobbyists and professionals, offering a blend of speed and precision. With features like rapid printing capabilities and advanced calibration, it delivers high-quality results while maintaining ease of use. Its user-friendly interface and reliable performance make it an appealing choice for various 3D printing applications.</p>
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={boatOne} alt="titanium 2" className="feature-video g_grow" />
                  </div>
                </div>
                <div className="flex-center flex-col sm:p-10">
                  <p className="contact-text g_fadeIn p:30">Original Prusa</p>
                </div>
                <div className="flex flex-col w-full relative ">
                  <div className="feature-video-container">
                    <div className="overflow-hidden flex-1 h-[50vh]">
                      <img src={prusaOne} alt="titanium" className="feature-video g_grow" />
                    </div>
                    <p className="fil-text g_fadeIn p:30">The Prusa Original 3D printer is a well-known, reliable machine favored by both enthusiasts and professionals for its robust build and exceptional print quality. With its open-source design and easy assembly, it offers flexibility for customization and upgrades. Known for consistent performance, the Prusa printer excels in producing detailed, accurate prints, making it a go-to choice for creators and makers alike.</p>
                    <div className="overflow-hidden flex-1 h-[50vh]">
                      <img src={prusaTwo} alt="titanium" className="feature-video g_grow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="txt-sm pt-30">The images presented on this page are owned by the original Prusa https://www.prusa3d.com and Bambu https://bambulab.com websites, and their intellectual property rights are fully respected.</p>
          </div>
        </div>
      </div>
    </section>
  )
  export default Equipment
