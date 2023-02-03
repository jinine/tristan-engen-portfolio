import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import useMediaQuery from '../hooks/useMediaQuery';

type Props = {}

export default function Header({ isTopOfPage }: any) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [color, setColor] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (

    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">

        <div className="flex flex-row items-center">
          {/* Logo */}
          <a href="/"><img src="tmpLogo.png" alt="logo" className="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0" /></a>
        </div>
        <div className="uppercase hidden md:inline-flex flex-row items-center">
          <a href="/about" className="p-2 no-underline font-opensans text-sm font-semibold"> About ADI </a>
          <a href="/arts-and-culture" className="p-2 no-underline font-opensans text-sm font-semibold"> Arts & Culture </a>
          <a href="/exhibitions" className="p-2 no-underline font-opensans text-sm font-semibold"> ADI Exhibitions </a>
          <a href="/michif-language" className="p-2 no-underline font-opensans text-sm font-semibold"> Michif Language </a>
          <a href="/#contact-us" className="p-2 no-underline font-opensans text-sm font-semibold"> Contact</a>
        </div>
        <button onClick={() => setIsNavOpen((prev) => !prev)}><TiThMenu className="text-3xl md:hidden pt-2" /></button>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <ul className="flex flex-col items-center justify-between min-h-[250px] text-black">
            <li className="border-b border-gray-400 my-8 uppercase opensans text-sm font-semibold">
              <a href="/about">About ADI</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase opensans text-sm font-semibold">
              <a href="/arts-and-culture">Arts & Culture</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase opensans text-sm font-semibold">
              <a href="/exhibitions">ADI Exhibitions</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase opensans text-sm font-semibold">
              <a href="/michif-language">Michif Language</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase opensans text-sm font-semibold">
              <a href="/#contact-us">Contact</a>
            </li>
          </ul>
        </div>



        <style>{
          `
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: white;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    }
                .header {}
                .header-bg {
                    background-color: #rgba(0,0,0,0.9);
                    }
                
                `
        }
        </style>

      </div>
    </nav>
  )
}  