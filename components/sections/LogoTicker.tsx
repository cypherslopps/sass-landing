import Image from "next/image";

import acmeLogo from "@/public/images/logo-acme.png";
import quantumLogo from "@/public/images/logo-quantum.png";
import echoLogo from "@/public/images/logo-echo.png";
import celestialLogo from "@/public/images/logo-celestial.png";
import pulseLogo from "@/public/images/logo-pulse.png";
import apexLogo from "@/public/images/logo-apex.png";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex items-center gap-14 flex-none">
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
          </div>
        </div>
      </div>
    </div>
  );
};
