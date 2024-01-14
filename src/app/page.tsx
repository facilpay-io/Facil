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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const iconSrc = isMenuOpen ? './close.svg' : './burger.svg'; // Change icon based on menu state
  const iconAlt = isMenuOpen ? 'Close' : 'Menu';
  
  const hamburgerIconColor = selectedMenuItem === 'Home' ? 'white' : 'blue-500';
  const mobileNavClass = isMenuOpen ? 'open' : 'closed'; // Classes to control the drawer open/close


  return (
    <>
      <main className="flex bg-white min-h-screen flex-col items-center justify-between p-5">
        <div className={`rounded-full p-0 lg:p-4 lg:flex hidden md:p-0 flex justify-between items-center w-full ${navbarHomeClass}`}>
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
          </div>
        </div>

    {/* Hamburger Menu Icon */}
    
    <div className={`p-4 mobileNav flex justify-between items-center w-11/12 absolute rounded-full ${navbarHomeClass} z-20 lg:hidden`} onClick={toggleMenu}>
          <Image className="ml-2" src={logoImage} alt="Description" width={81} height={64} />
          <Image className="mr-5" 
         src={isMenuOpen ? (selectedMenuItem === 'Home' ? './close.svg' : './close-blue.svg') : (selectedMenuItem === 'Home' ? './burger.svg' : './burger-blue.svg')} 
         alt={iconAlt} 
         width={25} 
         height={25} />
        </div>

             {/* Mobile Nav Drawer */}
             <div className={`mobileNavDrawer rounded-b-3xl absolute top-14 w-11/12 pt-10 pl-5 pb-10 justify-between items-center  ${selectedMenuItem === 'Home' ? 'bg-blue-500' : 'bg-slate-200'} transition-transform transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top lg:hidden z-10`}>
                {/* Menu items */}
                <div className={`pl-2 pt-6 ${selectedMenuItem === 'Home' ? 'text-white' : 'text-blue-500'}`}>
                    <Link href="/" onClick={() => setSelectedMenuItem('Home')}>Home</Link>
                </div>
                <div className={`pl-2 pt-6 ${selectedMenuItem === 'Home' ? 'text-white' : 'text-blue-500'}`}>
                    <Link href="/" onClick={() => setSelectedMenuItem('Services')}>Services</Link>
                </div>
                <div className={`pl-2 pt-6 ${selectedMenuItem === 'Home' ? 'text-white' : 'text-blue-500'}`}>
                    <Link href="/" onClick={() => setSelectedMenuItem('AboutUs')}>About Us</Link>
                </div>
             </div>
      </main>
    </>
  )
}



