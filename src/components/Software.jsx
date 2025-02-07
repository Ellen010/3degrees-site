import React, { useRef } from 'react'
import { slc, frameImg, boxVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const Software = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
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
          <h1 id="features_title" className="section-heading">Software</h1>
        </div>
        <div className="screen-max-width">
          <div id="chip" className="flex-center w-full my-20">
            <img src={slc} alt="chip" width={500} height={500} />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="hiw-title">
              <br /> Software tools
            </h2>

            <p className="hiw-subtitle">
            Tools are crucial for tasks like 3D modeling, slicing for 3D printing, animation, rendering, and more. Here's a list of the most popular 3D software tools:
            </p>
          </div>

          <div className="mt-10 md:mt-20 mb-14">
            <div className="relative h-full w-full flex-center">
              <div className="overflow-hidden">
                <img
                  src={frameImg}
                  alt="frame"
                  className="bg-transparent relative z-10"
                />
              </div>

            </div>

          </div>

          <div className="hiw-text-container">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text g_fadeIn">
                This unique model was designed for a superior experience.
                <span className="text-white">
                  This two-tier box allows you to play and enjoy your 3D printer and test its highest capacity.
                </span>.
              </p>

              <p className="hiw-text g_fadeIn">
              Blender
                <span className="text-white">
                Description: 
                </span>,
                Blender is a powerful and open-source 3D software used for creating 3D models, animations, simulations, and renders. It has a wide array of features including modeling, texturing, rigging, rendering (using Cycles and Eevee), sculpting, and video editing. It's also used for 3D printing preparation, with an integrated slicer and support for exporting to various formats.
              </p>
            </div>


            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text"> Perplexing and unique model offers a</p>
              <p className="hiw-bigtext">incredible desing </p>
              <p className="hiw-text">with 4 containers and durable elements for user of high expectations.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Software