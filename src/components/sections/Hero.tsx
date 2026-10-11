import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  ArrowRight,
  Users,
  Calculator,
  ReceiptText,
  PanelsTopLeft,
  Table2,
  DatabaseZap,
  BarChart3,
  FileText,
  PenLine,
  Headset,
} from "lucide-react";

const previewServices = [
  {
    id: "business-consultancy",
    title: "Business & Management Consultancy",
    icon: Users,
    href: "/services/business-consultancy",
  },
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    icon: Calculator,
    href: "/services/accounting-bookkeeping",
  },
  {
    id: "tax-management",
    title: "Tax & Compliance Support",
    icon: ReceiptText,
    href: "/services/tax-management",
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions & Implementation Support",
    icon: PanelsTopLeft,
    href: "/services/erp-solutions",
  },
  {
    id: "excel-google-sheets",
    title: "Advanced Excel & Google Sheets Solutions",
    icon: Table2,
    href: "/services/excel-google-sheets",
  },
  {
    id: "data-management",
    title: "Data Management & Analysis",
    icon: DatabaseZap,
    href: "/services/data-management",
  },
  {
    id: "financial-reporting",
    title: "Financial & Management Reporting",
    icon: BarChart3,
    href: "/services/financial-reporting",
  },
  {
    id: "business-documentation",
    title: "Business Documentation & Process Development",
    icon: FileText,
    href: "/services/business-documentation",
  },
  {
    id: "content-copywriting",
    title: "Content Writing & Copywriting",
    icon: PenLine,
    href: "/services/content-copywriting",
  },
  {
    id: "virtual-business-support",
    title: "Virtual Business & Administrative Support",
    icon: Headset,
    href: "/services/virtual-business-support",
  },
];

export function Hero() {
  return (
    <>
      {/* ============================================================ */}
      {/* HERO SECTION: Integrated composition with hero-updated-pic.png */}
      {/* ============================================================ */}
      <section
        className="relative bg-white overflow-hidden lg:rounded-bl-[28px] lg:rounded-br-[28px] isolate"
        aria-label="WeManage Homepage Hero"
      >
        {/* DESKTOP LAYOUT (lg+): Single integrated canvas using hero-updated-pic.png */}
        <div className="hidden lg:block relative min-h-[500px] xl:min-h-[533px] w-full overflow-hidden rounded-bl-[28px] rounded-br-[28px]">
          {/* Integrated Background Visual */}
          <Image
            src="/images/hero-updated-pic.png"
            alt="WeManage Consultancy Services - Your Business. Our Expertise."
            fill
            priority
            className="object-fill pointer-events-none"
            sizes="(min-width: 1024px) 100vw, 1px"
          />

          {/* Left Text Overlay sitting in the clean space */}
          <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[500px] xl:min-h-[533px] flex items-center z-10">
            <div className="max-w-[560px] xl:max-w-[620px] py-12">
              
              {/* Eyebrow */}
              <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] mb-3">
                WELCOME TO WEMANAGE CONSULTANCY SERVICES
              </p>

              {/* Main Headline */}
              <h1 className="text-4xl xl:text-[50px] font-bold text-[var(--wemanage-navy)] tracking-tight leading-[1.14]">
                Practical Solutions.<br />
                Better Management.<br />
                <span className="text-[var(--wemanage-cyan)]">Stronger Business.</span>
              </h1>

              {/* Concise Business Paragraph */}
              <p className="mt-4 text-base xl:text-lg text-slate-600 leading-relaxed font-normal max-w-lg">
                We provide practical business, accounting, tax, ERP, data management and
                content solutions for companies, entrepreneurs and professionals.
              </p>

              {/* Dual Restrained Action Buttons */}
              <div className="mt-7 flex items-center gap-3.5">
                <PrimaryButton
                  href="/contact"
                  variant="cyan"
                  className="rounded-full gap-2 px-7 py-3 text-sm xl:text-base font-semibold shadow-xs"
                >
                  <span>Get a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </PrimaryButton>

                <PrimaryButton
                  href="/services"
                  variant="outline-cyan"
                  className="rounded-full gap-2 px-7 py-3 text-sm xl:text-base font-semibold"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </PrimaryButton>
              </div>

            </div>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< lg): Single Integrated Hero Composition */}
        <div className="lg:hidden w-full bg-[#EEF4F8]">
          <div className="relative w-full min-h-[520px] sm:min-h-[560px] flex items-center overflow-hidden rounded-b-[22px] isolate [transform:translateZ(0)]">
            {/* 1. Full Visual Background */}
            <Image
              src="/images/hero-updated-pic.png"
              alt="WeManage Consultancy Services - Workspace and skyline visual"
              fill
              priority
              className="object-cover object-[72%_center] sm:object-[68%_center] pointer-events-none"
              sizes="(max-width: 1023px) 100vw, 1px"
            />

            {/* 2. Professional Light Readability Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_50%,rgba(255,255,255,0.45)_75%,rgba(255,255,255,0.10)_100%)]"
              aria-hidden="true"
            />

            {/* 3. Hero HTML Content sitting directly in the open space */}
            <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
              <div className="max-w-[480px]">
                {/* Eyebrow */}
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] mb-2.5">
                  WELCOME TO WEMANAGE CONSULTANCY SERVICES
                </p>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl font-bold text-[var(--wemanage-navy)] tracking-tight leading-tight">
                  Practical Solutions.<br />
                  Better Management.<br />
                  <span className="text-[var(--wemanage-cyan)]">Stronger Business.</span>
                </h1>

                {/* Concise Business Paragraph */}
                <p className="mt-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-md">
                  We provide practical business, accounting, tax, ERP, data management and
                  content solutions for companies, entrepreneurs and professionals.
                </p>

                {/* Dual Restrained Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <PrimaryButton
                    href="/contact"
                    variant="cyan"
                    className="rounded-full gap-2 px-6 py-3 text-sm font-semibold shadow-xs text-center justify-center"
                  >
                    <span>Get a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </PrimaryButton>

                  <PrimaryButton
                    href="/services"
                    variant="outline-cyan"
                    className="rounded-full gap-2 px-6 py-3 text-sm font-semibold text-center justify-center bg-white/80 hover:bg-white"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>

          {/* Clean small gap before Our Services */}
          <div className="h-3 sm:h-3.5 w-full bg-[#EEF4F8]" aria-hidden="true" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES PREVIEW: Compact 10-Service Corporate Row           */}
      {/* ============================================================ */}
      <section
        className="w-full bg-white border-b border-slate-200/80 py-8 sm:py-10"
        aria-label="Our Services Preview"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)] mb-1.5">
              OUR SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
              Comprehensive Business Solutions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              From financial management to digital solutions, we help you work smarter and grow faster.
            </p>
          </div>

          {/* 10 Services Compact Icon Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3">
            {previewServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center text-center p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200/90 hover:border-[var(--wemanage-cyan)] hover:shadow-xs transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)]"
                >
                  <div className="w-11 h-11 rounded-lg bg-[var(--wemanage-light)] border border-slate-200/60 flex items-center justify-center mb-2.5 group-hover:bg-[var(--wemanage-cyan)]/10 group-hover:border-[var(--wemanage-cyan)]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors leading-snug line-clamp-3">
                    {service.title}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
