import {iconImg, buyImg, searchImg} from '../utils';
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
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={buyImg} alt="buy" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar