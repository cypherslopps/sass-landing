import productImage from "@/public/images/product-image.png";
import pyramidImage from "@/public/images/pyramid.png";
import tubeImage from "@/public/images/tube.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
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
          
          <Image 
            src={pyramidImage}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
          />

          <Image 
            src={tubeImage}
            alt="Tube Image"
            height={248}
            className="hidden md:block absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;