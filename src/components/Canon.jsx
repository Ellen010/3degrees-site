import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { canonVideo, smallCanonVideo } from '../utils';
import { useEffect, useState } from 'react';

const Canon = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallCanonVideo : canonVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallCanonVideo)
    } else {
      setVideoSrc(canonVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#canon', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -5, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-3/6 w-full flex-center flex-col">
        <p id="canon" className="canon-title">Pirate Cannon Game</p>
        <div className="md:w-10/12 w-9/12  flex-center">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
       <a href="https://cults3d.com/en/3d-model/game/pirate-cannons-game" className="btn" target="_blank" rel="noopener noreferrer">Buy</a>
       <p className="font-normal text-xl">€1.99</p>
      </div>
    </section>
  )
}

export default Canon