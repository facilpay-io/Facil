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

import MainNavigation from "../components/Navigation";

// import TermlyEmbed from "../components/TermlyEmbed"; // Importing the TermlyEmbed component

const currentYear = new Date().getFullYear();



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

  const termlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (termlyRef.current) {
      termlyRef.current.setAttribute('name', 'termly-embed');
      termlyRef.current.setAttribute('data-id', '828c3ae9-b4d9-496e-81b1-87590dc1459f');
      termlyRef.current.setAttribute('data-type', 'iframe');

      const script = document.createElement('script');
      script.src = 'https://app.termly.io/embed-policy.min.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      <div className="stickyWrapper">
        <MainNavigation />
      </div>
      <main className={`${urbanistone.className} flex flex-col items-center justify-center min-h-screen`}>


        <div className="termsbox m-auto items-center justify-center">



          <div ref={termlyRef} className="w-full lg:w-[1080px] md:w-[600px] mt-10"></div>
        </div>
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
                  <a href="tel:2898046855">289.804.6855</a>
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
                <p>
                  <a href="https://www.facilpay.io/terms">
                    Terms and Conditions
                  </a>
                </p>
                <p className="pt-2">
                  <a href="https://www.facilpay.io/privacy"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p className="pt-2">
                  <a href="https://www.facilpay.io/cookies"
                  >
                    Cookie Policy
                  </a></p>
                <p className="pt-2">
                  <a href="https://www.facilpay.io/disclaimer">
                    Disclaimer
                  </a></p>
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
