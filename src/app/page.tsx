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
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



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
      end: "30% top",
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
      <div className="bg-white h-1/4 flex mt-4 lg:hidden"></div>
      <div className="PageWrapper hero h-[700px] lg:h-[600px] mt-3 lg:mt-3 md:mt-3 flex flex-col lg:flex-row w-full items-center justify-center">
  <div className="mt-10 lg:w-1/2 text-left text-white xl:text-5xl lg:text-4xl md:text-4xl lg:pt-0 pt-0 lg:pt-0 md:pt-0  text-2xl font-semibold">
  <p className="pl-4 pb-2 lg:pl-12 lg:pb-6 md:pb-6">A Blockchain-powered</p>
  <p className="pl-4 pb-2 lg:pl-12 lg:pb-6 md:pb-6">AI-integrated</p> 
  <p className="pl-4 pb-2 lg:pl-12 lg:pb-6 md:pb-6">Messaging and</p> 
  <p className="pl-4 pb-2 lg:pl-12 lg:pb-6 md:pb-6">Payment Platform</p>
  <p className="text-base lg:text-xl pl-4 lg:pl-12 font-normal">Revolutionizing Web3 Chat, Payment, and DeFi Banking</p>
  <Link className="ml-4 lg:ml-12 mt-6 border border-solid lg:pt-5 pt-5 pl-9 pr-2 lg:pr-7 pb-5 rounded-full flex w-36 lg:w-40 text-base lg:text-xl" href="#">Try Demo</Link>
  </div>
  <div className="mt-8  lg:mt-16 lg:w-1/2 w-full flex justify-center items-center overflow-hidden">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img className="lg:w-[312px] lg:h-[533px] lg:block md:hidden ml-4 w-[202px] h-[auto] mt-4" src="/leftphone.png" alt="Description"  />
              
            </div>
            <div className="ml-[-80px] mt-20 lg:mt-28">
    <div ref={rightImageRef} style={{ opacity: 0 }}>
    <img className="lg:w-[312px] lg:h-[425px] w-[202px] h-[auto]  lg:block md:hidden" src="/rightphone.png" alt="Description"  />
    </div>
    </div>
    </div>
    </div>
    <div>
{/* Additional content can go here */}
</div>
<div className="flex flex-col lg:flex-row componentWrapper pt-0 lg:pt-10">
  <div className="w-1/4 pt-10">
  <Image className="logoAnimation m-auto pt-0 lg:pt-10 ml-6 lg:ml-10 " src="/logoblue.png" alt="Logo" width={160} height={97} />
  </div>
<div className="p-4 lg:p-10 w-full lg:w-3/4">
  <h2 className="HomeTitle text-3xl lg:text-6xl font-bold pb-4">Introducing Facil</h2>
<span className="text-base lg:text-xl font-normal">A Cutting-Edge Web 3.0 Messaging and Payment Platform. Facil seamlessly integrates with blockchain-based decentralized applications, offering secure peer-to-peer messaging and global cryptocurrency payments at your fingertips. Send funds worldwide to friends, contacts, or merchants using Facil.</span>
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-0 lg;pt-16">

<div className="textFadeRight p-0 lg:w-1/2 w-full lg:hidden">
  <Image className="logoAnimation m-auto pt-10 " src="/bodyphone.webp" alt="phone" width={556} height={568} />
  </div>
  
  <div className="textFade lg:w-1/2 w-full lg:pl-20 pl-0">
  <h2 className="text-3xl lg:text-4xl font-semibold pb-4 lg:pt-24 pt-8"> Facil, Simple, and Secure Intuitive Messaging Meets Web3</h2>
<span className="text-xl font-medium">Facilpay app move beyond the limitation of Web2 and take advantage of all Web3 has to offer yet, enjoy the Speed, Reliability, and Security.</span>
 <p className="lg:p-4 p-2 mt-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Secured Peer-to-Peer Messaging</p>
 <p className="lg:p-4 p-2"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />A.I. Instant Message & Voice Translation</p>
 <p className="lg:p-4 p-2"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />NFT Emoticons & Sticker</p>
 <p className="lg:p-4 p-2"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Group Chat & Group Calls</p>
 <p className="lg:p-4 p-2"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />File transfers, Calls, and HD Video conferences</p>
 <p className="mt-2 ml-4 pt-3 pb-3 pl-5 border rounded-full w-28 text-sm">Learn More</p>
  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full">
  
<Image className="logoAnimation m-auto pt-10 hidden lg:block " src="/bodyphone.webp" alt="phone" width={556} height={568} />
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-0 lg:pt-16">
  <div className="textFade lg:w-1/2 w-full pb-4 lg:pb-0">
  <div className="lottieWrap w-[100%] h-auto "><Lottie
      animationData={animatePhone}
      style={style}
      interactivity={interactivity}
    /></div>

  
  
  </div>
