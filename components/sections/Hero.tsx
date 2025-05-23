"use client";

import { useRef } from "react";
import { 
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import cogImage from "@/assets/images/cog.png";
import cylinderImage from "@/assets/images/cylinder.png";
import noodleImage from "@/assets/images/noodle.png";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);

  return (
    <section 
      ref={heroRef}  
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <span className="tag">Version 2.0 is here</span>
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
            <motion.img 
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut"
              }}
            />

            <motion.img 
              src={cylinderImage.src}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block md:absolute -top-8 -left-32"
              style={{ translateY }}
            />

            <motion.img 
              src={noodleImage.src}
              alt="Noodle Image"
              width={220}
              className="hidden md:block md:absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 15,
                translateY: translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = "Hero";