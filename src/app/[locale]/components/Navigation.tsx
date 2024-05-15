"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { usePathname } from 'next/navigation';

import LanguageSwitcher from './LanguageSwitcher';



export default function Navigation() {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const currentPath = usePathname();
  const isActive = (path: string) => {
    const pathSplit = currentPath?.split('/') ?? [];
    if (path === '') {
      return currentPath?.endsWith('/') || pathSplit[pathSplit?.length - 1] === currentLocale;
    }
    return pathSplit?.includes(path);
  }
  const [selectedMenuItem, setSelectedMenuItem] = useState('Home');
  const isHomeSelected = currentPath?.endsWith('/es') || currentPath?.endsWith('/');
  const navbarHomeClass = `${isHomeSelected ? "homeNavBar" : "bg-gray-100"} transition-bg duration-300`; // Grey for non-home, blue for home
  const menuItemClass = "rounded-full p-3 flex justify-center items-center";
  const textClass = isHomeSelected ? "text-white" : "navText"; // Blue text for non-home, white for home
  const textClassMobile = isHomeSelected ? "text-white" : "text-blue-500";
  const linkClassMobile = `${textClassMobile} opacity-60`;
  const activeLinkClassMobile = `${textClassMobile} font-semibold`;

  const selectedClass = isHomeSelected ? "bg-white shadow-sm shadow-white text-blue-500" : "buttonBubbleBlue text-white"; // Blue bubble for non-home
  const borderedLinkClass = isHomeSelected ? "!text-white rounded-full border border-white" : "navText rounded-full border border-blue-500";
  const logoImage = isHomeSelected ? "/logov1.png" : "/logoblue.png";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const iconSrc = isMenuOpen ? '/close.svg' : '/burger.svg'; // Change icon based on menu state
  const iconAlt = isMenuOpen ? 'Close' : 'Menu';

  const hamburgerIconColor = isHomeSelected ? 'white' : 'blue-500';
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
          <div>
            <Link href="/" className={`${menuItemClass} ${isActive('') ? selectedClass : ''}`}
              onClick={() => setSelectedMenuItem('Home')}>{t('navigation.home')}</Link>
          </div>
          <div>
            <Link href="/services" className={`${menuItemClass} ${isActive('services') ? selectedClass : ''}`}
              onClick={() => setSelectedMenuItem('Services')}>{t('navigation.services')}</Link></div>
          <div>
            <Link href="/aboutus" className={`${menuItemClass} ${isActive('aboutus') ? selectedClass : ''}`}
              onClick={() => setSelectedMenuItem('AboutUs')}>{t('navigation.aboutus')}</Link>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2 flex-1 mr-5">
          <LanguageSwitcher className={borderedLinkClass} />
          <Link className={`font-medium border border-solid p-3 rounded-full flex hidden lg:inline ${borderedLinkClass}`} href="#">{t('navigation.tryDemo')}</Link>
        </div>
      </div>

      {/* Hamburger Menu Icon */}

      <div className={`p-4 mobileNav flex justify-between items-center ${navbarHomeClass} z-20 lg:hidden`} onClick={toggleMenu}>
        <Image className="ml-2 z-20" src={logoImage} alt="Description" width={81} height={64} />
        <Image className="mr-3 mt-[-15px] w-[38px] h-auto z-20"
          src={isMenuOpen ? (isHomeSelected ? '/close.svg' : '/close-blue.svg') : (isHomeSelected ? '/burger.svg' : '/burger-blue.svg')}
          alt={iconAlt}
          width={25}
          height={25} />
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobileNavDrawer z-1 top-14 w-11/12 pt-10 pl-5 pb-10 justify-between items-center ${isHomeSelected ? 'homeNavBar' : 'bg-gray-100 drop-shadow'} transition-transform transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top lg:hidden z-10 absolute left-0 right-0`}>
        {/* Menu items */}
        <div className={`pl-2 pt-6 ${isActive('') ? activeLinkClassMobile : linkClassMobile}`}>
          <Link href="/" onClick={() => handleMenuItemClick('Home')}>{t('navigation.home')}</Link>
        </div>
        <div className={`pl-2 pt-6 ${isActive('services') ? activeLinkClassMobile : linkClassMobile}`}>
          <Link href="/services" onClick={() => handleMenuItemClick('Services')}>{t('navigation.services')}</Link>
        </div>
        <div className={`pl-2 pt-6 ${isActive('aboutus') ? activeLinkClassMobile : linkClassMobile}`}>
          <Link href="/aboutus" onClick={() => handleMenuItemClick('AboutUs')}>{t('navigation.aboutus')}</Link>
        </div>
        <div className="flex pt-8 justify-start gap-2 items-center flex-1">
          <LanguageSwitcher className={`font-medium ${borderedLinkClass}`} />
          <Link className={`font-medium border border-solid p-3 rounded-full flex text-sm lg:text-base lg:hidden ${borderedLinkClass}`} href="#">{t('navigation.tryDemo')}</Link>
        </div>
      </div >

    </>
  )
}



