"use client";

import Link from 'next/link';
import { Urbanist } from '@next/font/google';
import gsap from "gsap";
import { useState, useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React from "react";
import Lottie, {Action} from 'lottie-react'
import AccordionRoadMap from "../components/AccordianRoadMap";
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
    title: 'Q1. 2024',
    content: 'Placeholder text.',
  },
  {
    title: 'Q2. 2024',
    content: 'Placeholder text.',
  },
  {
    title: 'Q3. 2024',
    content: 'Placeholder text.',
  },
  {
    title: 'Q4. 2024',
    content: 'Placeholder text.',
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
  <p className="lg:pb-10 pb-4 text-3xl lg:text-6xl md:text-4xl text-left">Beyond the <p>Billion-Dollar</p> </p>
  
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



<section>
<h1 className="lg:mt-32 mt-20 lg:mb-[-20px] text-center m-auto items-center lg:text-4xl text-2xl font-semibold">Simplifying Blockchain for Everyday Users</h1>
<div className="max-w-[1400px] m-auto  w-full flex flex-col lg:flex-row">
  
  <div className="lg:w-1/2 w-full bg-gray-100 rounded-3xl lg:m-20 m-2 pl-6 pr-6 pt-8 pb-8 relative">
    <h2 className="text-base font-semibold text-rose-500">Complexity:</h2>
    <p className="pt-2 lg:text-base text-sm">Many Web3 Social platforms often claim to be user-friendly but are <span className="text-rose-500">overwhelmingly complicated</span> for those accustomed to Web2 interfaces.</p>
  </div>
  <div className="lg:w-1/2 w-full bg-gray-100 rounded-3xl lg:m-20 m-2 pl-6 pr-6 pt-8 pb-8 relative">
  <h2 className="text-base font-semibold text-sky-500">1. Simplicity Redefined:</h2>
  <p className="pt-2 lg:text-base text-sm">
  Our platform reimagines the Web3 experience with <span className="text-sky-500">simplicity</span>simplicity at its core, making it as easy to use as any Web2 application.</p>
  </div>
</div>
</section>

<section>
<div className="max-w-[1400px] lg:mt-[-90px] m-auto  w-full flex flex-col lg:flex-row">
  <div className="lg:w-1/2 w-full bg-gray-100 rounded-3xl lg:m-20 m-2 pl-6 pr-6 pt-8 pb-8 relative">
    <h2 className="text-base font-semibold text-rose-500">Accessibility:</h2>
    <p className="pt-2 lg:text-base text-sm">The advanced nature of these platforms creates a barrier to widespread adoption, especially among <span className="text-rose-500">non-tech-savvy users.</span></p>
  </div>
  <div className="lg:w-1/2 w-full bg-gray-100 rounded-3xl lg:m-20 m-2 pl-6 pr-6 pt-8 pb-8 relative">
  <h2 className="text-base font-semibold text-sky-500">2. Universal Usability:</h2>
  <p className="pt-2 lg:text-base text-sm">
  Designed with clarity and ease of use, our solution is so <span className="text-sky-500">straightforward </span>that even our grandparents can navigate blockchain technology effortlessly.</p>
  </div>
</div>
</section>

<section>
<div className="max-w-[1400px] lg:mt-[-90px] m-auto  w-full flex flex-col lg:flex-row">
  <div className="lg:w-1/2 w-full bg-gray-100 rounded-3xl lg:m-20 m-2 pl-6 pr-6 pt-8 pb-8 relative">
    <h2 className="text-base font-semibold text-rose-500">Limited Access for the Unbanked:</h2>
    <p className="pt-2 lg:text-base text-sm">A substantial portion of the population remains <span className="text-rose-500">excluded from modern financial services,</span> highlighting the urgent need for inclusive financial technology solutions.</p>
  </div>
  <div className="lg:w-1/2 w-full bg-gray-100 rounded-3xl lg:m-20 m-2 pl-6 pr-6 pt-8 pb-8 relative">
  <h2 className="text-base font-semibold text-sky-500">3. DeFi Accessibility for the Unbanked:</h2>
  <p className="pt-2 lg:text-base text-sm">
  We are creating accessible financial services within our app that do not require traditional banking infrastructure, thus <span className="text-sky-500">extending financial inclusion to the unbanked population.</span></p>
  </div>
</div>
</section>

<section>
  <h1 className="text-center m-auto items-center lg:text-4xl text-2xl font-semibold pt-16">Experience Global Freedom: Pay and Get Paid <p>with <span className="HomeTitle">Facil,</span> Anywhere in the World</p></h1>
<div className="flex flex-col lg:flex-row componentWrapper ">

  <div className="textFade lg:w-1/2 w-full lg:pl-20 pl-0 ">
  <h2 className="text-2xl lg:text-4xl font-semibold pb-4 lg:pt-20 pt-0">OUR MISSION: Simplifying Blockchain for Everyday Users</h2>
  <p className="pt-4 text-base"><span className="HomeTitle">Revolutionizing Web3 Chat, Payment, and DeFi Banking</span></p>
 <p className="text-sm">In the complex decentralized finance (DeFi) world, our mission stands clear: to revolutionize how individuals and businesses interact with DeFi platforms easily. We aim to demystify DeFi transactions, making them as straightforward and user-friendly. Our focus is on creating a seamless, intuitive experience that brings the power of DeFi to your fingertips, breaking down barriers and fostering accessibility for all.</p>
  <p className="text-sm pt-4">We are dedicated to forging connections encompassing lives, businesses, and aspirations, unifying an entire world, especially in developing countries. Our vision is anchored in the belief that peer-to-peer (P2P) marketplaces represent the future of payment solutions in emerging markets. Our goal is to become a fundamental component of the digital lifestyle for Latin American consumers, seamlessly integrating into their everyday digital interactions in one platform.</p>
  </div>

<div className="textFadeRight p-10 lg:w-1/2 w-full  overflow-hidden">
  
<div className=""><img className=" m-auto pt-0  lg:w-[420px] h-[auto] " loading="eager" alt="" src="/aboutussec2.webp"/></div>
</div>
</div>
</section>


<section className="max-w-[780px] m-auto pt-32 mb-30">
<div className="text-center"><h1 className="text-3xl lg:text-4xl font-semibold mb-8">Our Roadmap</h1>
</div>
      <AccordionRoadMap items={items} />
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



