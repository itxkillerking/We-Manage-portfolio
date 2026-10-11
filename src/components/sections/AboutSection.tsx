import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section
      className="w-full bg-[#0C2F54] text-white py-12 lg:py-16 border-b border-[#08A9DD]/20"
      aria-label="About WeManage Consultancy Services"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT: Professional Workspace Photography */}
          <div className="lg:col-span-4">
            <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/images/about-workspace.jpg"
                alt="WeManage professional consulting workspace and documentation desk"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* CENTER: Company Profile & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] mb-2">
              ABOUT WEMANAGE
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              WeManage Consultancy Services
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              We are a professional consultancy offering practical and customized solutions across
              business management, accounting, finance, taxation, ERP, data management, documentation,
              business communication and administrative support.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Our goal is to help businesses, entrepreneurs and professionals improve operational efficiency,
              control costs and achieve sustainable growth.
            </p>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--wemanage-cyan)] bg-transparent hover:bg-[var(--wemanage-cyan)] px-6 py-2.5 text-sm font-semibold text-white transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] group"
              >
                <span className="text-white font-semibold">Know More</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Brand Statement & Official Logo (Centered & High-Contrast White) */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-6 lg:pl-6 lg:border-l border-white/15">
            {/* Quote with Gold Accent Bar */}
            <div className="border-l-2 border-[var(--wemanage-gold)] pl-4 text-left">
              <p className="text-sm sm:text-base italic text-slate-100 font-medium leading-snug">
                &ldquo;We don&apos;t just provide services. We build practical solutions for better business management.&rdquo;
              </p>
            </div>

            {/* Official WeManage Logo (White style for dark background, centered and visible) */}
            <div className="flex justify-center items-center w-full pt-1">
              <Image
                src="/images/wemanage-logo-white.png"
                alt="WeManage Consultancy Services"
                width={316}
                height={170}
                className="w-auto h-[64px] sm:h-[72px] lg:h-[80px] object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
