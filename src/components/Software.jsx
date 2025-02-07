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
    });
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
  y: 0,
  duration: 15,
  ease: 'back.out(3)',
  repeat: 0
});


// alternative animation
// animateWithGsap('.g_fadeIn', {
//   opacity: 1,
//   y: 0,
//   duration: 2,
//   ease: 'bounce.out', 
//   repeat: 0
// });

    animateWithGsap('#features_title', { y: 0, opacity: 1 })
        animateWithGsap(
          '.g_grow',
          { scale: 1, opacity: 1, ease: 'power1.inOut' },
          { scrub: 40 }
        );
        animateWithGsap(
          '.g_text',
          { y: 0, opacity: 1, ease: 'power2.inOut', duration: 5 }
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

          {/* Blender */}
          <p className="hiw-bigtext pt-10 pb-10 g_fadeIn p:10"> Blender</p>
          <div className="hiw-text-container g_fadeIn p:10">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text">
                <span className="text-white">
                Description: 
                </span>,
                Blender is a powerful and open-source 3D software used for creating 3D models, animations, simulations, and renders. It has a wide array of features including modeling, texturing, rigging, rendering (using Cycles and Eevee), sculpting, and video editing. It's also used for 3D printing preparation, with an integrated slicer and support for exporting to various formats.
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col">
            <span className="text-white">
            Use Cases: 
                </span>
              <p className="hiw-text">Animation, visual effects, 3D modeling, rendering, game design.</p>
              <p className="hiw-text">with 4 containers and durable elements for user of high expectations.</p>
              <span className="text-white">
            Website:  
                </span>
                <p className="contact-link"><a href="https://www.blender.org/">Blender</a></p>
            </div>
          </div>

          {/* Fusion 360 */}
          <p className="hiw-bigtext pt-10 pb-10 g_fadeIn p:20"> Fusion 360</p>
          <div className="hiw-text-container g_fadeIn p:20">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text">
        
                <span className="text-white">
                Description: 
                </span>,
                Fusion 360 by Autodesk is a cloud-based 3D CAD, CAM, and CAE tool that combines industrial and mechanical design with 3D modeling, simulation, and collaboration. It's widely used for product design, engineering, and prototyping.
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col">
            <span className="text-white">
            Use Cases: 
                </span>
              <p className="hiw-text">Product design, engineering, mechanical design, 3D printing.</p>
              <span className="text-white">
            Website:  
                </span>
                <p className="contact-link"><a href="https://www.autodesk.com/products/fusion-360.com">Fusion 360</a></p>
            </div>
          </div>

          {/* ZBrush */}
          <p className="hiw-bigtext pt-10 pb-10 g_fadeIn p:30"> ZBrush</p>
          <div className="hiw-text-container g_fadeIn p:30">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text">
                <span className="text-white">
                Description: 
                </span>,
                ZBrush is the industry-standard software for digital sculpting. It's used to create highly detailed and complex 3D models, often for characters, creatures, and organic shapes. ZBrush is known for its powerful sculpting tools and texture painting features.
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col">
            <span className="text-white">
            Use Cases: 
                </span>
              <p className="hiw-text0">Digital sculpting, character modeling, high-detail 3D art.</p>
              <span className="text-white">
            Website:  
                </span>
                <p className="contact-link"><a href="https://www.maxon.net/en/zbrush?srsltid=AfmBOorVO_jSd8SgFHaySIE2OWtDOu6kJSKqidugyzWkA6jELGsO5_ofN">ZBrush</a></p>
            </div>
          </div>

          {/* Cura, PrusaSlicer, Simplify3D */}
          <p className="hiw-bigtext pt-10 pb-10 g_fadeIn p:40">Cura, PrusaSlicer, Simplify3D</p>
          <div className="hiw-text-container g_fadeIn p:40">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text">
                <span className="text-white">
                Description: 
                </span>,
                Slicing software is used to prepare 3D models for 3D printing by slicing them into layers and generating the G-code instructions for the printer. Popular slicing tools include:
              </p>
              <span className="text-white">
              Cura: 
                </span>
                <p className="hiw-text">Open-source slicer by Ultimaker.</p>
                <span className="text-white">
                PrusaSlicer: 
                </span>
                <p className="hiw-text">Developed by Prusa Research, great for their 3D printers but works with others too.</p>
                <span className="text-white">
                Simplify3D:
                </span>
                <p className="hiw-text">A paid slicer known for advanced control and features.</p>
            </div>
            <div className="flex-1 flex justify-center flex-col">
            <span className="text-white">
            Use Cases: 
                </span>
              <p className="hiw-text">3D printing, G-code generation.</p>
              <span className="text-white">
            Website:  
                </span>
                <p className="contact-link p:30"><a href="https://ultimaker.com/software/ultimaker-cura/"> Cura,</a><a href="https://www.prusa3d.com/page/prusaslicer_424/"> PrusaSlicer,</a> <a href="https://www.simplify3d.com/"> Simplify3D.</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Software