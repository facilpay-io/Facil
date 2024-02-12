"use client";

import Link from 'next/link';
import { Urbanist } from '@next/font/google';
import gsap from "gsap";
import { useState, useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React from "react";
import Lottie, {Action} from 'lottie-react'
import Accordion from "../components/Accordian";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import MainNavigation from '../components/NavigationAboutUs'
import CoinMarketCap from '../components/CoinMarketCap'


const currentYear = new Date().getFullYear();

const items = [
  {
    title: 'How does Facil App work?',
    content: 'Facil App is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipients information, and make a transfer. Our platform handles the rest.',
  },
  {
    title: 'Is it safe to use Facil App?',
    content: 'Placeholder text for Question 2 body.',
  },
  {
    title: 'Can I track my transfer?',
    content: 'Placeholder text for Question 3 body.',
  },
  {
    title: 'Are there any hidden fees with Facil App?',
    content: 'Placeholder text for Question 4 body.',
  },
];

const style = {
  
};

interface Interactivity {
  mode: 'scroll' | 'cursor'
  actions: Action[]
}

const interactivity: Interactivity = {
  mode: 'scroll',
  actions: [
    {visibility: [0.2, 0.2], type: 'stop', frames: [0]},
    {
      visibility: [0.2, 0.45],
      type: 'seek',
      frames: [0, 45],
    },
    {visibility: [0.45, 1.0], type: 'loop', frames: [45, 60]},
  ],
}


const urbanistone = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

gsap.registerPlugin(ScrollTrigger);


export default function Services() {
  const leftImageRef = useRef(null);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const targetValue = 965;
    const duration = 3000; // 5 seconds
    const interval = 50; // Update every 50 milliseconds

    const increment = (targetValue - 1) / (duration / interval);
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + increment;
        if (newCounter >= targetValue) {
          clearInterval(timer);
          return targetValue;
        }
        return newCounter;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

 
  useEffect(() => {
    if (!leftImageRef.current) {
      console.error("Refs not attached");
      return;
    }

    // Apply initial state immediately
    gsap.set(leftImageRef.current, { y: 600, opacity: 0 });
    
    // ScrollTrigger animations
    ScrollTrigger.create({
      trigger: ".heroServices",
      start: "top bottom",
      end: "30% top",
      onEnter: () => {
        gsap.to(leftImageRef.current, { y: 0, opacity: 1, duration: 1 });
        
      },
      onLeave: () => {
        gsap.to(leftImageRef.current, { y: 600, opacity: 0, duration: 1 });
        
      },
      onEnterBack: () => {
        gsap.to(leftImageRef.current, { y: 0, opacity: 1, duration: 1 });
        
      },
      onLeaveBack: () => {
        gsap.to(leftImageRef.current, { y: 600, opacity: 0, duration: 1 });
        
      },
  });


// Intersection Observer options for text fade-in
const textFadeOptions = {
  threshold: 0.2, // Adjust this threshold as needed
};

const textFadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      if (targetElement.classList.contains('textFadeRight')) {
        // Add the fade-in animation with an x value of 40px when the text is in view
        gsap.fromTo(
          targetElement,
          { opacity: 0, x: 140 }, // Initial state with x = 40
          { opacity: 1, x: 0, duration: 1 } // Target state when in view
        );
      } else {
        // Add the default text fade-in animation with x = -40
        gsap.fromTo(
          targetElement,
          { opacity: 0, x: -140 }, // Initial state
          { opacity: 1, x: 0, duration: 1 } // Target state when in view
        );
      }

      // Stop observing the element after animation
      textFadeObserver.unobserve(targetElement);
    }
  });
}, textFadeOptions);

// Select all elements with the "textFade" class that you want to animate
const textFadeElements = document.querySelectorAll(".textFade, .textFadeRight");

// Start observing the text elements
textFadeElements.forEach((element) => {
  textFadeObserver.observe(element);
});

