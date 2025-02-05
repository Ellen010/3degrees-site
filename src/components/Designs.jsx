import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { desOne, desTwo, desThree, desFour, cultsLogo, thangsLogo, bambuLogo, crealityLogo } from '../utils';
import gsap from 'gsap';


const Designs = () => {
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
      { scrub: 20 }
    );
    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    )
  }, []);


  return (
    <section className="h-full common-padding relative overflow-hidden">
      <div className="screen-max-wdith white">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Designs</h1>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="des-video-container">
            <img src={desOne} alt="titanium" className="des-video g_grow" />
            <p className="fil-text">This is a box with 2x4 compartments openable by a rotation. Really easy to print. The dimensions are 10 x 10 cm (5 x 5 for each compartments). Be gentle when closing it, it needs no force, if it's blocking when closing just go back and close slowly and it will work. The nut has to be loose but tight enough. And it works better horizontaly.</p>
            <div className="des-logo-container">
            <a href="https://cults3d.com/en/3d-model/home/electronic-box-2x4-compartments" target="_blank"  rel="no opener noreferrer">
              <img src={cultsLogo} alt="logo" width={18} height={18} className="des-logo invert-10"/></a>
              <a href="https://thangs.com/designer/3Degrees/3d-model/Electronic%20box%20-%202x4%20compartments-1221756" target="_blank"  rel="no opener noreferrer">
              <img src={thangsLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              <a href="https://makerworld.com/en/models/1029490#profileId-1011960" target="_blank"  rel="no opener noreferrer">
              <img src={bambuLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              {/* <a href="" target="_blank"  rel="no opener noreferrer">
              <img src={crealityLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="des-video-container">
          <div className="des-logo-container">
            <a href="https://cults3d.com/en/3d-model/home/clock-reminder" target="_blank"  rel="no opener noreferrer">
              <img src={cultsLogo} alt="logo" width={18} height={18} className="des-logo invert-10"/></a>
              {/* <a href="" target="_blank"  rel="no opener noreferrer">
              <img src={thangsLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              <a href="" target="_blank"  rel="no opener noreferrer">
              <img src={bambuLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              {/* <a href="" target="_blank"  rel="no opener noreferrer">
              <img src={crealityLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a> */}
              </div> 
            <p className="fil-text">This is a reminder for events or activities. You can write your activity and set the time as the reminder. To assemble the clock, follow the photos: First, pull out the support behind the base and assemble with the base note. Then put the 7 gears for the minutes and next the 45 teeth gear and the gears for the hours. Then, put the arrow for hours and close all with the arrow for minute and the little disk behind. I uploaded a 3mf with my settings. I made it tight because I wanted it to stand on a fridge (so vertically). Depending on the printer, if you need bigger gaps, fell free to contact me. Size for the magnets: 10x2 mm (diameter x high).</p>
            <img src={desTwo} alt="titanium" className="des-video g_grow" />
          </div>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="des-video-container">
            <img src={desThree} alt="titanium" className="des-video g_grow" />
            <p className="fil-text">This is a dove for magnets. I stopped the printing (about at 2 mm hight) to put up to 3 magnets. (2 are enough). You can find them <a href="https://www.amazon.fr/dp/B06X977K8L?psc=1&ref=ppx_yo2ov_dt_b_product_details " target="_blank"  rel="no opener noreferrer" className="inline-block hover:scale-120 hover:text-blue-600 transition-transform duration-300">here</a>. Dimensions of the magnets : 10x2 mm (diameter x height).</p>
            <div className="des-logo-container">
            <a href="https://cults3d.com/en/3d-model/home/doves-magnet" target="_blank"  rel="no opener noreferrer">
              <img src={cultsLogo} alt="logo" width={18} height={18} className="des-logo invert-10"/></a>
              <a href="https://thangs.com/designer/3Degrees/3d-model/Bird%20Magnet-1146021" target="_blank"  rel="no opener noreferrer">
              <img src={thangsLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              <a href="https://makerworld.com/en/models/755415#profileId-689528" target="_blank"  rel="no opener noreferrer">
              <img src={bambuLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              {/* <a href="" target="_blank"  rel="no opener noreferrer">
              <img src={crealityLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="des-video-container">
          <div className="des-logo-container">
            <a href="https://cults3d.com/en/3d-model/home/christmas-box-2x4-compartments" target="_blank"  rel="no opener noreferrer">
              <img src={cultsLogo} alt="logo" width={18} height={18} className="des-logo invert-10"/></a>
              <a href="https://thangs.com/designer/3Degrees/3d-model/Christmas%20Box%20-%202x4%20compartments%20-1217786" target="_blank"  rel="no opener noreferrer">
              <img src={thangsLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              <a href="https://makerworld.com/en/models/878648#profileId-832247" target="_blank"  rel="no opener noreferrer">
              <img src={bambuLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a>
              {/* <a href="" target="_blank"  rel="no opener noreferrer">
              <img src={crealityLogo} alt="logo" width={18} height={18} className="des-logo invert-95"/></a> */}
            </div>
            <p className="fil-text">This is a box with 2x4 compartments openable by a rotation. Really easy to print. The dimensions are 10 x 10 cm (5 x 5 for each compartments). Be gentle when closing it, it needs no force, if it's blocking when closing just go back and close slowly and it will work. The nut has to be loose.</p>
            <img src={desFour} alt="titanium" className="des-video g_grow" />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Designs