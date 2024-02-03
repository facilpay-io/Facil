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
import Accordion from "./components/Accordian";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

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


<div className=" mt-20 m-auto">
<section className=" flex flex-col items-center justify-start py-0 px-5 box-border gap-[47px] min-h-[803px] text-left text-22xl font-label-md mq825:gap-[23px]">
      <h1 className="m-0 relative text-xl md:text-2xl lg:text-4xl leading-[73px] font-semibold font-inherit inline-block  mq825:leading-[58px]">
        A Blockchain-powered Messaging and Payment platform
      </h1>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[33px] min-h-[483px] mq825:gap-[16px]">
        <img
          className="h-[220px] w-[241px] relative"
          loading="eager"
          alt=""
          src="/card1.svg"
        />
        <img
          className="h-[220px] w-[241px] relative"
          loading="eager"
          alt=""
          src="/card2.svg"
        />
        <div className="w-[241px] flex flex-row items-center justify-center">
          <div className="self-stretch w-[241px] relative hidden" />
          <img
            className="h-[220px] flex-1 relative ç overflow-hidden z-[1]"
            alt=""
            src="/card3.svg"
          />
        </div>
        <img
          className="h-[220px] w-[241px] relative"
          alt=""
          src="/card4.svg"
        />
        <img
          className="h-[220px] w-[241px] relative"
          loading="eager"
          alt=""
          src="/card5.svg"
        />
        <img
          className="h-[220px] w-[241px] relative"
          loading="eager"
          alt=""
          src="/card6.svg"
        />
        <img
          className="h-[220px] w-[241px] relative"
          alt=""
          src="/card7.svg"
        />
        <img
          className="h-[220px] w-[241px] relative"
          alt=""
          src="/card8.svg"
        />
        <img
          className="h-[220px] w-[241px] relative"
          loading="eager"
          alt=""
          src="/card9.svg"
        />
        <img
          className="h-[220px] w-[241px] relative"
          alt=""
          src="/card10.svg"
        />
      </div>
    </section>
</div>
<div className="wrapperCom  m-auto">
<section className="wrapperCom flex flex-col items-center justify-start py-0 px-5 box-border gap-[56px] min-h-[1010px] max-w-full text-center text-22xl font-label-md mq825:gap-[28px]">
      <div className="flex flex-col items-center justify-start gap-[7px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[21px] box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[41px] capitalize font-semibold font-inherit z-[1] mq450:text-6xl mq450:leading-[42px] mq825:text-14xl mq825:leading-[56px]">
            app screenshots
          </h1>
        </div>
        <div className="relative text-xl leading-[30px] capitalize font-medium text-left mq450:text-base mq450:leading-[24px]">
          Facil App delivered blazing fast performance, striking word solution
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full">
        <div className="h-[546px] w-[180px] flex flex-col items-start justify-start pt-[173px] px-0 pb-0 box-border mq825:pt-28 mq825:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/left1.png"
          />
        </div>
        <div className="h-[620px] w-[252px] flex flex-col items-start justify-start pt-[98px] px-0 pb-0 box-border mq825:pt-16 mq825:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/left2.png"
          />
        </div>
        <img
          className="h-[694px] w-[335px] overflow-hidden "
          alt=""
          src="/centeriphone.png"
        />
        <div className="h-[620px] w-[252px] flex flex-col items-start justify-start pt-[98px] px-0 pb-0 box-border mq825:pt-16 mq825:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/right2.png"
          />
        </div>
        <div className="h-[546px] w-[180px] flex flex-col items-start justify-start pt-[173px] px-0 pb-0 box-border mq825:pt-28 mq825:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/right1.png"
          />
        </div>
      </div>
    </section>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-0">
  <div className="textFade lg:w-1/2 w-full ">
  <div className="pl-10">
  <img className="m-auto "
        alt=""
        src="/miccard.webp" width="70%"
          />
    </div>

  
  
  </div>
<div className="p-0 textFadeRight lg:w-1/2 w-full">
<img className="pt-10 pb-4"
        alt=""
        src="/appicon.svg" width="10%"
          />
<span className="text-xl font-medium ">AI Chatbot Integration for Facil App: Enhancing User Experience with Advanced Conversational Technology</span>

</div>
</div>

<section className="max-w-[780px] m-auto pt-32 mb-30">
<div className="text-center"><h1 className="text-4xl font-semibold mb-0">Got questions?</h1>
<p className="mb-14">Get the answers to your questions about FastFinance.</p></div>
      <Accordion items={items} />
</section>

<section className="flex justify-center items-center pt-40 relative">
  <div className="AppContainer w-[1408px] h-[980px] overflow-hidden text-center text-45xl text-white font-inter flex flex-col justify-between relative">
    <div>
      <h1 className="text-5xl font-semibold pt-40">Get the facil pay Mobile app</h1>
      <p>With this platform, you can access your account anywhere, <br />anytime for balance and so much more</p>
    </div>
    <div className="appbuttons flex inline-block justify-center items-center">
      <button className="bg-white rounded-full p-3 m-2 text-black font-medium">
        <FontAwesomeIcon icon={faApple} className="mr-2" />Download Now
      </button>
      <button className="bg-white rounded-full p-3 m-8 text-black font-medium">
        <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />Download Now
      </button>
    </div>
    <div className="position-relative">
      <div id="appbox" className="inline-flex align-bottom justify-center items-center relative z-10">
        <img className="flex w-[341px] phonepad" alt="" src="/centerappl1.png" />
        <img className="flex w-[400px]" alt="" src="/centerapp1.png" />
        <img className="phonepad flex w-[341px] " alt="" src="/centerappr1.png" />
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

<section className="max-w-[1080px] m-auto pt-40">
<div className="flex flex-wrap">
      {/* Create five columns */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        {/* Column content */}
        <img
        className=""
        alt=""
        src="/footerlogo.svg"
        style={{ width: '40%', height: 'auto' }}
      />
        <div className=" pt-4">facilpay.Io@gmail.com</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className=" p-4">Column 2</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className=" p-4">Column 3</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className=" p-4">Column 4</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
        <div className=" p-4">Column 5</div>
      </div>
    </div>
</section>



</main>
</>
);
}



