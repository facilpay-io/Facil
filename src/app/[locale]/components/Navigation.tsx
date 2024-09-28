"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { usePathname, useRouter } from 'next/navigation';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faMedium, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSwitcher from './LanguageSwitcher';

interface MediaVariant {
  url: string;
  content_type: string;
  bitrate?: number;
}

interface Media {
  type: string;
  media_url_https: string;
  video_info?: {
    variants: MediaVariant[];
  };
}

interface ExtendedEntities {
  media: Media[];
}

interface TweetData {
  full_text: string;
  spanish_full_text?: string;
  extended_entities?: ExtendedEntities;
  [key: string]: any;
}

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const currentPath = usePathname();
  const router = useRouter();
  
  const isActive = (path: string) => {
    const pathSplit = currentPath?.split('/') ?? [];
    if (path === '') {
      return currentPath?.endsWith('/') || pathSplit[pathSplit?.length - 1] === currentLocale;
    }
    return pathSplit?.includes(path);
  }

  const [selectedMenuItem, setSelectedMenuItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tweetData, setTweetData] = useState<TweetData | null>(null); 
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
        const translatedText = translateTweet(tweetData.full_text, 'es');
        setTranslatedTweet(translatedText);
      } else {
        setTranslatedTweet(tweetData.full_text);
      }
    }
  }, [currentLocale, tweetData]);

  // Example translation function
  const translateTweet = (text: string, targetLanguage: string): string => {
    if (targetLanguage === 'es') {
      return tweetData?.spanish_full_text || text;
    }
    return text;
  };

  const isHomeSelected = currentPath?.endsWith('/es') || currentPath?.endsWith('/');
  const navbarHomeClass = `${isHomeSelected ? "" : ""} transition-bg duration-600`; // Updated duration to 600ms
  const menuItemClass = "whitespace-nowrap rounded-xl pl-4 pr-4 pt-2 pb-2 mr-4 flex justify-center items-center";
  const textClass = "text-white"; // Simplified as both conditions were "text-white"
  const textClassMobile = "text-white";
  const linkClassMobile = `${textClassMobile} opacity-60`;
  const activeLinkClassMobile = `${textClassMobile} font-semibold`;

  const selectedClass = "shadow-md text-white font-semibold"; // Simplified as both conditions were identical
  const borderedLinkClass = "text-white border border-white rounded-full"; // Simplified as both conditions were identical
  const logoImage = "/logov1.png"; // Simplified as both conditions were identical

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const iconSrc = isMenuOpen ? '/close.svg' : '/burger.svg'; // Icon based on menu state
  const iconAlt = isMenuOpen ? 'Close' : 'Menu';

  const handleMenuItemClick = (menuItem: string, path: string, isExpandable: boolean = false) => {
    if (isExpandable) {
      // If it's an expandable menu, toggle the selection and clear non-expandable items
      setSelectedMenuItem(selectedMenuItem === menuItem ? '' : menuItem);
    } else {
      // For non-expandable menus, deselect expandable items and select the clicked item
      setSelectedMenuItem(menuItem);
      setIsMenuOpen(false); // Start closing animation

      // Delay navigation to allow animation to complete
      setTimeout(() => {
        router.push(path);
      }, 600); // Updated to match the new transition duration
    }
  };

  // Extract video or image URL logic
  const getMediaUrl = (): string => {
    if (!tweetData) return '/placeholder.png'; // Fallback if data is not loaded

    const media = tweetData.extended_entities?.media[0];
    let mediaUrl: string;

    if (media?.video_info) {
      // Filter for the MP4 variants only
      const mp4Variants = media.video_info.variants.filter(
        (variant) => variant.content_type === 'video/mp4'
      );

      if (mp4Variants.length > 0) {
        // Get the highest bitrate MP4 video URL, providing a default bitrate of 0 if undefined
        mp4Variants.sort((a, b) => (b.bitrate ?? 0) - (a.bitrate ?? 0));
        mediaUrl = mp4Variants[0].url;
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
                onClick={() => setSelectedMenuItem('Services')}>{t('navigation.services')}</Link>
            </div>
            <div>
              <Link href="/aboutus" className={`${menuItemClass} ${selectedMenuItem === 'AboutUs' ? selectedClass : ''}`}
                onClick={() => setSelectedMenuItem('AboutUs')}>{t('navigation.aboutus')}</Link>
            </div>

            <div className="relative group">
              <button className={`${menuItemClass} ${selectedMenuItem === 'Learn' ? selectedClass : ''}`}>
                {t('navigation.learn')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 mr-[-15px] transition-transform duration-600 group-hover:rotate-180" // Updated duration
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute text-sm top-full left-0 mt-2 w-[125px] p-4 bg-white shadow-lg rounded-lg grid gap-1 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-600"> {/* Updated duration */}
                <div className="flex flex-col gap-0 pl-0 items-start text-xs">
                  <Link href="https://facil-team.gitbook.io/facilpay" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    {t('navigation.whitepaper')}
                  </Link>
                  <Link href="https://docsend.com/v/cqj7c/facilpay" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    {t('navigation.pitchdeck')}
                  </Link>
                  <Link href="https://docsend.com/view/dcsrtjbgkkd2dipf" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    {t('navigation.roadmap')}
                  </Link>
                  <Link href="https://docsend.com/view/h8k9bhmr39e52hke" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    {t('navigation.tokenomics')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`${menuItemClass} ${selectedMenuItem === 'Community' ? selectedClass : ''}`}>
                {t('navigation.community')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-600 group-hover:rotate-180" // Updated duration
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute text-sm top-full left-0 mt-2 w-[425px] p-6 bg-white shadow-lg rounded-lg grid grid-cols-[2fr_1fr] gap-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-600"> {/* Updated duration */}
                <div>
                  <div className="rounded-lg overflow-hidden">
                    {renderMedia()} 
                  </div>
                  <p className="twitterfull_text text-black fweight text-xs mt-3 line-clamp-6 pl-1">
                    <span className="font-semibold">
                      {currentLocale === 'es' ? 'Último Tweet: ' : 'Latest Tweet: '}
                    </span>
                    {translatedTweet || 'Loading tweet...'}
                  </p>
                </div>

                <div className="flex flex-col gap-1 pl-8 items-end text-xs">
                  <Link href="https://x.com/facil_pay" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Twitter 
                  </Link>
                  <Link href="https://mx.linkedin.com/company/facil-pay" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> Indeed 
                  </Link>
                  <Link href="https://www.instagram.com/facilpay.io/?igsh=MzRlODBiNWFlZA%3D%3D" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram 
                  </Link>
                  <Link href="https://discord.com/invite/A63GHnPzpj" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    <FontAwesomeIcon icon={faDiscord} className="mr-2" /> Discord 
                  </Link>
                  <Link href="https://medium.com/@facilpay.io" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    <FontAwesomeIcon icon={faMedium} className="mr-2" /> Medium 
                  </Link>
                  <Link href="https://t.me/+A5BpRNiCsVA4MmY5" target="_blank" className="text-black hover:bg-blue-50 p-2 rounded-lg flex items-center w-full">
                    <FontAwesomeIcon icon={faTelegram} className="mr-2" /> Telegram 
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center flex-1 ">
            <LanguageSwitcher className={borderedLinkClass} />
          </div>
        </div>
      </div>

      <div className={`p-4 mobileNav flex justify-between items-center ${navbarHomeClass} z-20 lg:hidden`} onClick={toggleMenu}>
        <img className="ml-2 z-20" src={logoImage} alt="Description" width={81} height={64} />
        <img className="mr-3 mt-[-15px] w-[38px] h-auto z-20"
          src={isMenuOpen ? '/close.svg' : '/burger.svg'}
          alt={isMenuOpen ? 'Close' : 'Menu'}
          width={25}
          height={25} />
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobileNavDrawer z-1 top-14 w-11/12 pt-10 pl-5 pb-10 justify-between items-start ${isHomeSelected ? 'homeNavBar' : 'bg-gray-100 drop-shadow'} transition-transform duration-600 transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top lg:hidden z-10 absolute left-0 right-0`}>
        {/* Menu items */}
        {/* Non-expandable Menu Items */}
        <div className={`pl-2 pt-6 ${isActive('') ? activeLinkClassMobile : linkClassMobile}`}>
          <button onClick={() => handleMenuItemClick('Home', '/')} className="w-full text-left">
            {t('navigation.home')}
          </button>
        </div>
        <div className={`pl-2 pt-6 ${isActive('services') ? activeLinkClassMobile : linkClassMobile}`}>
          <button onClick={() => handleMenuItemClick('Services', '/services')} className="w-full text-left">
            {t('navigation.services')}
          </button>
        </div>
        <div className={`pl-2 pt-6 ${isActive('aboutus') ? activeLinkClassMobile : linkClassMobile}`}>
          <button onClick={() => handleMenuItemClick('AboutUs', '/aboutus')} className="w-full text-left">
            {t('navigation.aboutus')}
          </button>
        </div>
        
        {/* Learn Section */}
        <div className="pl-2 pt-6">
          <button className={`w-full text-left ${selectedMenuItem === 'Learn' ? activeLinkClassMobile : linkClassMobile}`} 
            onClick={() => handleMenuItemClick('Learn', '', true)}>  {/* Mark as expandable */}
            {t('navigation.learn')}
          </button>
          {selectedMenuItem === 'Learn' && (
            <div className="pl-4 pt-2 flex flex-col space-y-2">
              <button onClick={() => handleMenuItemClick('Whitepaper', 'https://facil-team.gitbook.io/facilpay')} className={linkClassMobile}>
                {t('navigation.whitepaper')}
              </button>
              <button onClick={() => handleMenuItemClick('PitchDeck', 'https://docsend.com/v/cqj7c/facilpay')} className={linkClassMobile}>
                {t('navigation.pitchdeck')}
              </button>
              <button onClick={() => handleMenuItemClick('Roadmap', 'https://docsend.com/view/dcsrtjbgkkd2dipf')} className={linkClassMobile}>
                {t('navigation.roadmap')}
              </button>
              <button onClick={() => handleMenuItemClick('Tokenomics', 'https://docsend.com/view/h8k9bhmr39e52hke')} className={linkClassMobile}>
                {t('navigation.tokenomics')}
              </button>
              {/* Add other Learn links */}
            </div>
          )}
        </div>

        {/* Community Section */}
        {/* Similar structure for community links */}

        <div className="flex pt-8 justify-start gap-2 items-center flex-1">
          <LanguageSwitcher className={`font-medium ${borderedLinkClass}`} />
        </div>
      </div>
    </>
  );
}
