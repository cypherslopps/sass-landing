"use client";

import { 
  motion,
  useScroll,
  useTransform 
} from "motion/react";

import productImage from "@/public/images/product-image.png";
import pyramidImage from "@/public/images/pyramid.png";
import tubeImage from "@/public/images/tube.png";
import Image from "next/image";
import { useRef } from "react";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);

  return (
    <section 
      ref={sectionRef}  
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <span className="tag">Boost your productivity</span>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-description">
            Effortlessly turn your ideas into a fully functional, responsive, Sass website in just minutes with this template.
          </p>
        </div>
        
        <div className="relative">
          <Image 
            src={productImage}
            alt="Product Image"
            className="mt-10"
          />
          
          <motion.img 
            src={pyramidImage.src}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />

          <motion.img 
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;