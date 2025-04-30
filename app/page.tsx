import Hero from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { Pricing } from "@/components/sections/Pricing";
import { CallToAction } from "@/components/sections/CallToAction";
import ProductShowcase from "@/components/sections/ProductShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
