import Image from "next/image";

import ArrowRightIcon from "@/public/icons/arrow-right.svg";
import cogImage from "@/public/images/cog.png";
import cylinderImage from "@/public/images/cylinder.png";
import noodleImage from "@/public/images/noodle.png";

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <span className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text my-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your success.
            </p>

            <div className="flex items-center gap-1 mt-9">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRightIcon className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image 
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />

            <Image 
              src={cylinderImage}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block md:absolute -top-8 -left-32"
            />

            <Image 
              src={noodleImage}
              alt="Noodle Image"
              width={220}
              className="hidden md:block md:absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;