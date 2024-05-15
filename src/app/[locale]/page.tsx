"use client";

import Link from "next/link";
import { Urbanist } from "@next/font/google";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import Lottie, { Action } from "lottie-react";
import animatePhone from "./components/animatephone.json";
import animatePhone2 from "./components/animatephone2.json";
import Accordion from "./components/Accordian";
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
import MainNavigation from "./components/Navigation";
import { Trans, useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

const currentYear = new Date().getFullYear();

const items = [
  {
    title: 'In simpler terms, what is FacilPay and how does FacilPay work?',
    content: "In simple terms, FacilPay is a platform that allows you to transfer money across the world from one form to another in a process that's as easy as sending a chat on your phone. You create an account, log in, click on the individual you want to pay, type your payment instructions, and FacilPay does the rest. Sending $100 from your bedroom in Mexico City to your Uncle Timothy in Hong Kong can be as simple as typing the following message on the app “Send $100 worth of Ethereum to Uncle Timothy”. The platform does the rest of the work and quickly presents you with the best option with which to accomplish your intention. There's also some cutting-edge AI features that will help you carry out this task. Oh. Before, during or after payment, you can use the FacilPay app to communicate and exchange files with friends and family.",
  },
  {
    title: 'What ideologies, technologies and architectures is FacilPay based on?',
    content: '“Message-centric”, “user-intent”, “blockchain-powered”, and “AI-enhanced.” These above are some of the best technologies and concepts we assembled to make payments easy for you.',
  },
  {
    title: 'Could you explain these ideologies and how they improve my experience as a user?',
    content: "Message-centric: First, it means that the process of sending money on FacilPay is as simple and as familiar as sending a message on a messaging app like WhatsApp or WeChat. Second, it means that you can low-key chat and share files with friends, customers and family too.\nUser-intent: This means you can simply chat with our machines, giving it an instruction of what you want to do. It will then provide you the best option for doing that. With this concept, your intentions and desires are priority.\nAI-enhanced: Whether trying to make payments or message someone, you can enjoy AI support, prompts, autosuggestions and more when using FacilPay. So, you'll never get stuck.\nBlockchain-powered: Now, while this platform is made to look like a familiar social media app on the surface, deep underneath, FacilPay is built on powerful blockchain technology. These infrastructures, such as the AVAX network we use,  ensure premium speed, affordability, reliability, efficiency and affordability.",
  },
  {
    title: 'On what devices can I use FacilPay?',
    content: 'FacilPay is available on mobile and web. Click here to download for Android and here for iOS. You can also use the webapp here.',
  },
];

const style = {

};

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

export default function Home() {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  const { t } = useTranslation('home');

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
        <div className="PageWrapper hero mt-3 flex h-[600px] w-full flex-col items-center justify-center md:mt-3 lg:mt-3 lg:h-[600px] lg:flex-row">
          <div className=" pl-2 pr-2 pt-10 text-left text-2xl font-semibold text-white md:pt-0 md:text-4xl lg:w-1/2 lg:pt-0 lg:pt-0  lg:text-4xl xl:text-5xl">
            <p className="pb-2 pl-4 md:pb-6 lg:pb-6 lg:pl-12">
              <Trans i18nKey="home:banner.title">
                <p>
                  A Revolutionary Messaging
                </p>
                <p>
                  and Payment Platform
                </p>
              </Trans>
            </p>
            <p className="pl-4 text-base font-normal lg:pl-12 lg:text-xl">
              {t('home:banner.subtitle')}
            </p>
            <div className="mt-6 lg:ml-12 inline-flex items-center gap-2">
            <Link
              className="rounded-full border border-solid text-base p-4 lg:w-auto lg:inline-block lg:text-lg"
              href="#"
            >
              {t('navigation.tryDemo')}
            </Link>
            <LanguageSwitcher className="rounded-full border border-solid p-1.5 text-base lg:w-auto lg:inline-block lg:text-lg" />
            </div>
            
          </div>
          <div className="pt-10 flex w-full items-center justify-center overflow-hidden lg:pt-16 lg:w-1/2">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img
                className="ml-4 mt-4 h-[auto] w-[202px] md:hidden lg:block lg:h-[533px] lg:w-[312px]"
                src="/leftphone.png"
                alt="Description"
              />
            </div>
            <div className="ml-[-80px] mt-20 lg:mt-28">
              <div ref={rightImageRef} style={{ opacity: 0 }}>
                <img
                  className="h-[auto] w-[202px] md:hidden lg:block  lg:h-[425px] lg:w-[312px]"
                  src="/rightphone.png"
                  alt="Description"
                />
              </div>
            </div>
          </div>
        </div>
        <div>{/* Additional content can go here */}</div>
        <div className="componentWrapper flex flex-col pt-0 lg:flex-row lg:pt-10">
          <div className="w-1/4 pt-10">
            <Image
              className="logoAnimation m-auto ml-6 pt-0 lg:ml-10 lg:pt-10 "
              src="/logoblue.png"
              alt="Logo"
              width={160}
              height={97}
            />
          </div>
          <div className="w-full p-4 lg:w-3/4 lg:p-10">
            <h2 className="HomeTitle pb-4 text-3xl font-bold lg:text-6xl">
              {t('home:introduction.title')}
            </h2>
            <span className="text-base font-normal lg:text-xl">
              {t('home:introduction.body')}
            </span>
          </div>
        </div>

        <div className="componentWrapper flex flex-col pt-0 lg:flex-row lg:pt-16">
          <div className="textFade w-full pb-4 lg:w-1/2 lg:pb-0">
            <div className="lottieWrap h-auto w-[100%] ">
              <Lottie
                animationData={animatePhone}
                style={style}
                interactivity={interactivity}
              />
            </div>
          </div>
          <div className="textFadeRight w-full p-0 lg:w-1/2">
            <h2 className="pb-10 pt-0 text-3xl font-semibold lg:text-4xl">
              <Trans i18nKey="home:featureSection1.title">
                {" "}
                Your unified facil messaging<br />to the future of payments
              </Trans>
            </h2>
            <span className="text-xl font-medium ">
              {t('home:featureSection1.subtitle')}
            </span>
            <p className="mt-4 p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection1.features.securedMobileWallets')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection1.features.multiChainNetwork')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection1.features.p2pPayments')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection1.features.flexibleCryptoTrans')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection1.features.cryptoDebitPrepaid')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection1.features.facilSwapBridge')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection1.features.web3DefiSol')}
            </p>
            <p className="ml-4 mt-2 w-28 rounded-full border pb-3 pl-5 pt-3 text-sm">
              {t('learnMore')}
            </p>
          </div>
        </div>

        <div className="componentWrapper flex flex-col pt-16 lg:flex-row">
          <div className="textFadeRight w-full p-0 lg:hidden lg:w-1/2">
            <div className="lottieWrap h-auto w-[100%]">
              <Lottie
                animationData={animatePhone2}
                style={style}
                interactivity={interactivity}
              />
            </div>
          </div>

          <div className="textFade w-full pl-0 lg:w-1/2 lg:pl-20 ">
            <h2 className="pb-4 pt-6 text-3xl font-semibold lg:pt-12 lg:text-4xl">
              {" "}
              {t('home:featureSection2.title')}
            </h2>
            <span className="text-xl font-medium">
              {t('home:featureSection2.subtitle')}
            </span>
            <p className="mt-4 p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection2.features.blockChainBanking')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection2.features.fiatRetailServices')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection2.features.moneyTransferApi')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection2.features.costEffectiveFastNetwork')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection2.features.globalCompliance')}
            </p>
            <p className="ml-4 mt-2 w-28 rounded-full border pb-3 pl-5 pt-3 text-sm">
              {t('learnMore')}
            </p>
          </div>
          <div className="textFadeRight hidden w-full overflow-hidden p-10 lg:block lg:w-1/2">
            <div className="lottieWrap">
              <Lottie
                animationData={animatePhone2}
                style={style}
                interactivity={interactivity}
              />
            </div>
          </div>
        </div>

        <div className="componentWrapper lg;pt-16 flex flex-col pt-0 lg:flex-row">
          <div className="textFadeRight w-full p-0 lg:hidden lg:w-1/2">
            <Image
              className="logoAnimation m-auto pt-10 "
              src="/bodyphone.webp"
              alt="phone"
              width={556}
              height={568}
            />
          </div>

          <div className="textFade w-full pl-0 lg:w-1/2 lg:pl-20">
            <h2 className="pb-4 pt-8 text-3xl font-semibold lg:pt-24 lg:text-4xl">
              {" "}
              {t('home:featureSection3.title')}
            </h2>
            <span className="text-xl font-medium">
              {t('home:featureSection3.subtitle')}
            </span>
            <p className="mt-4 p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection3.features.securedP2PMessaging')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection3.features.aiMessageVoiceTranslation')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection3.features.nftEmoticonsStickers')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection3.features.groupChatCall')}
            </p>
            <p className="p-2 lg:p-4">
              <Image
                className="mb-1 mr-2 inline"
                src="/checkmark.webp"
                alt="phone"
                width={18}
                height={18}
              />
              {t('home:featureSection3.features.fileTransferCallsHDVideo')}
            </p>
            <p className="ml-4 mt-2 w-28 rounded-full border pb-3 pl-5 pt-3 text-sm">
              {t('learnMore')}
            </p>
          </div>
          <div className="textFadeRight w-full p-10 lg:w-1/2">
            <Image
              className="logoAnimation m-auto hidden pt-10 lg:block "
              src="/bodyphone.webp"
              alt="phone"
              width={556}
              height={568}
            />
          </div>
        </div>

        <div className="slider mx-auto mt-20 w-auto overflow-hidden p-0 lg:hidden">
          <h1 className="font-inherit relative mb-8 inline-block text-center text-2xl  font-semibold md:text-2xl lg:hidden lg:text-4xl">
            <Trans i18nKey="home:offerings.title">
              Message-centric Payment Platform Governed by User-intent Web3 Technology
            </Trans>
          </h1>
          <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
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
        </div>

        <div className="mx-auto mt-20 hidden lg:block">
          <section className=" text-22xl font-label-md mq825:gap-[23px] box-border flex min-h-[803px] flex-col items-center justify-start gap-[47px] px-5 py-0 text-left">
            <h1 className="font-inherit mq825:leading-[58px] relative m-0 inline-block hidden text-xl font-semibold leading-[73px] md:text-2xl lg:flex  lg:text-4xl text-center">
              <Trans i18nKey="home:offerings.title">
                Message-centric Payment Platform<br />Governed by User-intent Web3 Technology
              </Trans>
            </h1>
            <div className="mq825:gap-[16px] flex hidden min-h-[483px] flex-row flex-wrap items-start justify-center gap-[33px] self-stretch lg:flex">
              <img
                className="relative h-[220px] w-[241px]"
                loading="eager"
                alt=""
                src="/card1.svg"
              />
              <img
                className="relative h-[220px] w-[241px]"
                loading="eager"
                alt=""
                src="/card2.svg"
              />
              <div className="flex w-[241px] flex-row items-center justify-center">
                <div className="relative hidden w-[241px] self-stretch" />
                <img
                  className="ç relative z-[1] h-[220px] flex-1 overflow-hidden"
                  alt=""
                  src="/card3.svg"
                />
              </div>
              <img
                className="relative h-[220px] w-[241px]"
                alt=""
                src="/card4.svg"
              />
              <img
                className="relative h-[220px] w-[241px]"
                loading="eager"
                alt=""
                src="/card5.svg"
              />
              <img
                className="relative h-[220px] w-[241px]"
                loading="eager"
                alt=""
                src="/card6.svg"
              />
              <img
                className="relative h-[220px] w-[241px]"
                alt=""
                src="/card7.svg"
              />
              <img
                className="relative h-[220px] w-[241px]"
                alt=""
                src="/card8.svg"
              />
              <img
                className="relative h-[220px] w-[241px]"
                loading="eager"
                alt=""
                src="/card9.svg"
              />
              <img
                className="relative h-[220px] w-[241px]"
                alt=""
                src="/card10.svg"
              />
            </div>
          </section>
        </div>

        <section className="wrapperCom mx-auto flex flex-col items-center mt-20 lg:mt-8">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            {t('home:appScreenshots.title')}
          </h1>
          <p className="pb-4 text-center lg:pb-10">
            {t('home:appScreenshots.subtitle')}
          </p>
          <div className="p-0">
            <img
              className="m-auto "
              alt=""
              src="/phonegroup1.webp"
              width="100%"
            />
          </div>
        </section>

        <div className="componentWrapper flex flex-col pt-6 lg:flex-row lg:pt-0">
          <div className="textFade w-full lg:w-1/2 ">
            <div className="pl-0 lg:pl-10">
              <img
                className="m-auto "
                alt=""
                src="/miccardwebp.webp"
                width="70%"
              />
            </div>
          </div>
          <div className="textFadeRight w-full p-0 lg:w-1/2">
            <img className="pb-4 pt-10" alt="" src="/appicon.svg" width="10%" />
            <span className="text-xl font-medium ">
              {t('home:appScreenshots.featureDescription')}
            </span>
          </div>
        </div>

        <section className="mb-30 m-auto max-w-[780px] pt-32">
          <div className="text-center">
            <h1 className="mb-0 text-3xl font-semibold lg:text-4xl">
              {t('home:faqs.title')}
            </h1>
            <p className="mb-14">
              {t('home:faqs.subtitle')}
            </p>
          </div>
          <Accordion items={items.map(
            (item, index) => {
              return {
                title: t(`home:faqs.faq${index + 1}.question`),
                content: t(`home:faqs.faq${index + 1}.answer`),
              }
            }
          )} />
        </section>

        <section className="relative flex items-center justify-center mt-20">
          <div className="AppContainer font-inter relative flex h-[480px] w-[1408px] flex-col justify-between overflow-hidden text-center text-white lg:h-[980px]">
            <div>
              <h1 className="pt-16 text-2xl font-semibold lg:pt-40 lg:text-6xl">
                {t('getApp.title')}
              </h1>
              <p className="p-2 text-base">
                {t('getApp.subtitle')}
              </p>
            </div>
            <div className="appbuttons inline-block flex items-center justify-center pt-20 lg:pt-20">
              <button className="m-2 rounded-full bg-white p-3 font-medium text-black">
                <FontAwesomeIcon icon={faApple} className="mr-2" />
                {t('getApp.downloadNow')}
              </button>
              <button className="m-2 rounded-full bg-white p-3 font-medium text-black">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                {t('getApp.comingSoon')}
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

        <section className="m-auto max-w-[1080px]  mt-40">
          <Footer />
        </section>
      </main>
    </>
  );
}
