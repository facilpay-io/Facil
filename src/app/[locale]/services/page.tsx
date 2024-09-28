"use client";

import Link from "next/link";
// import { Urbanist } from "@next/font/google";
import { Libre_Franklin } from 'next/font/google';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import Lottie, { Action } from "lottie-react";
import animatePhone from "../components/animatephone.json";
import animatePhone2 from "../components/animatephone2.json";
import Accordion from "../components/Accordian";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay,
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faDiscord,
  faTelegram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import MainNavigation from "../components/Navigation";
import { Trans, useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import GetApp from "../components/GetApp";

const currentYear = new Date().getFullYear();

const logoImages = [
  '/logoservices1.png', 
  '/logoservices2.png',
  '/logoservices3.png',
  '/logoservices4.png',
  '/logoservices5.png',
];

const items = [
  {
    title: "How does Facil App work?",
    content:
      "Facil App is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipients information, and make a transfer. Our platform handles the rest.",
  },
  {
    title: "Is it safe to use Facil App?",
    content: "Placeholder text for Question 2 body.",
  },
  {
    title: "Can I track my transfer?",
    content: "Placeholder text for Question 3 body.",
  },
  {
    title: "Are there any hidden fees with Facil App?",
    content: "Placeholder text for Question 4 body.",
  },
];

const style = {};

interface Interactivity {
  mode: "scroll" | "cursor";
  actions: Action[];
}

const interactivity: Interactivity = {
  mode: "scroll",
  actions: [
    { visibility: [0.2, 0.2], type: "stop", frames: [0] },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    { visibility: [0.45, 1.0], type: "loop", frames: [45, 60] },
  ],
};

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const { t } = useTranslation('services');

  const leftImageRef = useRef(null);

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
          if (targetElement.classList.contains("textFadeRight")) {
            // Add the fade-in animation with an x value of 40px when the text is in view
            gsap.fromTo(
              targetElement,
              { opacity: 0, x: 140 }, // Initial state with x = 40
              { opacity: 1, x: 0, duration: 1 }, // Target state when in view
            );
          } else {
            // Add the default text fade-in animation with x = -40
            gsap.fromTo(
              targetElement,
              { opacity: 0, x: -140 }, // Initial state
              { opacity: 1, x: 0, duration: 1 }, // Target state when in view
            );
          }

          // Stop observing the element after animation
          textFadeObserver.unobserve(targetElement);
        }
      });
    }, textFadeOptions);

    // Select all elements with the "textFade" class that you want to animate
    const textFadeElements = document.querySelectorAll(
      ".textFade, .textFadeRight",
    );

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

  useEffect(() => {
    const element = document.querySelector('.wrapfillerTwo');
    if (element) {
      // Trigger the fade-in after a short delay
      setTimeout(() => {
        element.classList.add('fade-in');
      }, 100); // Delay for the fade-in (optional)
  
      // Trigger the continuous movement after the fade-in completes
      setTimeout(() => {
        element.classList.add('move');
      }, 1100); // Delay after the fade-in (transition time of 1s + small buffer)
    }
  }, []);
  
  

  return (
    <>
      <div className="stickyWrapper">
        <MainNavigation />
      </div>
      <main className={libreFranklin.className}>
        <div className="mt-0 flex h-1/4 bg-white lg:hidden"></div>
        <div className="wrappageTwo mt-0 flex h-[600px] w-full flex-col items-center justify-center md:mt-3 lg:mt-0 lg:h-[600px] lg:flex-row">
        <img className="wrapfillerTwo absolute" src="/clouds.png"/>
        <div className="PageWrapper heroServices mt-3 flex h-[600px] w-full flex-col items-center justify-center  md:mt-3 lg:mt-3 lg:h-[650px] lg:flex-col">
          <div className="mt-10 pt-0 text-center text-2xl  font-semibold drop-shadow text-white md:pt-0 lg:w-full  lg:pt-0 lg:pt-0">
            <p className="pb-2 pl-2 pr-2 pt-2 text-2xl md:pb-6 md:text-4xl lg:pb-6 lg:pl-12 lg:pt-10 lg:text-4xl xl:text-5xl">
              {t('services:banner.title')}
            </p>

            <p className="pl-4 text-base font-normal lg:pl-12 lg:text-xl">
              {t('services:banner.subtitle')}
            </p>
          </div>
          {/* <div className="mt-8 lg:mt-16 lg:w-full w-full flex justify-center items-center overflow-hidden">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img className="lg:w-[700px] lg:h-[auto] lg:block  ml-0 w-[400px] h-[auto] lg:mt-64 mt-6" src="/servicesherophones.webp" alt="Description"  />

            </div> */}

          <div className="mt-4 flex h-full w-full items-center justify-center overflow-hidden lg:mt-0 lg:w-1/2">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img
                className="ml-0 mt-0 h-[auto]  w-[360px] lg:mt-64 lg:block lg:h-[auto] lg:w-[700px]"
                src="/servicesherophones.webp"
                alt="Description"
              />
            </div>
          </div>
        </div>
        </div>
        <div>{/* Additional content can go here */}</div>

        <div className="logo-slider-wrapper mt-12">
  {/* <p className="m-auto w-full text-center font-semibold text-lg">Trusted by</p> */}
  <div className="continuous-slider">
    <div className="slider-content">
      {[...logoImages, ...logoImages].map((logo, index) => (
        <div className="logo-slide" key={index}>
          <Image 
            src={logo} 
            alt={`Logo ${index + 1}`} 
            layout="intrinsic" // Ensures the image maintains its aspect ratio
            width={180} 
            height={60} 
           
          />
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    .logo-slider-wrapper {
      overflow: hidden;
      width: 100%;
    }
    .continuous-slider {
      display: flex;
      flex-wrap: nowrap;
    }
    .slider-content {
      display: flex;
      width: max-content;
      animation: scroll 35s linear infinite;
    }
    .logo-slide {
      flex: 0 0 auto;
      padding: 0 40px;
    }
    .logo-image {
      height: auto;
      max-height: 20px; 
      width: 100%;
     
    }
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</div>

<div className="lg:pl-0 lg:pr-0 pr-4 pl-4 overflow-hidden">
        <div className="componentWrapper flex flex-col pt-0 lg:flex-row lg:pt-16">
          <div className="textFadeRight w-full p-0 lg:hidden lg:w-1/2">
            <Image
              className="logoAnimation m-auto pt-10 "
              src="/centeriphone.png"
              alt="phone"
              width={166}
              height={178}
            />
          </div>

        

          <div className="textFade w-full pl-0 lg:w-1/2 lg:pl-20">
            <h2 className="pb-4 pt-8 text-2xl font-semibold lg:pt-24 lg:text-4xl">
              {" "}
              {t('services:featureSection1.title')}
            </h2>
            <Trans i18nKey="services:featureSection1.body"
              components={{ highlight: <span className='HomeTitle' /> }}
            >
              <p>
                <span className="text-base">
                  Every user is provided with a Web3 wallet integrated into their
                  profile. Paired with{" "}
                  <span className="HomeTitle">
                    our peer-to-peer messaging system,
                  </span>{" "}
                  this setup allows users to chat and transact directly with
                  friends, family, or merchants, all within the Facil App.{" "}
                </span>
              </p><br />
              <p className=" mt-4">
                <span className="HomeTitle">
                  Facil represents a paradigm shift in digital interaction.
                </span>{" "}
                By demystifying blockchain technology and making cryptocurrencies
                a part of daily life, we invite you to experience the future of
                connectivity and commerce
              </p>
            </Trans>
          </div>
          <div className="textFadeRight w-full p-10 lg:w-1/2">
            <Image
              className="logoAnimation m-auto hidden pt-0 lg:block "
              src="/centeriphone.png"
              alt="phone"
              width={256}
              height={268}
            />
          </div>
        </div>

        <div className="componentWrapper flex flex-col pt-0 lg:flex-row lg:pt-16">
          <div className="textFade w-full pb-4 lg:w-1/2 lg:pb-0">
            <div className="lottieWrap h-auto w-[100%] "></div>

            <img
              className="logoAnimation m-auto h-[auto] w-[340px] pt-0 lg:w-[480px] "
              loading="eager"
              alt=""
              src="/ServiceSec2.webp"
            />
          </div>

          <div className="textFadeRight w-full p-0 lg:w-1/2">
            <h2 className="pb-4 pt-4 text-2xl font-semibold lg:pt-20 lg:text-4xl ">
              {" "}
              {t('services:featureSection2.title')}
            </h2>
            <Trans i18nKey="services:featureSection2.body"
              components={{ highlight: <span className='HomeTitle' /> }}
            >
              <p className="pt-4 text-base">
                <span className="HomeTitle">
                  Crypto and Fiat Transactions Simplified{" "}
                </span>
                With FacilPay, receiving and sending money to your friends, family, or merchants is literally the same as sending them a text message or voice recording. Our AI-enhanced platform understands your intentions when you give the prompt through writing or voice, then proceeds with the execution of your payment. Our application not only finds the easiest and cheapest way to send that money to who you want, but does so at super fast. You don’t need to deal with tons of technicalities. Just talk and click, and payment is done. Even your mother or grandmother could easily do this. Now that’s the world FacilPay provides.
              </p>
              <p className="pt-4 text-base">
                <span className="HomeTitle">Facil is more than an app; </span>
                its a gateway to a new era of digital interaction, where
                convenience, security, and user empowerment converge. Welcome
                aboard experience the future of Web3 with Facil. Chat and get paid
                - Make instant payment during your communication worldwide.
              </p>
            </Trans>
          </div>
        </div>

        <div className="componentWrapper flex flex-col pt-16 lg:flex-row">
          <div className="textFadeRight w-full p-0 lg:hidden lg:w-1/2">
            <div className=" h-auto w-[100%]">
              <img
                className="logoAnimation m-auto h-[auto] w-[300px] pt-0 lg:w-[480px] "
                loading="eager"
                alt=""
                src="/servicesSec3.webp"
              />
            </div>
          </div>

          <div className="textFade w-full pl-0 lg:w-1/2 lg:pl-20 ">
            <h2 className="pb-4 pt-0 text-2xl font-semibold lg:pt-28 lg:text-4xl">
              {t('services:featureSection3.title')}
            </h2>
            <Trans i18nKey="services:featureSection3.body"
              components={{ highlight: <span className='text-rose-500' /> }}
            >
              <p className="pt-4 text-base">
                <span className="text-rose-500">
                  GLOBAL REACH IN OVER 182 COUNTRIES
                </span>
                : Need to convert crypto to fiat without a bank account? We’ve got
                you covered! Through our integration with MoneyGram, the Facil Pay
                app allows users to perform cash-out transactions in 182 countries
                worldwide, offering a practical solution to the unbanked.
              </p>
            </Trans>
            <p className="ml-[-7px] pt-2">
              {" "}
              <img
                className=" h-[auto] w-[280px] "
                loading="eager"
                alt=""
                src="/poweredby.svg"
              />
            </p>
          </div>
          <div className="textFadeRight hidden w-full overflow-hidden p-10 lg:block lg:w-1/2">
            <div className="">
              <img
                className="logoAnimation m-auto h-[auto]  pt-0 lg:w-[420px] "
                loading="eager"
                alt=""
                src="/servicesSec3.webp"
              />
            </div>
          </div>
        </div>

        <div className="componentWrapper flex flex-col pt-6 lg:pt-6">
          <div className="textFade w-full ">
            <div className="pl-0">
              <img
                className="m-auto "
                alt=""
                src="/serviceSec4.webp"
                width="100%"
              />
            </div>
          </div>
          <div className="textFadeRight w-full p-0 lg:w-1/2">
            <img className="pb-4 pt-10" alt="" src="" width="10%" />
          </div>
        </div>

        <section>
          <div className="adjustsection m-auto flex max-w-[1400px] flex-col lg:flex-row ">
            <div className="textFade mb-4 w-full rounded-3xl bg-gray-100 p-10 lg:m-2 lg:w-1/2">
              <h2 className="HomeTitle text-xl font-semibold">
                <Image
                  className="mb-1 mr-2 inline"
                  src="/checkmark.webp"
                  alt="phone"
                  width={24}
                  height={24}
                />
                {t('services:servicesFeatures.feature1.title')}
              </h2>
              <p className="pt-4 text-sm">
                {t('services:servicesFeatures.feature1.body')}
              </p>
            </div>
            <div className="textFadeRight mb-4 w-full overflow-hidden rounded-3xl bg-gray-100 p-10 lg:m-2 lg:w-1/2">
              <div className="">
                <h2 className="HomeTitle text-xl font-semibold">
                  <Image
                    className="mb-1 mr-2 inline"
                    src="/checkmark.webp"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                  {t('services:servicesFeatures.feature2.title')}
                </h2>
                <p className="pt-4 text-sm">
                  {t('services:servicesFeatures.feature2.body')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="m-auto flex max-w-[1400px] flex-col lg:flex-row ">
            <div className="textFade mb-4 w-full rounded-3xl bg-gray-100 p-10 lg:m-2 lg:w-1/2 ">
              <h2 className="HomeTitle text-xl font-semibold">
                <Image
                  className="mb-1 mr-2 inline"
                  src="/checkmark.webp"
                  alt="phone"
                  width={24}
                  height={24}
                />
                {t('services:servicesFeatures.feature3.title')}
              </h2>
              <p className="pt-4 text-sm">
                {t('services:servicesFeatures.feature3.body')}
              </p>
            </div>
            <div className="textFadeRight mb-4 w-full overflow-hidden rounded-3xl bg-gray-100 p-10 lg:m-2 lg:w-1/2">
              <div className="">
                <h2 className="HomeTitle text-xl font-semibold">
                  <Image
                    className="mb-2 mr-2 inline"
                    src="/checkmark.webp"
                    alt="phone"
                    width={24}
                    height={24}
                  />
                  {t('services:servicesFeatures.feature4.title')}
                </h2>
                <p className="pt-4 text-sm">
                  {t('services:servicesFeatures.feature4.body')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="m-auto mt-28 flex max-w-[1400px] flex-col lg:flex-row ">
            <div className="textFade mb-4 w-full rounded-3xl bg-gray-100 pt-6 lg:m-2 lg:w-3/4">
              <div className="flex">
                <div className="inline-flex pb-4 pl-4 pr-1 lg:p-8">
                  <div className="pt-0 lg:pt-10">
                    <p className="text-xl font-semibold lg:text-2xl">
                      {t('services:plans.title')}
                    </p>
                    <p className="pt-2 text-sm lg:text-base">
                      {t('services:plans.subtitle')}
                    </p>
                  </div>
                </div>
                <div className="ml-0 inline-flex overflow-hidden rounded-br-3xl">
                  {" "}
                  {/* Added margin-left for spacing */}
                  <img
                    className="h-auto overflow-hidden"
                    alt=""
                    src="/servicecards.webp"
                    width="100%"
                  />
                </div>
              </div>
            </div>

            <div className="textFadeRight mb-4 w-full overflow-hidden rounded-3xl bg-gray-100 p-10 lg:m-2 lg:w-1/4">
              <div className="pt-0 lg:p-10">
                <h2 className="text-2xl font-semibold">
                  <Trans i18nKey="services:plans.standard.title" components={{ highlight: <span className="HomeTitle" /> }}>
                    Standard <span className="HomeTitle"> Free</span>
                  </Trans>
                </h2>
                <div className="pt-2 text-sm lg:text-base">
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    {t('services:plans.standard.p2pMessaging')}
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    {t('services:plans.standard.voiceVideoCalls')}
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    {t('services:plans.standard.sendCryptoPayment')}
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    {t('services:plans.standard.web3Wallet')}
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    {t('services:plans.standard.facilSwapBridge')}
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    {t('services:plans.standard.aiChatbot')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="textFade m-auto flex w-full max-w-[1400px] flex-col lg:flex-row">
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 p-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">{t('services:plans.premium.title')}</h2>
              <div className="pt-2 text-sm lg:text-base">
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.premium.standardPlusFree')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.premium.transactionFeeDiscount')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.premium.moneygramFiat')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.premium.facilVisaMasterCard')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.premium.stakeAirdrop')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.premium.premiumAIChatbot')}
                </p>
                <img
                  className="absolute bottom-0 right-0 rounded-br-3xl "
                  src="/cardleftcorner.webp"
                  alt="Image"
                  style={{ maxHeight: "60px", maxWidth: "55px" }}
                />
              </div>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 p-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">{t('services:plans.platinum.title')}</h2>
              <div className="pt-2 text-sm lg:text-base">
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.premium+')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.metalDesignedCard')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.transactionFeeDiscount')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.businessStaking')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.b2bcInvoice')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.cryptoCommerce')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.webAppPOS')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.platinum.stakingYield')}
                </p>
                <img
                  className="absolute bottom-0 right-0 rounded-br-3xl "
                  src="/cardmiddlecorner.webp"
                  alt="Image"
                  style={{ maxHeight: "60px", maxWidth: "55px" }}
                />
              </div>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 p-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">{t('services:plans.black.title')}</h2>
              <div className="pt-2 text-sm lg:text-base">
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.black.platinum+')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.black.transactionFeeDiscount')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.black.blackMetalCard')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.black.tokenRewards')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.black.exclusiveOffers')}
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  {t('services:plans.black.defiVaults')}
                </p>
              </div>
              <img
                className="absolute bottom-0 right-0 rounded-br-3xl "
                src="/cardrightcorner.webp"
                alt="Image"
                style={{ maxHeight: "60px", maxWidth: "55px" }}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="m-auto mt-0 flex max-w-[1400px] flex-col lg:flex-row ">
            <div className="textFade mb-4 w-full rounded-3xl bg-gray-100 pt-6 lg:m-2 lg:w-1/4">
              <div className="flex">
                <div className="inline-flex pb-4 pl-4 pr-1 lg:p-8">
                  <div className="pt-0 lg:pt-10">
                    <p className="text-xl font-semibold lg:text-2xl">
                      {t('services:plans.cryptoRewards.title')}
                    </p>
                    <p className="pt-2 text-sm lg:text-base">
                      {t('services:plans.cryptoRewards.body')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="textFadeRight mb-4 w-full overflow-hidden rounded-3xl bg-gray-100 p-10 lg:m-2 lg:w-3/4">
              <div className="pt-0 lg:p-10">
                <h2 className="text-2xl font-semibold">
                  {t('services:plans.topServices.title')}
                </h2>
                <div className="pt-2 text-sm lg:text-base">
                  <p className="pt-2">
                    {t('services:plans.topServices.body')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center pt-40">
          <GetApp />
        </section>
</div>
        <section className="m-auto max-w-[1080px]  pt-40">
          <Footer />
        </section>
      </main>
    </>
  );
}
