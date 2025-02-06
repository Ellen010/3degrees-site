import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import { filgr, filgrs, filye, filyes, filbl, filbls, filVideo } from '../utils';
import gsap from 'gsap';

const Filament = () => {
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
      { scrub: 40 }
    );
    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    )
  }, []);

  return (
    <section className="h-full common-padding relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Filament</h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-20 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">3D printing filament</h2>
            <p className="hiw-text mt-10 ">Serves as the thermoplastic material used in fused deposition modeling (FDM) 3D printers. A variety of filament types exist, each with distinct characteristics. Filament is commonly available in two standard diameters: 1.75 mm and 2.85 mm. The latter is frequently mistaken for the less prevalent 3 mm size. The filament itself is a continuous, thin strand of plastic wound onto a spool for storage and use.</p>

          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={filVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex-left flex-col sm:p-10">
              <p className="contact-text">The process of transforming 3D printing filament into a 3D model</p>
              <p className="hiw-text">* The filament is fed into the FDM 3D printer.</p>
              <p className="hiw-text">* The thermoplastic is heated past its glass transition temperature inside the hotend.</p>
              <p className="hiw-text">* The filament is extruded and deposited by an extrusion head onto a build platform where it cools</p>
              <p className="hiw-text">* The process is continuous, building up layers to create the model.</p>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={filgr} alt="titanium" className="feature-video g_grow" />
                </div>
                <p className="fil-text"> Green filament is perfect for creating eco-friendly or nature-inspired 3D prints, offering a vibrant and refreshing look. It’s ideal for printing plant-based models, sustainable designs, or futuristic prototypes with a fresh aesthetic.</p>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={filgrs} alt="titanium 2" className="feature-video g_grow" />
                </div>

              </div>
              <div className="flex flex-col w-full relative ">
                <div className="feature-video-container">
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={filye} alt="titanium" className="feature-video g_grow" />
                  </div>
                  <p className="fil-text">Yellow filament is excellent for producing bright, eye-catching prints that stand out. It works well for safety signs, artistic creations, and playful designs that require a bold and cheerful look.</p>
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={filyes} alt="titanium" className="feature-video g_grow" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full relative">
                <div className="feature-video-container">
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={filbl} alt="titanium" className="feature-video g_grow" />
                  </div>
                  <p className="fil-text">Black filament provides a sleek, professional finish, making it great for functional parts and high-detail prints. Its ability to hide layer lines results in a polished, premium appearance suitable for prototypes, accessories, and structural components.</p>
                  <div className="overflow-hidden flex-1 h-[50vh]">
                    <img src={filbls} alt="titanium" className="feature-video g_grow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filament