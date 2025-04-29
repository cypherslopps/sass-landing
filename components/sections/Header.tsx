import Image from "next/image";

import ArrowRight from "@/public/icons/arrow-right.svg";
import Logo from "@/public/images/logosaas.png";
import MenuIcon from "@/public/icons/menu.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image 
              src={Logo}
              alt="Sass Logo"
              width={40}
              height={40}
            />
            <MenuIcon className="size-5 md:hidden" />

            {/* Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#">About</Link>
              <Link href="#">Features</Link>
              <Link href="#">Customer</Link>
              <Link href="#">Updates</Link>
              <Link href="#">Help</Link>
              <Link href="#">About</Link>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;