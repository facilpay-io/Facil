"use client";

import Link from "next/link";
import { Urbanist } from "@next/font/google";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import Lottie, { Action } from "lottie-react";
import AccordionRoadMap from "../components/AccordianRoadMap";
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
import MainNavigation from "../components/NavigationAboutUs";
import CoinMarketCap from "../components/CoinMarketCap";

const currentYear = new Date().getFullYear();

const items = [
  {
    title: (
      <div className="flex items-center">
        {" "}
        {/* Ensures flex container alignment */}
        <img
          src="/checkmark.webp"
          alt="Check"
          style={{ width: "20px", marginRight: "8px" }}
        />
        <span>Q4. 2023</span>
      </div>
    ),
    content: `<p>• Team formation </p>
    <ul>
      <li>• Onboarding Devs</li>
      <li>• Legal Consultation</li>
      <li>• Tokenomics Prepared</li>
      <li>• Advisor meetings</li>
      <li>• Deploying Technology Stack</li>
      <li>• Multi-chain Implementation</li>
      <li>• UI/UX Design – Website</li>
      <li>• Social Media & Community</li>
      <li>• Whitepaper v1.8</li>
      <li>• Pitch-deck & One pager</li>
      <li>• Moon-Sheet</li>
      <li>• GTM SEED STAGE 1</li>
      <li>• PR Prepared</li>
      <li>• Pitch Deck Release</li>
    </ul>`,
  },
  {
    title: "Q1. 2024",
    content: `<p>• PRIVATE VC STAGE 1 & 2 </p>
    <ul>
      <li>• GTM SEED STAGE 2</li>
      <li>• IDO Platform Partnership</li>
      <li>• IDO & ICO Launch </li>
      <li>• DEX Uniswap Listing</li>
      <li>• LATAM CEX Exchange Listing</li>
      <li>• UI/UX Figma Prototype</li>
      <li>• AMA Multiple outlets</li>
      <li>• KOL’s Promotion & Event</li>
      <li>• Android Mobile Application</li>
      <li>• IOS Mobile Application</li>
      <li>• Audit Prepared</li>
      <li>• Whitepaper Release V2.2</li>
      <li>• CoinGecko Listing</li>
      <li>• CoinMarketCap Listing</li>
    </ul>`,
  },
  {
    title: "Q2. 2024",
    content: `<p>• FacilSwap & Bridge </p>
    <ul>
      <li>• MoneyGram PR</li>
      <li>• Staking feature</li>
      <li>• CEX Exchange Listing </li>
      <li>• Platform Promotion</li>
      <li>• KOL’s Promotion 2</li>
      <li>• Soft Launch Event</li>
      <li>• BETA Platform V1.2</li>
      <li>• WEB Platform Launch</li>
      <li>• Android Mobile App V1.5</li>
      <li>• IOS Mobile App V1.5</li>
      <li>• PR Top tier 1 & 2 </li>
    </ul>`,
  },
  {
    title: "Q3. 2024",
    content: `<p>• CEX Exchange Listing </p>
    <ul>
      <li>• New Market Launch</li>
      <li>• KOL’s Promotion 3</li>
      <li>• Promotion Event  </li>
      <li>• Platform V2</li>
      <li>• New Market Expansion</li>
      <li>• Facil POS Implementation</li>
      <li>• Facil POS WebApp Beta V1</li>
      <li>• Community Allocation</li>
      <li>• User Adoption Partnership</li>
    </ul>`,
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
        <div className="PageWrapper heroServices mt-3 flex h-[630px] w-full flex-col items-center justify-center bg-gray-100 md:mt-3 lg:mt-3 lg:h-[650px] lg:flex-row">
          <div className="w-full p-6 pt-10 text-center text-2xl font-semibold text-black md:pt-0  lg:w-1/2  lg:p-20 lg:pt-0">
            <div className="pb-4 text-left text-3xl md:text-4xl lg:pb-10 lg:text-6xl">
              Beyond the <br />
              <span className="md:text-4xl lg:text-6xl">Billion-Dollar</span>
            </div>

            <p className="text-left text-base font-normal lg:text-xl">
              Messaging Market: Capturing the Trillion-Dollar Crypto & Payment
              Industry
            </p>
            <div className="relative inline-block flex flex-row">
              <Link
                className="HomeTitle bordercolor mr-1 mt-6 flex w-[155px] justify-center rounded-full border pb-4 pt-5 text-center text-sm lg:mt-10 lg:w-[180px] lg:pb-5 lg:pt-5 lg:text-xl"
                href="#"
              >
                White Paper
              </Link>
              <Link
                className="aboutbutton ml-1 mt-6 flex w-[180px] justify-center  rounded-full border pb-5 pt-5 text-center text-sm text-white lg:mt-10 lg:w-[210px] lg:pt-5 lg:text-xl"
                href="https://docsend.com/v/cqj7c/facilpay"
                target="_blank"
              >
                Facil Pitch Deck
              </Link>
            </div>
          </div>
          <div className="mt-4 flex h-full w-full items-center justify-center overflow-hidden lg:mt-0 lg:w-1/2">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img
                className="ml-0 mt-0 h-[auto]  w-[330px] lg:mt-4 lg:block lg:h-[auto] lg:w-[600px]"
                src="/aboutussec1.webp"
                alt="Description"
              />
            </div>
          </div>
        </div>
        <div>{/* Additional content can go here */}</div>

        <section>
          <div className="m-auto flex w-full max-w-[1400px] flex-col pt-10 lg:flex-row">
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">$10 Billion</h2>
              <p className="pt-2 text-sm lg:text-base">
                Global Messaging Market Volume
              </p>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">
                ${Math.round(counter).toLocaleString()} Billion
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                Global Payment Market Volume
              </p>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-2 lg:w-1/3">
              <h2 className="counterUp text-2xl font-semibold">
                <CoinMarketCap />
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                Cryptocurrency Market Cap
              </p>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">$3 Billion</h2>
              <p className="pt-2 text-sm lg:text-base">
                Global Mobile Messaging Users
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="m-auto mb-4 mt-20 items-center text-center text-2xl font-semibold lg:mt-32 lg:text-4xl">
            Simplifying Blockchain for Everyday Users
          </h1>
          <div className="m-auto flex  w-full max-w-[1100px] flex-col lg:flex-row">
            <div className="relative mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-rose-500">
                Complexity:
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                Web3 platforms claim to be user-friendly, but are{" "}
                <span className="text-rose-500">
                  overwhelmingly complicated
                </span>{" "}
                for traditional Web2 users.
              </p>
            </div>
            <div className="relative m-0 mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-sky-500">
                <Image
                  className="mb-1 mr-2 inline"
                  src="/checkmark.webp"
                  alt="phone"
                  width={22}
                  height={22}
                />
                1. Simplicity Redefined:
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                Facil Pay reimagines the Web3 experience with
                <span className="text-sky-500">simplicity</span>at its core,
                making it as user-friendly as prominent Web2 platforms.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="m-auto flex  w-full max-w-[1100px] flex-col lg:flex-row">
            <div className="relative m-0 mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-rose-500">
                Accessibility:
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                The advanced complexity presents a barrier to widespread
                adoption, especially among{" "}
                <span className="text-rose-500">
                  users who may not be tech savvy.
                </span>
              </p>
            </div>
            <div className="relative m-0 mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-sky-500">
                <Image
                  className="mb-1 mr-2 inline"
                  src="/checkmark.webp"
                  alt="phone"
                  width={22}
                  height={22}
                />
                2. Universal Usability:
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                Designed with clarity and ease of use, our solution is so{" "}
                <span className="text-sky-500">straight forward </span>that even
                our grandparents can navigate blockchain technology
                effortlessly.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="m-auto flex w-full max-w-[1100px] flex-col lg:flex-row">
            <div className="relative m-0 mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-rose-500">
                Limited Access for the Unbanked:
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                A substantial portion of the population remains{" "}
                <span className="text-rose-500">
                  excluded from modern financial services,
                </span>{" "}
                highlighting the urgent need for inclusive financial technology
                solutions.
              </p>
            </div>
            <div className="relative m-0 mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-sky-500">
                <Image
                  className="mb-1 mr-2 inline"
                  src="/checkmark.webp"
                  alt="phone"
                  width={22}
                  height={22}
                />
                3. DeFi Accessibility for the Unbanked:
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                Our financial services do not require traditional banking
                infrastructure, extending financial inclusion to the{" "}
                <span className="text-sky-500">unbanked population.</span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="m-auto max-w-[750px] items-center pt-20 text-center text-2xl font-semibold lg:pt-24 lg:text-4xl">
            Experience Global Freedom: Pay and Get Paid with{" "}
            <span className="HomeTitle">Facil,</span> Anywhere in the World
          </h1>
          <div className="componentWrapper flex flex-col lg:flex-row ">
            <div className="textFade w-full pl-0 lg:w-1/2 lg:pl-20 ">
              <h2 className="pb-4 pt-0 text-2xl font-semibold lg:pt-20 lg:text-4xl">
                OUR MISSION: Simplifying Blockchain for Everyday Users
              </h2>
              <p className="pt-4 text-base">
                <span className="HomeTitle">
                  Revolutionizing Web3 Chat, Payment, and DeFi Banking
                </span>
              </p>
              <p className="text-sm">
                In the complex decentralized finance (DeFi) world, our mission
                stands clear: to revolutionize how individuals and businesses
                interact with DeFi platforms easily. We aim to demystify DeFi
                transactions, making them as straightforward and user-friendly.
                Our focus is on creating a seamless, intuitive experience that
                brings the power of DeFi to your fingertips, breaking down
                barriers and fostering accessibility for all.
              </p>
              <p className="pt-4 text-sm">
                We are dedicated to forging connections encompassing lives,
                businesses, and aspirations, unifying an entire world,
                especially in developing countries. Our vision is anchored in
                the belief that peer-to-peer (P2P) marketplaces represent the
                future of payment solutions in emerging markets. Our goal is to
                become a fundamental component of the digital lifestyle for
                Latin American consumers, seamlessly integrating into their
                everyday digital interactions in one platform.
              </p>
            </div>

            <div className="textFadeRight w-full overflow-hidden p-10  lg:w-1/2">
              <div className="">
                <img
                  className=" m-auto h-[auto]  pt-0 lg:w-[420px] "
                  loading="eager"
                  alt=""
                  src="/aboutussec2.webp"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-30 m-auto max-w-[780px] pt-20 lg:pt-32">
          <div className="text-center">
            <h1 className="mb-8 text-3xl font-semibold lg:text-4xl">
              Our Roadmap
            </h1>
          </div>
          <AccordionRoadMap items={items} />
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
                </a>
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
