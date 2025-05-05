import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logosaas.png";
import SocialX from "@/assets/icons/social-x.svg";
import SocialInsta from "@/assets/icons/social-insta.svg";
import SocialLinkedIn from "@/assets/icons/social-linkedin.svg";
import SocialPin from "@/assets/icons/social-pin.svg";
import SocialYoutube from "@/assets/icons/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative z-0 before:content-[''] before:top-2 before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:absolute before:-z-10">
          <Image 
            src={logo}
            alt="Sass Logo"
            height={40}
          />
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <Link href="#">
            About
          </Link>

          <Link href="#">
            Features
          </Link>

          <Link href="#">
            Customers
          </Link>

          <Link href="#">
            Pricing
          </Link>

          <Link href="#">
            Help
          </Link>

          <Link href="#">
            Careers
          </Link>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>

        <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
export default Footer;