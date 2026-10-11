"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ArrowRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "pt-2.5 sm:pt-3 px-3 sm:px-6 lg:px-8 xl:px-10"
          : "pt-0 px-0"
      }`}
    >
      <div
        className={`transition-all duration-300 flex items-center justify-between mx-auto ${
          isScrolled
            ? "max-w-[1360px] h-[68px] sm:h-[72px] lg:h-[76px] px-4 sm:px-6 lg:px-8 bg-white/75 backdrop-blur-[14px] border border-white/60 rounded-[18px] shadow-[0_4px_24px_-6px_rgba(16,45,79,0.10)]"
            : "w-full h-[88px] px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm rounded-none"
        }`}
      >
        <div className="w-full max-w-[1360px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm py-1"
            aria-label="WeManage Consultancy Services - Home"
          >
            <Image
              src="/images/background-remove-logo.png"
              alt="WeManage Consultancy Services - Professional Consultants"
              width={316}
              height={170}
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? "h-[48px] sm:h-[54px] lg:h-[60px]"
                  : "h-[58px] sm:h-[66px] lg:h-[72px]"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <DesktopNavigation />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex flex-shrink-0 items-center">
            <PrimaryButton 
              href="/contact" 
              variant="cyan"
              className={`rounded-full gap-2 font-semibold shadow-xs transition-all duration-300 ${
                isScrolled
                  ? "px-5 py-2 text-[13px]"
                  : "px-6 py-2.5 text-sm"
              }`}
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </div>

          {/* Mobile Navigation Toggle & Menu */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

