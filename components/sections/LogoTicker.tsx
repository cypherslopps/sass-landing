"use client";

import Image from "next/image";
import { motion } from "motion/react";

import acmeLogo from "@/assets/images/logo-acme.png";
import quantumLogo from "@/assets/images/logo-quantum.png";
import echoLogo from "@/assets/images/logo-echo.png";
import celestialLogo from "@/assets/images/logo-celestial.png";
import pulseLogo from "@/assets/images/logo-pulse.png";
import apexLogo from "@/assets/images/logo-apex.png";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex items-center gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%"
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            <Image 
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos */}
            <Image 
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />

            <Image 
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

LogoTicker.displayName = "Hero";
export default LogoTicker;