<div className="p-0 textFadeRight lg:w-1/2 w-full">
<h2 className="text-3xl lg:text-4xl font-semibold pb-10 pt-0 "> Your unified facil messaging to the future of payments</h2>
<span className="text-xl font-medium ">Crypto-Enabled and Fiat Ready</span>
 <p className="p-2 lg:p-4 mt-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Secured Mobile Wallet</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Multi-Chain Network</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Peer-to-Peer Payments</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Flexible Crypto Transactions</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Crypto Debit & Prepaid Card</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Facil Swap & Facil Bridge</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Web 3.0 DeFi Solutions</p>
 <p className="mt-2 ml-4 pt-3 pb-3 pl-5 border rounded-full w-28 text-sm">Learn More</p>
</div>
</div>

<div className="flex flex-col lg:flex-row componentWrapper pt-16">

<div className="textFadeRight p-0 lg:w-1/2 w-full lg:hidden">
  
<div className="lottieWrap w-[100%] h-auto"><Lottie
      animationData={animatePhone2}
      style={style}
      interactivity={interactivity}
    /></div>
</div>

  <div className="textFade lg:w-1/2 w-full lg:pl-20 pl-0 ">
  <h2 className="text-3xl lg:text-4xl font-semibold pb-4 lg:pt-12 pt-6"> Facil - Bridging the Gap Between Traditional and DeFi Banking</h2>
<span className="text-xl font-medium">We provide every user with a Web3 wallet, creating a user-friendly, accessible, and secure ecosystem tailored to meet the unique needs of each individual.</span>
 <p className="p-2 lg:p-4 mt-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Facilitating Blockchain Banking</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Fiat Transfer Retail Services</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Money Transfer API</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Cost-effectiveness & Fast Network</p>
 <p className="p-2 lg:p-4"><Image className="inline mr-2 mb-1" src="/checkmark.webp" alt="phone" width={18} height={18} />Global Compliance & Operations</p>
 <p className="mt-2 ml-4 pt-3 pb-3 pl-5 border rounded-full w-28 text-sm">Learn More</p>
  
  </div>
<div className="textFadeRight p-10 lg:w-1/2 w-full hidden lg:block overflow-hidden">
  
<div className="lottieWrap"><Lottie
      animationData={animatePhone2}
      style={style}
      interactivity={interactivity}
    /></div>
</div>
</div>

<div className="lg:hidden slider mt-20 m-auto w-auto p-0 overflow-hidden">
<h1 className="pb-10 lg:hidden m-0 relative text-2xl md:text-2xl lg:text-4xl  font-semibold font-inherit inline-block text-center">
        A Blockchain-powered Messaging and Payment platform
      </h1>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 48,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img src="/card1.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card2.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card3.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card3.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card4.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card5.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card6.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card7.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card8.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card9.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/card10.svg" />
        </SwiperSlide>
      </Swiper>
</div>

<div className="hidden lg:block mt-20 m-auto">
<section className=" flex flex-col items-center justify-start py-0 px-5 box-border gap-[47px] min-h-[803px] text-left text-22xl font-label-md mq825:gap-[23px]">
      <h1 className="hidden lg:flex m-0 relative text-xl md:text-2xl lg:text-4xl leading-[73px] font-semibold font-inherit inline-block  mq825:leading-[58px]">
        A Blockchain-powered Messaging and Payment platform
      </h1>
      <div className="hidden lg:flex self-stretch flex flex-row flex-wrap items-start justify-center gap-[33px] min-h-[483px] mq825:gap-[16px]">
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

<section className="wrapperCom m-auto flex flex-col items-center pt-40 lg:pt-8">
<h1 className="font-semibold text-2xl lg:text-4xl">App screenshots</h1>
<p className="text-center pb-4 lg:pb-10">Facil App delivered blazing fast performance, striking word solution</p>
<div className="p-0">
  <img className="m-auto "
        alt=""
        src="/phonegroup1.webp" width="100%"
          />
    </div>
      
    </section>


<div className="flex flex-col lg:flex-row componentWrapper pt-6 lg:pt-0">
  <div className="textFade lg:w-1/2 w-full ">
  <div className="lg:pl-10 pl-0">
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
<div className="text-center"><h1 className="text-3xl lg:text-4xl font-semibold mb-0">Got questions?</h1>
<p className="mb-14">Get the answers to your questions about FastFinance.</p></div>
      <Accordion items={items} />
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
        className=""
        alt=""
        src="/footerlogo.svg"
        style={{ width: '40%', height: 'auto' }}
      />
        <div className=" pt-4">
        <p><img
        className="inline-flex mb-1 mr-1 "
        alt=""
        src="/envelope.svg"
        style={{ width: '10%', height: 'auto' }}
      />
          facilpay.Io@gmail.com
          </p>
          <p className="pt-4"><img
        className="inline-flex mb-1 mr-1 "
        alt=""
        src="/phoneicon.svg"
        style={{ width: '10%', height: 'auto' }}
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



