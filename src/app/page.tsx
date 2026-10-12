import React from "react";
import { Hero } from "@/components/sections/Hero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyWeManageSection } from "@/components/sections/WhyWeManageSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactStrip } from "@/components/sections/ContactStrip";

export default function HomePage() {
  return (
    <>
      {/* Route-specific LCP Hero Preload */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-home-desktop.webp"
        type="image/webp"
        media="(min-width: 1024px)"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero-home-mobile.webp"
        type="image/webp"
        media="(max-width: 1023px)"
      />

      {/* 1. Hero with hero-updated-pic.png + Compact 10-Service Preview */}
      <Hero />

      {/* 2. Industries We Serve */}
      <IndustriesSection />

      {/* 3. Why WeManage */}
      <WhyWeManageSection />

      {/* 4. About WeManage */}
      <AboutSection />

      {/* 5. Bottom Contact / Consultation Strip */}
      <ContactStrip />
    </>
  );
}