// Clean up the observer when the component unmounts
return () => {
  textFadeElements.forEach((element) => {
    textFadeObserver.unobserve(element);
  });
};

}, []);

  


  return (
    <>
    <div className="stickyWrapper"><MainNavigation /></div>
    <main className={urbanistone.className}>
      <div className="bg-white h-1/4 flex mt-4 lg:hidden"></div>
      <div className="PageWrapper heroServices bg-gray-100 h-[630px] lg:h-[650px] mt-3 lg:mt-3 md:mt-3 flex flex-col lg:flex-row w-full items-center justify-center">
  <div className="lg:w-1/2 w-full text-center text-black lg:p-20 p-6 pt-10 lg:pt-0  md:pt-0  text-2xl font-semibold">
  <p className="pb-10 text-3xl lg:text-6xl md:text-4xl text-left">Beyond the <p>Billion-Dollar</p> </p>
  
  <p className="text-base lg:text-xl font-normal text-left">Messaging Market: Capturing the Trillion-Dollar Crypto & Payment Industry</p>
  <div className="flex flex-row inline-block relative">
  <Link className="lg:mt-10 mt-6 mr-1 border HomeTitle bordercolor lg:pt-5 pt-5 pb-4 text-center lg:pb-5 rounded-full flex w-[155px] lg:w-[180px] text-sm lg:text-xl justify-center" href="#">White Paper</Link>
  <Link className="lg:mt-10 mt-6 ml-1 border aboutbutton text-white  lg:pt-5 pt-5 text-center pb-5 rounded-full flex w-[180px] lg:w-[210px] text-sm lg:text-xl justify-center" href="#">Facil Pitch Deck</Link>
</div>

  </div>
  <div className="mt-4 h-full lg:mt-0 lg:w-1/2 w-full flex justify-center items-center overflow-hidden">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img className="lg:w-[600px] lg:h-[auto] lg:block  ml-0 w-[330px] h-[auto] lg:mt-4 mt-0" src="/aboutussec1.webp" alt="Description"  />
              
            </div>
           
    </div>
    </div>
    <div>
{/* Additional content can go here */}
</div>

<section>
<div className="max-w-[1400px] m-auto pt-10 w-full flex flex-col lg:flex-row">
  <div className="lg:w-1/3 w-full bg-gray-100 rounded-3xl m-2 pl-6 pr-6 pt-8 pb-8 relative">
    <h2 className="text-2xl font-semibold">$10 Billion</h2>
    <p className="pt-2 lg:text-base text-sm">Global Messaging Market Volume</p>
  </div>
  <div className="lg:w-1/3 w-full bg-gray-100 rounded-3xl m-2 pl-6 pr-6 pt-8 pb-8 relative">
  <h2 className="text-2xl font-semibold">${Math.round(counter).toLocaleString()} Billion</h2>
  <p className="pt-2 lg:text-base text-sm">
  Global Payment Market Volume</p>
  </div>
  <div className="lg:w-1/3 w-full bg-gray-100 rounded-3xl m-2 pl-6 pr-6 pt-8 pb-8 relative">
  <h2 className="counterUp text-2xl font-semibold"><CoinMarketCap /></h2>
  <p className="pt-2 lg:text-base text-sm">
  Cryptocurrency Market Cap
    </p>
   
  </div>
  <div className="lg:w-1/3 w-full bg-gray-100 rounded-3xl m-2 pl-6 pr-6 pt-8 pb-8 relative">
  <h2 className="text-2xl font-semibold">$3 Billion</h2>
  <p className="pt-2 lg:text-base text-sm">
  Global Mobile Messaging Users
    </p>
    
  </div>
</div>
</section>

<div className="flex flex-col lg:flex-row componentWrapper pt-0 lg:pt-16">
<div className="textFadeRight p-0 lg:w-1/2 w-full lg:hidden">
  <Image className="logoAnimation m-auto pt-10 " src="/centeriphone.png" alt="phone" width={166} height={178} />
  </div>
  
  <div className="textFade lg:w-1/2 w-full lg:pl-20 pl-0">
  <h2 className="text-2xl lg:text-4xl font-semibold pb-4 lg:pt-24 pt-8"> Facil - Free, Simple, and Empowering.</h2>
<span className="text-base">We provide each user with a Web3 wallet, offering a user-friendly, secure, and accessible peer-to-peer messaging and payment system. This integrated feature allows users to chat and transact with friends, family, or merchants using cryptocurrency, all within the Facil application. </span>
 <p className=" mt-4"><span className="HomeTitle">Facil represents more than just a service;</span> it signifies a paradigm shift in digital interaction. Our goal is to demystify complex technologies, making blockchain and cryptocurrency a part of daily life. Facil invites you to experience the future of connectivity and commerce, where freedom, simplicity, and empowerment are effortlessly within your reach.</p>

  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full">
  
<Image className="logoAnimation m-auto pt-0 hidden lg:block " src="/centeriphone.png" alt="phone" width={256} height={268} />
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-0 lg:pt-16">
  <div className="textFade lg:w-1/2 w-full pb-4 lg:pb-0">
  <div className="lottieWrap w-[100%] h-auto "></div>
  
  <img className="logoAnimation m-auto pt-0 w-[340px] lg:w-[480px] h-[auto] " loading="eager" alt="" src="/ServiceSec2.webp"/>
  </div>
  
<div className="p-0 textFadeRight lg:w-1/2 w-full">
<h2 className="text-2xl lg:text-4xl font-semibold pb-0 lg:pt-20 pt-4 "> Chat and Pay with Facil-Ease</h2>
<p className="text-base pt-4"><span className="HomeTitle">Messaging and Crypto Transactions </span>
Simplified Chatting with friends, family, or merchants and paying them with cryptocurrency is as easy as sending a text message thats the world Facil creates. Our application allows you to manage communications and transactions simultaneously within a single, intuitive interface
 </p>
 <p className="text-base pt-4"><span className="HomeTitle">Facil is more than an app; </span>
 its a gateway to a new era of digital interaction, where convenience, security, and user empowerment converge. Welcome aboard experience the future of Web3 with Facil. Chat and get paid - Make instant payment during your communication worldwide.
 </p>
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-16">

<div className="textFadeRight p-0 lg:w-1/2 w-full lg:hidden">
  
<div className=" w-[100%] h-auto">
<img className="logoAnimation m-auto pt-0 w-[300px] lg:w-[480px] h-[auto] " loading="eager" alt="" src="/servicesSec3.webp"/>
</div>
</div>

  <div className="textFade lg:w-1/2 w-full lg:pl-20 pl-0 ">
  <h2 className="text-2xl lg:text-4xl font-semibold pb-4 lg:pt-28 pt-0">Global Transfers made Facil</h2>
  <p className="pt-4 text-base">Transfer money instantly with Facil at better rates. Want to send crypto to someone without bank account access? No problem. You can visit a local MoneyGram location and receive money in 182 countries worldwide. The Facil app integrates seamlessly with MoneyGrams extensive global retail network, enabling users to deposit or withdraw cash directly into their wallets. This bypasses the need for a traditional bank account, offering a practical solution for the unbanked.</p>
 <p className="pt-4"> <span className="HomeTitle">GLOBAL REACH IN OVER 180 COUNTRIES.</span> Through its integration with MoneyGram, the Facil app empowers users to perform cash-out transactions in 182 countries worldwide.</p>
 
  
  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full hidden lg:block overflow-hidden">
  
<div className=""><img className="logoAnimation m-auto pt-0  lg:w-[420px] h-[auto] " loading="eager" alt="" src="/servicesSec3.webp"/></div>
</div>
</div>



<div className="flex flex-col componentWrapper pt-6 lg:pt-6">
  <div className="textFade w-full ">
  <div className="pl-0">
  <img className="m-auto "
        alt=""
        src="/serviceSec4.webp" width="100%"
          />
    </div>

  </div>
<div className="p-0 textFadeRight lg:w-1/2 w-full">
<img className="pt-10 pb-4" alt="" src="" width="10%"/>
</div>
</div>

<section>
<div className="max-w-[1400px] m-auto adjustsection flex flex-col lg:flex-row ">

  <div className="textFade lg:w-1/2 w-full p-10 bg-gray-100 rounded-xl m-2 ">
  <h2 className="text-xl font-semibold"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={24} height={24} />Across your devices</h2>
  <p className="pt-4 text-sm">Stay connected with friends and family across your devices, AppStore, Google Play, Microsoft or simply login from webApp</p>
 
  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full overflow-hidden bg-gray-100 rounded-xl m-2">
  
<div className="">
<h2 className="text-xl font-semibold"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={24} height={24} />FacilApp Staking</h2>
  <p className="pt-4 text-sm">Stake Facil token to unlock your Business tools, create your items, and accept crypto payment.</p>
</div>
</div>
</div>
</section>

<section>
<div className="max-w-[1400px] m-auto flex flex-col lg:flex-row ">

  <div className="textFade lg:w-1/2 w-full p-10 bg-gray-100 rounded-xl m-2 ">
  <h2 className="text-xl font-semibold"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={24} height={24} />Crypto-Commerce</h2>
  <p className="pt-4 text-sm">From DeFi banking, Crypto-commerce, POS solution for cryptocurrency and more, FacilApp helps businesses drive limitless results</p>
 
  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full overflow-hidden bg-gray-100 rounded-xl m-2">
  
<div className="">
<h2 className="text-xl font-semibold"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={24} height={24} />Transform your business</h2>
  <p className="pt-4 text-sm">Engage open more audiences, accelerate sales and drive better customer support</p>
</div>
</div>
</div>
</section>


<section>
<div className="max-w-[1400px] m-auto flex flex-col lg:flex-row mt-28 ">

<div className="textFade lg:w-3/4 w-full pt-6 bg-gray-100 rounded-xl m-2">
  <div className="flex">
    <div className="inline-flex lg:p-8 pl-4 pb-4 pr-1">
      <p className="lg:pt-10 pt-0">
        <p className="font-semibold lg:text-2xl text-xl">Choose your plan</p>
        <p className="lg:text-base text-sm pt-2">Free or Premium, Unlock your Decentralized Financial: 
Balancing Accessibility with Enhanced Features</p></p>
    </div>
    <div className="inline-flex ml-0 overflow-hidden"> {/* Added margin-left for spacing */}
      
      <img className="h-auto overflow-hidden" alt="" src="/servicecards.webp" width="100%"/>
    </div>
  </div>
</div>



<div className="textFadeRight p-10 lg:w-1/4 w-full overflow-hidden bg-gray-100 rounded-xl m-2">
  
<div className="lg:p-10 pt-0">
<h2 className="text-2xl font-semibold">Standard <span className="HomeTitle"> Free</span></h2>
  <p className="pt-2 lg:text-base text-sm">
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>P2P Messaging</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Voice & HD Video Calls</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Send Crypto payment</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Web3 Wallet</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>FacilSwap & FacilBridge</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Standard AI Chatbot</p>
    </p>
</div>
</div>
</div>
</section>

<section>
<div className="max-w-[1400px] m-auto textFade w-full flex flex-col lg:flex-row">
  <div className="lg:w-1/3 w-full bg-gray-100 rounded-xl m-2 p-8 relative">
    <h2 className="text-2xl font-semibold">Premium $1</h2>
    <p className="pt-2 lg:text-base text-sm">
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Standard + Free Limited tim</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>10% Off fees in-app transaction</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>MoneyGram fiat on & off ramp</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Facil Visa & Master Card</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Staking Feature & Air drop</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Premium AI Chatbot Tools</p>
  <img className="absolute right-0 bottom-0 rounded-br-xl " src="/cardleftcorner.webp" alt="Image" style={{ maxHeight: '60px', maxWidth: '55px' }} />
    </p>
  </div>
  <div className="lg:w-1/3 w-full bg-gray-100 rounded-xl m-2 p-8 relative">
  <h2 className="text-2xl font-semibold">Platinum $3</h2>
  <p className="pt-2 lg:text-base text-sm">
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Platinum +</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Metal or Designed Card</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>20% Off fees</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Business Staking Feature</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>B2C & B2B Invoice</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Crypto-commerce</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Facil WebApp POS</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Staking Yield</p>
  <img className="absolute right-0 bottom-0 rounded-br-xl " src="/cardmiddlecorner.webp" alt="Image" style={{ maxHeight: '60px', maxWidth: '55px' }} />
    </p>
  </div>
  <div className="lg:w-1/3 w-full bg-gray-100 rounded-xl m-2 p-8 relative">
  <h2 className="text-2xl font-semibold">Black $9</h2>
  <p className="pt-2 lg:text-base text-sm">
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Platinum +</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>40% Off fees</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Black Metal Card</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Token-Back Reward</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>Limited Exclusive Offers</p>
  <p className="pt-2"><img className="h-auto w-[10px] inline-flex mr-1" alt="" src="/bullet.svg"/>DeFi Vaults APY</p>
    </p>
    <img className="absolute right-0 bottom-0 rounded-br-xl " src="/cardrightcorner.webp" alt="Image" style={{ maxHeight: '60px', maxWidth: '55px' }} />
  </div>
</div>
</section>

<section>
<div className="max-w-[1400px] m-auto flex flex-col lg:flex-row mt-0 ">

<div className="textFade lg:w-1/4 w-full pt-6 bg-gray-100 rounded-xl m-2">
  <div className="flex">
    <div className="inline-flex lg:p-8 pl-4 pb-4 pr-1">
      <p className="lg:pt-10 pt-0">
        <p className="font-semibold lg:text-2xl text-xl">2 -5% Crypto Rewards</p>
        <p className="lg:text-base text-sm pt-2">Best debit card for spending your crypto and get your rewards in crypto that you want.</p></p>
    </div>
    
  </div>
</div>



<div className="textFadeRight p-10 lg:w-3/4 w-full overflow-hidden bg-gray-100 rounded-xl m-2">
  
<div className="lg:p-10 pt-0">
<h2 className="text-2xl font-semibold">Experience Top-Tier Rates and World-Class Services</h2>
  <p className="pt-2 lg:text-base text-sm">
  <p className="pt-2">Per World Bank data, immigrants and expatriates in the U.S. transferred around $700 billion to their home countries in 2020. Facil offers a revolution in this process, cutting costs significantly. With DeFi technology, Facil slashes cross-border payment fees by 30% to 50%, offering a much more affordable alternative and facil.</p>

    </p>
</div>
</div>
</div>
</section>

<section className="flex justify-center items-center pt-40 relative">
  <div className="AppContainer w-[1408px] lg:h-[980px] h-[480px] overflow-hidden text-center text-white font-inter flex flex-col justify-between relative">
    <div>
      <h1 className="text-2xl lg:text-6xl font-semibold lg:pt-40 pt-16">Get the facil pay Mobile app</h1>
      <p className="text-base p-2">With this platform, you can access your account anywhere, anytime for balance and so much more</p>
    </div>
    <div className="appbuttons flex inline-block justify-center items-center pt-20 lg:pt-20">
      <button className="bg-white rounded-full p-3 m-2 text-black font-medium">
        <FontAwesomeIcon icon={faApple} className="mr-2" />Download Now
      </button>
      <button className="bg-white rounded-full p-3 m-2 text-black font-medium">
        <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />Download Now
      </button>
    </div>
    <div className="position-relative">
      <div id="appbox" className="inline-flex align-bottom justify-center items-center relative z-10">
        <img className="flex lg:w-[341px] w-[101px] phonepad" alt="" src="/centerappl1.png" />
        <img className="flex lg:w-[400px] w-[164px]" alt="" src="/centerapp1.png" />
        <img className="phonepad flex lg:w-[341px] w-[101px] " alt="" src="/centerappr1.png" />
      </div>
      <img
        className="backimage absolute bottom-0  z-0"
        alt=""
        src="/vector1.svg"
        style={{ width: '30%', height: 'auto' }}
      />
      <img
        className="backimageRight absolute bottom-0 right-0 z-0"
        alt=""
        src="/vector2.svg"
        style={{ width: '30%', height: 'auto' }}
      />
    </div>
  </div>
</section>

<section className="max-w-[1080px] m-auto pt-40 border-b border-slate-200">
<div className="flex flex-wrap pb-16">
      {/* Create five columns */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        {/* Column content */}
        <img
        className="w-[30%]lg:w-[40%] h-auto "
        alt=""
        src="/footerlogo.svg"
      />
        <div className=" pt-4">
        <p><img
        className="inline-flex mb-1 mr-1 lg:w-[10%] w-[%5] h-auto "
        alt=""
        src="/envelope.svg"
      />
          facilpay.Io@gmail.com
          </p>
          <p className="pt-4"><img
        className="inline-flex mb-1 mr-1 lg:w-[10%] w-[%5] h-auto"
        alt=""
        src="/phoneicon.svg"
       
      />+1 234 456 678 89</p>
          </div>

      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className=" p-0 pl-4 pr-4"><h1 className="font-semibold text-2xl pb-4">Links</h1>
        <p>Home</p>
        <p className="pt-2">About Us</p>
        <p className="pt-2">Services</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
      <div className=" p-0 pl-4 pr-4"><h1 className="font-semibold text-2xl pb-4">Legal</h1>
        <p>Terms of Use</p>
        <p className="pt-2">Privacy Policy</p>
        <p className="pt-2">Cookie Policy</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
      <div className=" p-0 pl-4 pr-4"><h1 className="font-semibold text-2xl pb-4">Product</h1>
        <p>Take Tour</p>
        <p className="pt-2">Live Chat</p>
        <p className="pt-2">Reviews</p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
      <div className=" p-0 pl-4 pr-4"><h1 className="font-semibold text-2xl pb-4">Newsletter</h1>
        <p>Stay Up To Date</p>
       
        </div>
        <div className="flex items-center pt-4">
      <input
        type="text"
        className="newsInput px-4 py-2 bg-slate-50 outline-none flex-grow"
        placeholder="Your Email..."
      />
      <button
        type="submit"
        className="newsButton px-4 py-2 bg-blue-500 text-white text-md"
      >
        Submit
      </button>
    </div>
      </div>
    </div>
</section>

<div className="text-center pt-8 text-xs text-slate-500">Ⓒ Copyright {currentYear} Facil Pay inc. all rights reserved</div>



</main>
</>
);
}



