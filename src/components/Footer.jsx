import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue">
            Find my models {' '}
            </span>
            on https://cults3d.com/en/users/3Dregrees/3d-models {' '}
            <span className="underline text-blue">
            or https://thangs.com/designer/3Degrees?srsltid=AfmBOoqqd54qKk-v0arWkAeAeCnGFt5MS4IjZrVmzf_sQyUS7COSaP6x
            </span>{' '}
            .
          </p>
          <p className="font-semibold text-gray text-xs">
            
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 3Degrees Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer