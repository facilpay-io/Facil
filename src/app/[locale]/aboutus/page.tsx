"use client";

import Link from "next/link";
import { Urbanist } from "@next/font/google";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import { Action } from "lottie-react";
import AccordionRoadMap from "../components/AccordianRoadMap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainNavigation from "../components/Navigation";
import CoinMarketCap from "../components/CoinMarketCap";
import { Trans, useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import GetApp from "../components/GetApp";
// import TermlyEmbed from "../components/TermlyEmbed"; // Importing the TermlyEmbed component

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
      <li>• UI/UX Design - Website</li>
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
      <li>• KOL's Promotion & Event</li>
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
      <li>• KOL's Promotion 2</li>
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
      <li>• KOL's Promotion 3</li>
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

const formatRoadmapItems = (itemsString: string) => {
  const ditems = itemsString.split(',');
  // console.log("Items: ", ditems)
  return `<ul>${ditems.map((_item, index) => '<li>• ' + _item.trim() + '</li>').join('')}</ul>`
}

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
  const { t } = useTranslation('about');

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
              <Trans i18nKey="about:banner.title">
                Beyond the <br />
                <span className="md:text-4xl lg:text-6xl">Billion-Dollar</span>
              </Trans>
            </div>

            <p className="text-left text-base font-normal lg:text-xl">
              {t('about:banner.subtitle')}
            </p>
            <div className="relative flex flex-row gap-1">
              <Link
                className="HomeTitle bordercolor mt-6 flex justify-center items-center rounded-full border p-3 text-center text-sm lg:mt-10 lg:p-5 lg:text-xl"
                href="https://facil-team.gitbook.io/facilpay"
                target="_blank"
              >
                {t('about:banner.buttons.whitePaper')}
              </Link>
              <Link
                className="aboutbutton ml-1 mt-6 flex justify-center items-center rounded-full border p-3 text-center text-sm text-white lg:mt-10 lg:p-5 lg:text-xl"
                href="https://docsend.com/v/cqj7c/facilpay"
                target="_blank"
              >
                {t('about:banner.buttons.pitchDeck')}
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
                {t('about:stats.messagingMarketVolume.label')}
              </p>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">
                ${Math.round(counter).toLocaleString()} Billion
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                {t('about:stats.paymentsMarketVolume.label')}
              </p>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-2 lg:w-1/3">
              <h2 className="counterUp text-2xl font-semibold">
                <CoinMarketCap />
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                {t('about:stats.cryptoMarketCap.label')}
              </p>
            </div>
            <div className="relative mb-4 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-2 lg:w-1/3">
              <h2 className="text-2xl font-semibold">$3 Billion</h2>
              <p className="pt-2 text-sm lg:text-base">
                {t('about:stats.mobileMessagingUser.label')}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="m-auto mb-4 mt-20 items-center text-center text-2xl font-semibold lg:mt-32 lg:text-4xl">
            {t('about:problemStatementSection.title')}
          </h1>
          <div className="m-auto flex  w-full max-w-[1100px] flex-col lg:flex-row">
            <div className="relative mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-rose-500">
                {t('about:problemStatementSection.problem1.title')}
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                <Trans i18nKey="about:problemStatementSection.problem1.body"
                  components={{ highlight: <span className="text-rose-500" /> }}
                >
                  Web3 platforms claim to be user-friendly, but are{" "}
                  <span className="text-rose-500">
                    overwhelmingly complicated
                  </span>{" "}
                  for traditional Web2 users.
                </Trans>
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
                {t('about:problemStatementSection.solution1.title')}
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                <Trans i18nKey="about:problemStatementSection.solution1.body" components={{ highlight: <span className="text-sky-500" /> }}>
                  Facil Pay reimagines the Web3 experience with
                  <span className="text-sky-500">simplicity</span>at its core,
                  making it as user-friendly as prominent Web2 platforms.
                </Trans>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="m-auto flex  w-full max-w-[1100px] flex-col lg:flex-row">
            <div className="relative m-0 mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-rose-500">
                {t('about:problemStatementSection.problem2.title')}
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                <Trans i18nKey="about:problemStatementSection.problem2.body" components={{ highlight: <span className="text-rose-500" /> }}>
                  The advanced complexity presents a barrier to widespread
                  adoption, especially among{" "}
                  <span className="text-rose-500">
                    users who may not be tech savvy.
                  </span>
                </Trans>
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
                {t('about:problemStatementSection.solution2.title')}
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                <Trans i18nKey="about:problemStatementSection.solution2.body" components={{ highlight: <span className="text-sky-500" /> }}>
                  Designed with clarity and ease of use, our solution is so{" "}
                  <span className="text-sky-500">straight forward </span>that even
                  our grandparents can navigate blockchain technology
                  effortlessly.
                </Trans>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="m-auto flex w-full max-w-[1100px] flex-col lg:flex-row">
            <div className="relative m-0 mb-2 w-full rounded-3xl bg-gray-100 pb-8 pl-6 pr-6 pt-8 lg:m-6 lg:w-1/2">
              <h2 className="text-base font-semibold text-rose-500">
                {t('about:problemStatementSection.problem3.title')}
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                <Trans i18nKey="about:problemStatementSection.problem3.body" components={{ highlight: <span className="text-rose-500" /> }}>
                  A substantial portion of the population remains{" "}
                  <span className="text-rose-500">
                    excluded from modern financial services,
                  </span>{" "}
                  highlighting the urgent need for inclusive financial technology
                  solutions.
                </Trans>
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
                {t('about:problemStatementSection.solution3.title')}
              </h2>
              <p className="pt-2 text-sm lg:text-base">
                <Trans i18nKey="about:problemStatementSection.solution3.body" components={{ highlight: <span className="text-sky-500" /> }}>
                  Our financial services do not require traditional banking
                  infrastructure, extending financial inclusion to the{" "}
                  <span className="text-sky-500">unbanked population.</span>
                </Trans>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="m-auto max-w-[750px] items-center pt-20 text-center text-2xl font-semibold lg:pt-24 lg:text-4xl">
            <Trans i18nKey="about:missionSection.bannerTitle" components={{ highlight: <span className="HomeTitle" /> }}>
              Experience Global Freedom: Pay and Get Paid with{" "}
              <span className="HomeTitle">Facil,</span> Anywhere in the World
            </Trans>
          </h1>
          <div className="componentWrapper flex flex-col lg:flex-row ">
            <div className="textFade w-full pl-0 lg:w-1/2 lg:pl-20 ">
              <h2 className="pb-4 pt-0 text-2xl font-semibold lg:pt-20 lg:text-4xl">
                {t('about:missionSection.title')}
              </h2>
              <Trans i18nKey="about:missionSection.body" components={{ highlight: <span className="HomeTitle" /> }}>
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
              </Trans>
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
              {t('about:roadmapSection.title')}
            </h1>
          </div>
          <AccordionRoadMap items={items.map(
            (item, index) => {
              return {
                title: t(`about:roadmapSection.roadmap${index + 1}.title`),
                content: formatRoadmapItems(t(`about:roadmapSection.roadmap${index + 1}.items`))
              }
            })} />
        </section>

        <section className="relative flex items-center justify-center pt-40">
          <GetApp />
        </section>

        <section className="m-auto max-w-[1080px]  pt-40">
          <Footer />
        </section>
      </main>
    </>
  );
}
