import {iconImg, cultsLogo, thangsLogo, bambuLogo, crealityLogo } from '../utils';
import React from 'react'
import { navLists } from '../constants';
import { Link } from "react-router-dom"; 
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
        <Link to="/">
          <img src={iconImg} alt="Icon" className="icon cursor-pointer" />
        </Link>
            <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => (
            <Link 
            key={nav.name} 
            to={nav.path} 
            className="px-5 text-sm cursor-pointer text-gray hover:text-white hover:scale-125 transition-transform duration-300"
          >
            {nav.name}
          </Link>
          ))}
        </div>
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center py-5 sm:hidden z-50">
            {navLists.map((nav) => (
              <Link
                key={nav.name}
                to={nav.path}
                className="py-2 text-white text-lg"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        )}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
        <a href="https://cults3d.com/en/users/3Dregrees/3d-models" target="_blank"  rel="no opener noreferrer">
          <img src={cultsLogo} alt="cults" class="nav-logo invest-10"/></a>
          <a href="https://thangs.com/designer/3Degrees?srsltid=AfmBOopMAuFmHTgI8h87cecmd_VbMzET9eob4eKIVPCPkCvi8V1WEZnr" target="_blank"  rel="no opener noreferrer">
          <img src={thangsLogo} alt="thangs"class="nav-logo invert-95"/></a>
          <a href="https://makerworld.com/en/@3Degrees" target="_blank"  rel="no opener noreferrer">
          <img src={bambuLogo} alt="bambu" class="nav-logo invert-75"/></a>
          <a href="https://www.crealitycloud.com/user-profile/1487784242" target="_blank"  rel="no opener noreferrer">
          <img src={crealityLogo} alt="creality" class="nav-logo invert-95"/></a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar