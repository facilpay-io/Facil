"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { usePathname } from 'next/navigation';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faMedium, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Configuration, OpenAIApi } from 'openai';
import LanguageSwitcher from './LanguageSwitcher';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Ensure this key is set in your .env.local file
});
const openai = new OpenAIApi(configuration);

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tweetData, setTweetData] = useState(null); 
  const [translatedTweet, setTranslatedTweet] = useState('');

  useEffect(() => {
    if (currentPath?.includes('services')) {
      setSelectedMenuItem('Services');
    } else if (currentPath?.includes('aboutus')) {
      setSelectedMenuItem('AboutUs');
    } else {
      setSelectedMenuItem('Home');
    }
  }, [currentPath]);

  // Fetch the tweet data from the URL endpoint
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Danny-Nunez/python-twitter-scraper/main/results/results.json')
      .then(response => response.json())
      .then(data => {
        const legacyData = data?.legacy;
        if (legacyData) {
          setTweetData(legacyData); // Store the legacy part where full_text and media are located
        } else {
          console.error('Legacy data not found');
        }
      })
      .catch(error => console.error('Error fetching tweet data:', error));
  }, []);

  
 // Translate tweet based on language change
 useEffect(() => {
  if (tweetData) {
    if (currentLocale === 'es') {
      // Replace this with an API call or a method to translate the tweet.
      const translatedText = translateTweet(tweetData.full_text, 'es');
      setTranslatedTweet(translatedText);
    } else {
      // Use the original tweet for languages other than Spanish
      setTranslatedTweet(tweetData.full_text);
    }
  }
}, [currentLocale, tweetData]);

// Example translation function (replace with an actual API call)
const translateTweet = (text, targetLanguage) => {
  if (targetLanguage === 'es') {
    // For example, hardcoded translation for demonstration purposes
    return tweetData.spanish_full_text; // Replace with real translation logic or API call
  }
  return text; // Fallback to the original text
};

  const isHomeSelected = currentPath?.endsWith('/es') || currentPath?.endsWith('/');
  const navbarHomeClass = `${isHomeSelected ? "" : ""} transition-bg duration-300`; // Grey for non-home, blue for home
  const menuItemClass = "whitespace-nowrap rounded-xl pl-4 pr-4 pt-2 pb-2 mr-4 flex justify-center items-center";
  const textClass = isHomeSelected ? "text-white" : "text-white"; // Blue text for non-home, white for home
  const textClassMobile = isHomeSelected ? "text-white" : "text-white";
  const linkClassMobile = `${textClassMobile} opacity-60`;
  const activeLinkClassMobile = `${textClassMobile} font-semibold`;

  const selectedClass = isHomeSelected ? " shadow-md text-white font-semibold " : "shadow-md text-white font-semibold "; // Blue bubble for non-home
  const borderedLinkClass = isHomeSelected ? "text-white border border-white rounded-full" : "text-white rounded-full border border-white";
  const logoImage = isHomeSelected ? "/logov1.png" : "/logov1.png";
 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const iconSrc = isMenuOpen ? '/close.svg' : '/burger.svg'; // Change icon based on menu state
  const iconAlt = isMenuOpen ? 'Close' : 'Menu';

  const hamburgerIconColor = isHomeSelected ? 'white' : 'white';
  const mobileNavClass = isMenuOpen ? 'open' : 'closed'; // Classes to control the drawer open/close

  const handleMenuItemClick = (menuItem: string, isExpandable: boolean = false) => {
    if (isExpandable) {
      // If it's an expandable menu, toggle the selection and clear non-expandable items
      setSelectedMenuItem(selectedMenuItem === menuItem ? '' : menuItem);
    } else {
      // For non-expandable menus, deselect expandable items and select the clicked item
      setSelectedMenuItem(menuItem);
      setIsMenuOpen(false); // Close the mobile nav drawer for non-expandable menus
    }
  };
  
  

  // Extract video or image URL logic
  const getMediaUrl = () => {
    if (!tweetData) return '/placeholder.png'; // Fallback if data is not loaded
  
    const media = tweetData.extended_entities?.media[0];
    let mediaUrl;
  
    if (media?.video_info) {
      // Filter for the MP4 variants only
      const mp4Variants = media.video_info.variants.filter(variant => variant.content_type === 'video/mp4');
  
      if (mp4Variants.length > 0) {
        // Get the highest bitrate MP4 video URL
        mediaUrl = mp4Variants.sort((a, b) => b.bitrate - a.bitrate)[0].url;
      } else {
        // If no MP4 is found, fallback to the first available variant
        mediaUrl = media.video_info.variants[0].url;
      }
    } else {
      // Fallback to image if video is not available
      mediaUrl = media?.media_url_https || '/placeholder.png';
    }
  
    // Log the media URL to the console
    console.log('Media URL:', mediaUrl);
  
    return mediaUrl;
  };

  // Render either a video or an image based on the media type
  const renderMedia = () => {
    const media = tweetData?.extended_entities?.media[0];
    
    if (media?.type === 'video') {
      return (
        <video width="300" height="131" controls muted autoPlay playsInline loop>
          <source src={getMediaUrl()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (media?.type === 'photo') {
      return (
        <img src={media.media_url_https} alt="Media" width="300" height="131" />
      );
    } else {
      return <img src="/placeholder.png" alt="Placeholder" width="300" height="131" />;
    }
  };

  console.log(tweetData);

  return (
    <>
      <div className="Navback">
        <div className={`NavBarWrapper p-0 lg:p-4 lg:flex hidden md:p-0 flex justify-between items-center w-full `}>
          <div className="flex items-center flex-1 justify-start">
            <img className="mr-24 ml-8 mt-0" src={logoImage} alt="Description" width={81} height={64} />
          </div>

          <div className={`mainMenu flex items-center justify-center text-md flex-1 space-x-4 hidden lg:flex ${textClass}`}>
            <div>
              <Link href="/" className={`${menuItemClass} ${selectedMenuItem === 'Home' ? selectedClass : ''}`}
                onClick={() => setSelectedMenuItem('Home')}>{t('navigation.home')}</Link>
            </div>
            <div>
              <Link href="/services" className={`${menuItemClass} ${selectedMenuItem === 'Services' ? selectedClass : ''}`}
                onClick={() => setSelectedMenuItem('Services')}>{t('navigation.services')}</Link></div>
            <div>
              <Link href="/aboutus" className={`${menuItemClass} ${selectedMenuItem === 'AboutUs' ? selectedClass : ''}`}
                onClick={() => setSelectedMenuItem('AboutUs')}>{t('navigation.aboutus')}</Link>
            </div>

            <div className="relative group">
              <button className={`${menuItemClass} ${selectedMenuItem === 'Learn' ? selectedClass : ''}`}>
                {t('navigation.learn')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 mr-[-15px] transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute text-sm top-full left-0 mt-2 w-[125px] p-4 bg-white shadow-lg rounded-lg grid gap-1 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
             
                <div>
                  
                  
                </div>

                <div className="flex flex-col gap-0 pl-0 items-start text-xs">
                  <Link href="https://facil-team.gitbook.io/facilpay" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                  {t('navigation.whitepaper')}
                  </Link>
                  <Link href="https://docsend.com/v/cqj7c/facilpay" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                  {t('navigation.pitchdeck')}
                  </Link>
                  <Link href="https://www.facebook.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                  {t('navigation.roadmap')}
                  </Link>
                  <Link href="https://www.instagram.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                  {t('navigation.tokenomics')}
                  </Link>
                  <Link href="https://www.instagram.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                  {t('navigation.brandkit')}
                  </Link>
                  <Link href="https://www.instagram.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                  {t('navigation.careers')}
                  </Link>
    
                </div>
              </div>
            </div>
         


            <div className="relative group">
              <button className={`${menuItemClass} ${selectedMenuItem === 'Community' ? selectedClass : ''}`}>
                {t('navigation.community')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute text-sm top-full left-0 mt-2 w-[425px] p-6 bg-white shadow-lg rounded-lg grid grid-cols-[2fr_1fr] gap-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
             
                <div>
                  <div className="rounded-lg overflow-hidden">
                 
                    {renderMedia()} </div>
                    <p className="twitterfull_text text-black fweight text-xs mt-3 line-clamp-6 pl-1">
                      <span className="font-semibold">
                        {currentLocale === 'es' ? 'Último Tweet: ' : 'Latest Tweet: '}
                      </span>
                      {translatedTweet || 'Loading tweet...'}
                    </p>
                </div>

                <div className="flex flex-col gap-1 pl-8 items-end text-xs">
                  <Link href="https://www.twitter.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    Twitter <FontAwesomeIcon icon={faTwitter} className="ml-2" />
                  </Link>
                  <Link href="https://www.indeed.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    Indeed <FontAwesomeIcon icon={faLinkedin} className="ml-2" />
                  </Link>
                  <Link href="https://www.facebook.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    Facebook <FontAwesomeIcon icon={faFacebook} className="ml-2" />
                  </Link>
                  <Link href="https://www.instagram.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    Instagram <FontAwesomeIcon icon={faInstagram} className="ml-2" />
                  </Link>
                  <Link href="https://www.instagram.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    Discord <FontAwesomeIcon icon={faDiscord} className="ml-2" />
                  </Link>
                  <Link href="https://www.instagram.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    Medium <FontAwesomeIcon icon={faMedium} className="ml-2" />
                  </Link>
                  <Link href="https://www.instagram.com" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    Telegram <FontAwesomeIcon icon={faTelegram} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center  flex-1 ">
            <LanguageSwitcher className={borderedLinkClass} />
          </div>
        </div>
      </div>

      <div className={`p-4 mobileNav flex justify-between items-center ${navbarHomeClass} z-20 lg:hidden`} onClick={toggleMenu}>
        <img className="ml-2 z-20" src={logoImage} alt="Description" width={81} height={64} />
        <img className="mr-3 mt-[-15px] w-[38px] h-auto z-20"
          src={isMenuOpen ? (isHomeSelected ? '/close.svg' : '/close.svg') : (isHomeSelected ? '/burger.svg' : '/burger.svg')}
          alt={isMenuOpen ? 'Close' : 'Menu'}
          width={25}
          height={25} />
      </div>

{/* Mobile Nav Drawer */}
<div className={`mobileNavDrawer z-1 top-14 w-11/12 pt-10 pl-5 pb-10 justify-between items-start ${isHomeSelected ? 'homeNavBar' : 'bg-gray-100 drop-shadow'} transition-transform transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top lg:hidden z-10 absolute left-0 right-0`}>
  {/* Menu items */}
 {/* Non-expandable Menu Items */}
<div className={`pl-2 pt-6 ${isActive('') ? activeLinkClassMobile : linkClassMobile}`}>
  <Link href="/" onClick={() => handleMenuItemClick('Home', false)}>{t('navigation.home')}</Link>
</div>
<div className={`pl-2 pt-6 ${isActive('services') ? activeLinkClassMobile : linkClassMobile}`}>
  <Link href="/services" onClick={() => handleMenuItemClick('Services', false)}>{t('navigation.services')}</Link>
</div>
<div className={`pl-2 pt-6 ${isActive('aboutus') ? activeLinkClassMobile : linkClassMobile}`}>
  <Link href="/aboutus" onClick={() => handleMenuItemClick('AboutUs', false)}>{t('navigation.aboutus')}</Link>
</div>


{/* Learn Section */}
<div className="pl-2 pt-6">
  <button className={`w-full text-left ${selectedMenuItem === 'Learn' ? activeLinkClassMobile : linkClassMobile}`} 
    onClick={() => handleMenuItemClick('Learn', true)}>  {/* Mark as expandable */}
    {t('navigation.learn')}
  </button>
  {selectedMenuItem === 'Learn' && (
    <div className="pl-4 pt-2 flex flex-col space-y-2">
      <Link href="/learn/whitepaper" className={linkClassMobile}>
        Whitepaper
      </Link>
      <Link href="/learn/pitchdeck" className={linkClassMobile}>
        PitchDeck
      </Link>
      {/* Add other Learn links */}
    </div>
  )}
</div>

{/* Community Section */}
<div className="pl-2 pt-6">
  <button className={`w-full text-left ${selectedMenuItem === 'Community' ? activeLinkClassMobile : linkClassMobile}`} 
    onClick={() => handleMenuItemClick('Community', true)}>  {/* Mark as expandable */}
    {t('navigation.community')}
  </button>
  {selectedMenuItem === 'Community' && (
    <div className="pl-4 pt-2 flex flex-col space-y-2">
      <Link href="https://twitter.com" className={linkClassMobile}>
        Twitter
      </Link>
      <Link href="https://linkedin.com" className={linkClassMobile}>
        LinkedIn
      </Link>
      {/* Add other Community links */}
    </div>
  )}
</div>




  <div className="flex pt-8 justify-start gap-2 items-center flex-1">
    <LanguageSwitcher className={`font-medium ${borderedLinkClass}`} />
  </div>
</div>


    </>
  );
}
