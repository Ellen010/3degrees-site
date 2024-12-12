import React, { useRef } from 'react'
import { boxImg, frameImg, boxVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
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
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={boxImg} alt="chip" width={500} height={500} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Two tier box.
            <br /> An excellent Christmas gift.
          </h2>

          <p className="hiw-subtitle">
            Two tiers allow the user to store more items. And modifiable structure lets
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={boxVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Created by 3Degrees team</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    This unique model was designed for a superior experience. It
                    <span className="text-white">
                      allows you to play and enjoy your 3D printer and test its highest capacity.
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Colors
                    <span className="text-white">
                      can be easily changed
                    </span>,
                     and the festive design offers a marvellous spirit for winter holidays.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">incredible desing </p>
                <p className="hiw-text">with 4 containers</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks