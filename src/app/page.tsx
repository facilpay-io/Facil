"use client";

import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './components/hamburger'
import { useState } from 'react';

export default function Home() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Home');
  const isHomeSelected = selectedMenuItem === 'Home';
  const navbarHomeClass = isHomeSelected ? "bg-blue-500" : "bg-slate-200"; // Grey for non-home, blue for home
  const menuItemClass = "rounded-full w-24 p-2 flex justify-center items-center";
  const textClass = isHomeSelected ? "text-white" : "text-blue-500"; // Blue text for non-home, white for home
  const selectedClass = isHomeSelected ? "bg-white shadow-sm shadow-white text-blue-500" : "bg-blue-500 shadow-md shadow-blue-300 text-white"; // Blue bubble for non-home
  const demoLinkClass = selectedMenuItem === 'Home' ? "text-white border-white" : "text-blue-500 border-blue-500";
  const logoImage = selectedMenuItem === 'Home' ? "/logov1.png" : "/logoblue.png";

  return (
    <>
      <main className="flex bg-white min-h-screen flex-col items-center justify-between p-5">
        <div className={`navbarHome1 rounded-full p-0 lg:p-3 md:p-0 flex justify-between items-center w-full ${navbarHomeClass}`}>
          <div className="flex justify-start items-center flex-1">
          <Image className="mr-24 ml-8 mt-0" src={logoImage} alt="Description" width={81} height={64} />
          </div>
          <div className={`mainMenu flex justify-center items-center flex-1 space-x-4 pt-0 hidden lg:flex ${textClass}`}>
            <div
              className={`${menuItemClass} ${selectedMenuItem === 'Home' ? selectedClass : ''}`}
              onClick={() => setSelectedMenuItem('Home')}
            >
              <Link href="/">Home</Link>
            </div>
            <div
              className={`${menuItemClass} ${selectedMenuItem === 'Services' ? selectedClass : ''}`}
              onClick={() => setSelectedMenuItem('Services')}
            >
              <Link href="/">Services</Link>
            </div>
            <div
              className={`${menuItemClass} ${selectedMenuItem === 'AboutUs' ? selectedClass : ''}`}
              onClick={() => setSelectedMenuItem('AboutUs')}
            >
              <Link href="/">About Us</Link>
            </div>
          </div>
          <div className="flex justify-end items-center flex-1">
          <Link className={`font-medium border border-solid p-3 mr-5 rounded-full flex hidden lg:inline ${demoLinkClass}`} href="#">Try Demo</Link>
            <div className="mr-8 flex lg:hidden"><Hamburger /></div>
          </div>
        </div>
      </main>
    </>
  )
}



