"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function NavigationServices() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Services');
  const isHomeSelected = selectedMenuItem === 'Home';
  const navbarHomeClass = isHomeSelected ? "homeNavBar" : "bg-gray-100"; // Grey for non-home, blue for home
  const menuItemClass = "rounded-full w-24 p-3 flex justify-center items-center";
  const textClass = isHomeSelected ? "text-white" : "navText"; // Blue text for non-home, white for home
  const selectedClass = isHomeSelected ? "bg-white shadow-sm shadow-white text-blue-500" : "buttonBubbleBlue text-white"; // Blue bubble for non-home
  const demoLinkClass = selectedMenuItem === 'Home' ? "text-white border-white" : "navText border-blue-500";
  const logoImage = selectedMenuItem === 'Home' ? "/logov1.png" : "/logoblue.png";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const iconSrc = isMenuOpen ? './close.svg' : './burger.svg'; // Change icon based on menu state
  const iconAlt = isMenuOpen ? 'Close' : 'Menu';

  const hamburgerIconColor = selectedMenuItem === 'Home' ? 'white' : 'blue-500';
  const mobileNavClass = isMenuOpen ? 'open' : 'closed'; // Classes to control the drawer open/close

  const handleMenuItemClick = (menuItem: string) => {
  setSelectedMenuItem(menuItem);
  setIsMenuOpen(false); // Close the mobile nav drawer
};

  return (
    <>
      
        <div className={`NavBarWrapper p-0 lg:p-4 lg:flex hidden md:p-0 flex justify-between items-center w-full ${navbarHomeClass}`}>
          <div className="flex justify-start items-center flex-1">
          <Image className="mr-24 ml-8 mt-0" src={logoImage} alt="Description" width={81} height={64} />
          </div>
          <div className={`mainMenu flex justify-center text-md items-center flex-1 space-x-4 hidden lg:flex ${textClass}`}>
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
              <Link href="/services" onClick={() => handleMenuItemClick('Services')}>Services</Link>
            </div>
            <div
              className={`${menuItemClass} ${selectedMenuItem === 'AboutUs' ? selectedClass : ''}`}
              onClick={() => setSelectedMenuItem('AboutUs')}
            >
              <Link href="aboutus">About Us</Link>
            </div>
          </div>
          <div className="flex justify-end items-center flex-1">
          <Link className={`font-medium border border-solid p-3 mr-5 rounded-full flex hidden lg:inline ${demoLinkClass}`} href="#">Try Demo</Link>               
          </div>
        </div>

    {/* Hamburger Menu Icon */}
    
    <div className={`p-4 mobileNav flex justify-between items-center ${navbarHomeClass} z-20 lg:hidden`} onClick={toggleMenu}>
          <Image className="ml-2" src={logoImage} alt="Description" width={81} height={64} />
          <Image className="mr-3 mt-[-15px] w-[38px] h-auto" 
         src={isMenuOpen ? (selectedMenuItem === 'Home' ? './close.svg' : './close-blue.svg') : (selectedMenuItem === 'Home' ? './burger.svg' : './burger-blue.svg')} 
         alt={iconAlt} 
         width={25} 
         height={25} />
        </div>

             {/* Mobile Nav Drawer */}
             <div className={`mobileNavDrawer  top-14 w-11/12 pt-10 pl-5 pb-10 justify-between items-center ${selectedMenuItem === 'Home' ? 'homeNavBar' : 'bg-gray-100'} transition-transform transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top lg:hidden z-10 absolute left-0 right-0`}>
                {/* Menu items */}
                <div className={`pl-2 pt-6 ${selectedMenuItem === 'Home' ? 'text-white' : 'text-blue-500'}`}>
                    <Link href="/" onClick={() => handleMenuItemClick('Home')}>Home</Link>
                </div>
                <div className={`pl-2 pt-6 ${selectedMenuItem === 'Home' ? 'text-white' : 'text-blue-500'}`}>
                <Link href="/services" onClick={() => handleMenuItemClick('Services')}>Services</Link>
                </div>
                <div className={`pl-2 pt-6 ${selectedMenuItem === 'Home' ? 'text-white' : 'text-blue-500'}`}>
                <Link href="/aboutus" onClick={() => handleMenuItemClick('AboutUs')}>About Us</Link>
                </div>
                <div className="flex pt-8 justify-start items-center flex-1">
              <Link className={`font-medium border border-solid p-3 mr-5 rounded-full flex lg:hidden ${demoLinkClass}`} href="#">Try Demo</Link>               
            </div>
             </div>
            
    </>
  )
}



