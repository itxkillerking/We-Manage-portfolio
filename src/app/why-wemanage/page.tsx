import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Compass,
  Sliders,
  Layers,
  Laptop,
  ClipboardCheck,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Why WeManage | WeManage Consultancy Services",
  description:
    "Discover why businesses choose WeManage: Practical Approach, Customized Solutions, Integrated Expertise, Technology-Enabled, Clear & Organized, and Flexible Support.",
};

const pillars = [
  {
    number: "01",
    title: "Practical Approach",
    concept: "Solutions rooted in day-to-day business reality.",
    description:
      "We focus on real operational challenges and practical business efficiency rather than theoretical models. Every solution, report and workflow we design is built to function reliably in your day-to-day business environment.",
    icon: Compass,
    highlights: [
      "Real-world operational feasibility",
      "Immediate administrative clarity",
      "Actionable management insights",
    ],
  },
  {
    number: "02",
    title: "Customized Solutions",
    concept: "Tailored specifically to your business, industry & scale.",
    description:
      "No two businesses operate identically. We adapt our accounting, ERP setup, reporting formats and documentation to match your exact industry requirements, team structure and operational volume.",
    icon: Sliders,
    highlights: [
      "Industry-specific workflows",
      "Bespoke spreadsheet models",
      "Customized documentation formats",
    ],
  },
  {
    number: "03",
    title: "Integrated Expertise",
    concept: "Unified support across finance, technology & operations.",
    description:
      "Instead of dealing with separate vendors for bookkeeping, software setup, tax preparation, spreadsheets and documentation, WeManage delivers cross-functional capabilities through one integrated consultancy service.",
    icon: Layers,
    highlights: [
      "Accounting & tax alignment",
      "ERP & spreadsheet integration",
      "Process documentation & management support",
    ],
  },
  {
    number: "04",
    title: "Technology-Enabled",
    concept: "Harnessing modern software for maximum efficiency.",
    description:
      "We leverage leading ERP platforms, advanced Excel calculation sheets, Google Sheets collaborative systems and digital tools to eliminate repetitive manual work and give you real-time visibility.",
    icon: Laptop,
    highlights: [
      "Odoo, QuickBooks, BUSY & Manager.io",
      "Advanced formulas & automated dashboards",
      "Structured data migrations",
    ],
  },
  {
    number: "05",
    title: "Clear & Organized",
    concept: "Structured records, transparency & operational control.",
    description:
      "Disorganized information causes costly delays and poor business decisions. We institute organized ledgers, standard operating procedures, structured records and transparent reporting that keep you in control.",
    icon: ClipboardCheck,
    highlights: [
      "Systematic record maintenance",
      "Standard Operating Procedures (SOPs)",
      "Timely, accurate management reporting",
    ],
  },
  {
    number: "06",
    title: "Flexible Support",
    concept: "Assistance delivered in the exact format you need.",
    description:
      "Whether you require a one-time assignment to clean up historical records, a defined project like an ERP implementation, or ongoing monthly remote administrative support, our services adapt to your schedule.",
    icon: Handshake,
    highlights: [
      "Single-scope assignments",
      "Project-based milestones",
      "Dedicated ongoing virtual support",
    ],
  },
];

export default function WhyWeManagePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. EDITORIAL WHY WEMANAGE HERO                                */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-[#0A2342] overflow-hidden flex flex-col justify-center border-b border-slate-200/80">
        {/* Single Responsive Background Image */}
        <Image
          src="/images/image-for-wemanage.png"
          alt="WeManage consulting team reviewing financial models and operational strategies"
          fill
          priority
          className="object-cover object-right lg:object-[82%_center]"
          sizes="100vw"
        />

        {/* Directional Navy Gradient Overlay (Strong left fade, clear image on right) */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #0A2342 0%, rgba(10,35,66,0.95) 28%, rgba(10,35,66,0.72) 46%, rgba(10,35,66,0.22) 68%, rgba(10,35,66,0.04) 86%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Mobile & Tablet Tint Overlay */}
        <div
          className="lg:hidden absolute inset-0 z-[1] bg-gradient-to-b from-[#0A2342]/95 via-[#0A2342]/88 to-[#0A2342]/78 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-[2] max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="flex items-center gap-1.5 text-xs text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              </li>
              <li className="font-semibold text-white/90" aria-current="page">
                Why WeManage
              </li>
            </ol>
          </nav>

          <div className="max-w-xl lg:max-w-[620px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-[2px] bg-[var(--wemanage-gold)] rounded-full" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)]">
                WHY CHOOSE WEMANAGE
              </p>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.14]">
              Practical Solutions for Smarter Business Management
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-white/80 leading-relaxed font-normal max-w-xl">
              We combine professional expertise, modern technology and a hands-on approach
              to help businesses, entrepreneurs and professionals organize operations, control finances and achieve sustainable growth.
            </p>
          </div>

          {/* Value Highlights — clean inline row */}
          <div className="mt-8 flex flex-wrap items-center gap-y-2.5 gap-x-4 sm:gap-x-0 text-xs sm:text-[13px] font-semibold text-white/90">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0" />
              <span>Hands-On Advisory</span>
            </div>
            <span className="hidden sm:inline text-white/25 mx-3" aria-hidden="true">│</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0" />
              <span>Integrated Expertise</span>
            </div>
            <span className="hidden sm:inline text-white/25 mx-3" aria-hidden="true">│</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0" />
              <span>Flexible Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. 6 CORE PILLARS GRID                                       */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-slate-200/80" aria-label="Our Strengths">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)] mb-1.5 block">
              OUR CORE STRENGTHS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
              Six Principles That Guide Everything We Do
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our service delivery is built on six foundational qualities that ensure practical outcomes for your business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[var(--wemanage-cyan)]/60 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center group-hover:bg-[var(--wemanage-cyan)]/10 group-hover:border-[var(--wemanage-cyan)]/30 transition-colors">
                        <Icon className="w-6 h-6 text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] tracking-tight group-hover:text-[var(--wemanage-cyan)] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-700 mt-1 mb-3">
                      {pillar.concept}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="pt-4 border-t border-slate-200/80 space-y-2">
                    {pillar.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR APPROACH                                              */}
      {/* ============================================================ */}
      <OurApproachSection />

      {/* ============================================================ */}
      {/* 4. CONSULTATION CTA                                          */}
      {/* ============================================================ */}
      <ServiceCtaSection
        title="Have a Business Requirement?"
        description="Let's find a practical solution for your business."
      />
    </>
  );
}
