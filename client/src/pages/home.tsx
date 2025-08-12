import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import BrandStorySection from "@/components/brand-story-section";
import TestimonialsSection from "@/components/testimonials-section";
import WhatTheFunSection from "@/components/what-the-fun-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="bg-jotah-deep text-jotah-dark font-inter">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <BrandStorySection />
      <TestimonialsSection />
      <WhatTheFunSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
