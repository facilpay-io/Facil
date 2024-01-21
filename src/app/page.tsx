"use client";

import Link from 'next/link';
import { Urbanist } from '@next/font/google';
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React from "react";
import Lottie, {Action} from 'lottie-react'
import animatePhone from "./components/animatephone.json";
import animatePhone2 from "./components/animatephone2.json";

const style = {
  height: 559,
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

export default function Home() {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    if (!leftImageRef.current || !rightImageRef.current) {
      console.error("Refs not attached");
      return;
    }

    // Apply initial state immediately
    gsap.set(leftImageRef.current, { y: 600, opacity: 0 });
    gsap.set(rightImageRef.current, { x: 600, opacity: 0 });
    // ScrollTrigger animations
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top bottom",
      end: "15% top",
      onEnter: () => {
        gsap.to(leftImageRef.current, { y: 0, opacity: 1, duration: 1 });
        gsap.to(rightImageRef.current, { x: 0, opacity: 1, duration: 1 });
      },
      onLeave: () => {
        gsap.to(leftImageRef.current, { y: 600, opacity: 0, duration: 1 });
        gsap.to(rightImageRef.current, { x: 600, opacity: 0, duration: 1 });
      },
      onEnterBack: () => {
        gsap.to(leftImageRef.current, { y: 0, opacity: 1, duration: 1 });
        gsap.to(rightImageRef.current, { x: 0, opacity: 1, duration: 1 });
      },
      onLeaveBack: () => {
        gsap.to(leftImageRef.current, { y: 600, opacity: 0, duration: 1 });
        gsap.to(rightImageRef.current, { x: 600, opacity: 0, duration: 1 });
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
    <main className={urbanistone.className}>
      <div className="bg-white h-1/4 flex mt-24 lg:hidden"></div>
      <div className="PageWrapper hero mt-3 lg:mt-3 flex flex-col lg:flex-row w-full items-center justify-center">
  <div className="lg:w-1/2 text-left text-white lg:text-6xl text-3xl font-semibold">
  <p className="pl-12 pb-6">A Blockchain-powered</p>
  <p className="pl-12 pb-6">AI-integrated</p> 
  <p className="pl-12 pb-6">Messaging and</p> 
  <p className="pl-12 pb-6">Payment Platform</p>
  <p className="text-base lg:text-xl pl-12 font-normal">Revolutionizing Web3 Chat, Payment, and DeFi Banking</p>
  <Link className="ml-12 mt-6 border border-solid pt-5 pl-9 pr-7 pb-5 rounded-full flex w-40 text-xl" href="#">Try Demo</Link>
  </div>
  <div className="container hidden lg:flex lg:w-1/2 flex justify-center items-center overflow-hidden">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img src="/leftphone.png" alt="Description" style={{ width: '312px', height: '533px' }} />
            </div>
            <div className="absolute rightPhone overflow-hidden">
    <div ref={rightImageRef} style={{ opacity: 0 }}>
    <img src="/rightphone.png" alt="Description" style={{ width: '312px', height: '425px' }} />
    </div>
    </div>
    </div>
    </div>
    <div>
{/* Additional content can go here */}
</div>
<div className="flex flex-col lg:flex-row componentWrapper">
  <div className="w-1/4">
  <Image className="logoAnimation m-auto pt-10 hidden lg:block " src="/logoblue.png" alt="Logo" width={160} height={97} />
  </div>
<div className="p-10 w-3/4">
  <h2 className="HomeTitle text-6xl font-bold pb-4">Introducing Facil</h2>
<span className="text-xl font-normal">A Cutting-Edge Web 3.0 Messaging and Payment Platform. Facil seamlessly integrates with blockchain-based decentralized applications, offering secure peer-to-peer messaging and global cryptocurrency payments at your fingertips. Send funds worldwide to friends, contacts, or merchants using Facil.</span>
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-16">
  <div className="textFade lg:w-1/2 w-full pl-20">
  <h2 className="text-4xl font-semibold pb-4 pt-24"> Facil, Simple, and Secure Intuitive Messaging Meets Web3</h2>
<span className="text-xl font-medium">Facilpay app move beyond the limitation of Web2 and take advantage of all Web3 has to offer yet, enjoy the Speed, Reliability, and Security.</span>
 <p className="p-4 mt-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Secured Peer-to-Peer Messaging</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />A.I. Instant Message & Voice Translation</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />NFT Emoticons & Sticker</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Group Chat & Group Calls</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />File transfers, Calls, and HD Video conferences</p>
 <p className="mt-2 ml-4 pt-3 pb-3 pl-5 border rounded-full w-28 text-sm">Learn More</p>
  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full">
  
<Image className="logoAnimation m-auto pt-10 hidden lg:block " src="/bodyphone.webp" alt="phone" width={556} height={568} />
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-16">
  <div className="textFade lg:w-1/2 w-full ">
  <div className="lottieWrap"><Lottie
      animationData={animatePhone}
      style={style}
      interactivity={interactivity}
    /></div>

  
  
  </div>
<div className="p-0 textFadeRight lg:w-1/2 w-full">
<h2 className="text-4xl font-semibold pb-10 pt-0 pb-2"> Your unified facil messaging to the future of payments</h2>
<span className="text-xl font-medium ">Crypto-Enabled and Fiat Ready</span>
 <p className="p-4 mt-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Secured Mobile Wallet</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Multi-Chain Network</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Peer-to-Peer Payments</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Flexible Crypto Transactions</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Crypto Debit & Prepaid Card</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Facil Swap & Facil Bridge</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Web 3.0 DeFi Solutions</p>
 <p className="mt-2 ml-4 pt-3 pb-3 pl-5 border rounded-full w-28 text-sm">Learn More</p>
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-16">
  <div className="textFade lg:w-1/2 w-full pl-20 ">
  <h2 className="text-4xl font-semibold pb-4 pt-12"> Facil - Bridging the Gap Between Traditional and DeFi Banking</h2>
<span className="text-xl font-medium">We provide every user with a Web3 wallet, creating a user-friendly, accessible, and secure ecosystem tailored to meet the unique needs of each individual.</span>
 <p className="p-4 mt-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Facilitating Blockchain Banking</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Fiat Transfer Retail Services</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Money Transfer API</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Cost-effectiveness & Fast Network</p>
 <p className="p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Global Compliance & Operations</p>
 <p className="mt-2 ml-4 pt-3 pb-3 pl-5 border rounded-full w-28 text-sm">Learn More</p>
  
  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full">
  
<div className="lottieWrap"><Lottie
      animationData={animatePhone2}
      style={style}
      interactivity={interactivity}
    /></div>
</div>
</div>


<div className="h-1/2 mt-60"><p className="test"></p></div>
</main>
</>
);
}



