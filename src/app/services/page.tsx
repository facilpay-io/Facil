"use client";

import Link from "next/link";
import { Urbanist } from "@next/font/google";
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
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import MainNavigation from "../components/NavigationServices";

const currentYear = new Date().getFullYear();

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

const urbanistone = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
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

  return (
    <>
      <div className="stickyWrapper">
        <MainNavigation />
      </div>
      <main className={urbanistone.className}>
        <div className="mt-4 flex h-1/4 bg-white lg:hidden"></div>
        <div className="PageWrapper heroServices mt-3 flex h-[600px] w-full flex-col items-center justify-center bg-gray-100 md:mt-3 lg:mt-3 lg:h-[650px] lg:flex-col">
          <div className="mt-10 pt-0 text-center text-2xl  font-semibold text-black md:pt-0 lg:w-full  lg:pt-0 lg:pt-0">
            <p className="pb-2 pl-2 pr-2 pt-2 text-2xl md:pb-6 md:text-4xl lg:pb-6 lg:pl-12 lg:pt-10 lg:text-4xl xl:text-5xl">
              Simplifying Blockchain for Everyday Users
            </p>

            <p className="pl-4 text-base font-normal lg:pl-12 lg:text-xl">
              Bridging the Gap Between Traditional and DeFi Banking
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
        <div>{/* Additional content can go here */}</div>

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
              Facil - Free, Simple, and Empowering.
            </h2>
            <span className="text-base">
              Every user is provided with a Web3 wallet integrated into their
              profile. Paired with{" "}
              <span className="HomeTitle">
                our peer-to-peer messaging system,
              </span>{" "}
              this setup allows users to chat and transact directly with
              friends, family, or merchants, all within the Facil App.{" "}
            </span>
            <p className=" mt-4">
              <span className="HomeTitle">
                Facil represents a paradigm shift in digital interaction.
              </span>{" "}
              By demystifying blockchain technology and making cryptocurrencies
              a part of daily life, we invite you to experience the future of
              connectivity and commerce
            </p>
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
            <h2 className="pb-0 pt-4 text-2xl font-semibold lg:pt-20 lg:text-4xl ">
              {" "}
              Chat and Pay with Facil-Ease
            </h2>
            <p className="pt-4 text-base">
              <span className="HomeTitle">
                Messaging and Crypto Transactions{" "}
              </span>
              Simplified Chatting with friends, family, or merchants and paying
              them with cryptocurrency is as easy as sending a text message
              thats the world Facil creates. Our application allows you to
              manage communications and transactions simultaneously within a
              single, intuitive interface
            </p>
            <p className="pt-4 text-base">
              <span className="HomeTitle">Facil is more than an app; </span>
              its a gateway to a new era of digital interaction, where
              convenience, security, and user empowerment converge. Welcome
              aboard experience the future of Web3 with Facil. Chat and get paid
              - Make instant payment during your communication worldwide.
            </p>
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
              Global Transfers made Facil
            </h2>
            <p className="pt-4 text-base">
              <span className="text-rose-500">
                GLOBAL REACH IN OVER 182 COUNTRIES
              </span>
              : Need to convert crypto to fiat without a bank account? We’ve got
              you covered! Through our integration with MoneyGram, the Facil Pay
              app allows users to perform cash-out transactions in 182 countries
              worldwide, offering a practical solution to the unbanked.
            </p>
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
                Across your devices
              </h2>
              <p className="pt-4 text-sm">
                Stay connected with friends and family across your devices. You
                can access Facil from the AppStore, Google Play, Microsoft or
                simply login from the webApp.
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
                  FacilApp Staking
                </h2>
                <p className="pt-4 text-sm">
                  Stake Facil tokens to unlock business tools to create B2B or
                  B2C crypto invoices, sell your products, and accept crypto
                  payments.
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
                Crypto-Commerce
              </h2>
              <p className="pt-4 text-sm">
                A tailored point-of-service (POS) solution allows businesses
                access to DeFi banking and other crypto-commerce solution.
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
                  Transform your business
                </h2>
                <p className="pt-4 text-sm">
                  Engage more audiences, boost sales and drive better customer
                  support.
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
                      Choose your plan
                    </p>
                    <p className="pt-2 text-sm lg:text-base">
                      Free or Premium, Unlock your Decentralized Financial:
                      Balancing Accessibility with Enhanced Features
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
                  Standard <span className="HomeTitle"> Free</span>
                </h2>
                <div className="pt-2 text-sm lg:text-base">
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    P2P Messaging
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    Voice & HD Video Calls
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    Send Crypto payment
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    Web3 Wallet
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    FacilSwap & FacilBridge
                  </p>
                  <p className="pt-2">
                    <img
                      className="mr-1 inline-flex h-auto w-[10px]"
                      alt=""
                      src="/bullet.svg"
                    />
                    Standard AI Chatbot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="textFade m-auto flex w-full max-w-[1400px] flex-col lg:flex-row">
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 p-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">Premium $1</h2>
              <div className="pt-2 text-sm lg:text-base">
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Standard + Free Limited tim
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  10% Off fees in-app transaction
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  MoneyGram fiat on & off ramp
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Facil Visa & Master Card
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Staking Feature & Air drop
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Premium AI Chatbot Tools
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
              <h2 className="text-2xl font-semibold">Platinum $3</h2>
              <div className="pt-2 text-sm lg:text-base">
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Platinum +
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Metal or Designed Card
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  20% Off fees
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Business Staking Feature
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  B2C & B2B Invoice
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Crypto-commerce
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Facil WebApp POS
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Staking Yield
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
              <h2 className="text-2xl font-semibold">Black $9</h2>
              <div className="pt-2 text-sm lg:text-base">
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Platinum +
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  40% Off fees
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Black Metal Card
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Token-Back Reward
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  Limited Exclusive Offers
                </p>
                <p className="pt-2">
                  <img
                    className="mr-1 inline-flex h-auto w-[10px]"
                    alt=""
                    src="/bullet.svg"
                  />
                  DeFi Vaults APY
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
                      2 -5% Crypto Rewards
                    </p>
                    <p className="pt-2 text-sm lg:text-base">
                      Best debit card for spending your crypto and get your
                      rewards in crypto that you want.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="textFadeRight mb-4 w-full overflow-hidden rounded-3xl bg-gray-100 p-10 lg:m-2 lg:w-3/4">
              <div className="pt-0 lg:p-10">
                <h2 className="text-2xl font-semibold">
                  Experience Top-Tier Rates and World-Class Services
                </h2>
                <div className="pt-2 text-sm lg:text-base">
                  <p className="pt-2">
                    Per World Bank data, immigrants and expatriates in the U.S.
                    transferred around $700 billion to their home countries in
                    2020. Facil offers a revolution in this process, cutting
                    costs significantly. With DeFi technology, Facil slashes
                    cross-border payment fees by 30% to 50%, offering a much
                    more affordable alternative and facil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center pt-40">
          <div className="AppContainer font-inter relative flex h-[480px] w-[1408px] flex-col justify-between overflow-hidden text-center text-white lg:h-[980px]">
            <div>
              <h1 className="pt-16 text-2xl font-semibold lg:pt-40 lg:text-6xl">
                Get the facil pay Mobile app
              </h1>
              <p className="p-2 text-base">
                With this platform, you can access your account anywhere,
                anytime for balance and so much more
              </p>
            </div>
            <div className="appbuttons inline-block flex items-center justify-center pt-20 lg:pt-20">
              <button className="m-2 rounded-full bg-white p-3 font-medium text-black">
                <FontAwesomeIcon icon={faApple} className="mr-2" />
                Download Now
              </button>
              <button className="m-2 rounded-full bg-white p-3 font-medium text-black">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                Coming Soon
              </button>
            </div>
            <div className="position-relative">
              <div
                id="appbox"
                className="relative z-10 inline-flex items-center justify-center align-bottom"
              >
                <img
                  className="phonepad flex w-[101px] lg:w-[341px]"
                  alt=""
                  src="/centerappl1.png"
                />
                <img
                  className="flex w-[164px] lg:w-[400px]"
                  alt=""
                  src="/centerapp1.png"
                />
                <img
                  className="phonepad flex w-[101px] lg:w-[341px] "
                  alt=""
                  src="/centerappr1.png"
                />
              </div>
              <img
                className="backimage absolute bottom-0  z-0"
                alt=""
                src="/vector1.svg"
                style={{ width: "30%", height: "auto" }}
              />
              <img
                className="backimageRight absolute bottom-0 right-0 z-0"
                alt=""
                src="/vector2.svg"
                style={{ width: "30%", height: "auto" }}
              />
            </div>
          </div>
        </section>

        <section className="m-auto max-w-[1080px] border-b border-slate-200 pt-40">
          <div className="flex flex-wrap pb-16">
            {/* Create five columns */}
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
              {/* Column content */}
              <img
                className="w-[30%]lg:w-[40%] h-auto "
                alt=""
                src="/footerlogo.svg"
              />
              <div className=" pt-4">
                <p>
                  <img
                    className="mb-1 mr-1 inline-flex h-auto w-[%5] lg:w-[10%] "
                    alt=""
                    src="/envelope.svg"
                  />
                  <a href="mailto:info@facilpay.io" target="_blank">
                    info@facilpay.io
                  </a>
                </p>
                <p className="pt-4">
                  <img
                    className="mb-1 mr-1 inline-flex h-auto w-[%5] lg:w-[10%]"
                    alt=""
                    src="/phoneicon.svg"
                  />
                  <a href="tel:7035947188">703.594.7188</a>
                </p>
                <p className="pt-4 text-blue-500">
                  <a href="https://twitter.com/facil_pay" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  </a>
                  <a
                    href="https://www.instagram.com/facilpay.io?igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  </a>
                  <a
                    href="https://www.instagram.com/facilpay.io?igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/facilbank/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  </a>
                  <a
                    href="https://discord.com/invite/A63GHnPzpj"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                  </a>
                  <a href="https://medium.com/@facilpay.io" target="_blank">
                    <FontAwesomeIcon icon={faMedium} className="mr-2" />
                  </a>
                  <a href="https://t.me/+A5BpRNiCsVA4MmY5" target="_blank">
                    <FontAwesomeIcon icon={faTelegram} className="mr-0" />
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className=" p-0 pl-4 pr-4">
                <h1 className="pb-4 text-2xl font-semibold">Links</h1>
                <p>
                  <a href="/">Home</a>
                </p>
                <p className="pt-2">
                  <a href="/aboutus">About Us</a>
                </p>
                <p className="pt-2">
                  <a href="/services">Services</a>
                </p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className=" p-0 pl-4 pr-4">
                <h1 className="pb-4 text-2xl font-semibold">Legal</h1>
                <a href="https://app.termly.io/document/terms-of-service/964d7f6d-5ef6-4a94-8e98-996d7e80eddc">
                  Terms and Conditions
                </a>{" "}
                <br />
                <a
                  className="pt-2"
                  href="https://app.termly.io/document/privacy-policy/828c3ae9-b4d9-496e-81b1-87590dc1459f"
                >
                  Privacy Policy
                </a>
                <br />
                <a
                  className="pt-2"
                  href="https://app.termly.io/document/cookie-policy/e290686d-7365-48c4-aad4-ba3ec7801ceb"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className=" p-0 pl-4 pr-4">
                <h1 className="pb-4 text-2xl font-semibold">Product</h1>
                <p>Take Tour</p>
                <p className="pt-2">Live Chat</p>
                <p className="pt-2">Reviews</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className=" p-0 pl-4 pr-4">
                <h1 className="pb-4 text-2xl font-semibold">Newsletter</h1>
                <p>Stay Up To Date</p>
              </div>
              <div className="flex items-center pt-4">
                <input
                  type="text"
                  className="newsInput flex-grow bg-slate-50 px-4 py-2 outline-none"
                  placeholder="Your Email..."
                />
                <button
                  type="submit"
                  className="newsButton text-md bg-blue-500 px-4 py-2 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-8 text-center text-xs text-slate-500">
          Ⓒ Copyright {currentYear} Facil Pay inc. all rights reserved
        </div>
      </main>
    </>
  );
}
