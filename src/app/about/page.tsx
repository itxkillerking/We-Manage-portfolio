import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "About Us | WeManage Consultancy Services",
  description:
    "WeManage Consultancy Services is a professional consultancy providing practical and customized solutions across business management, accounting, finance, taxation, ERP systems, data and documentation.",
};

const focusPoints = [
  "Organize business and financial information",
  "Improve accounting and record management",
  "Develop useful management reports",
  "Strengthen financial and operational control",
  "Organize tax-related documentation",
  "Implement and support ERP solutions",
  "Develop Excel and Google Sheets systems",
  "Manage and analyze business data",
  "Create business documents and processes",
  "Improve professional business communication",
  "Obtain reliable remote business support",
];

const serviceModels = [
  {
    title: "Individual Solutions",
    description: "Targeted assignments addressing a specific operational, accounting or spreadsheet requirement.",
  },
  {
    title: "Project-Based Assignments",
    description: "End-to-end deliverables such as ERP setup, documentation drafting or historical ledger cleanups.",
  },
  {
    title: "Ongoing Business Support",
    description: "Continuous remote bookkeeping, monthly management reporting, and routine administrative assistance.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. FULL-WIDTH EDITORIAL ABOUT HERO                           */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/image-for-about-us.png"
          alt="WeManage professional business consultancy team collaborating in a modern office"
          fill
          priority
          className="object-cover object-center lg:object-[center_30%]"
          sizes="100vw"
        />

        {/* Directional Gradient Overlay — stronger left, transparent right */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,42,74,0.92) 0%, rgba(12,42,74,0.82) 28%, rgba(12,42,74,0.48) 52%, rgba(12,42,74,0.12) 78%, rgba(12,42,74,0.04) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Mobile-only extra overlay for text readability on smaller screens */}
        <div
          className="absolute inset-0 z-[1] lg:hidden bg-[rgba(12,42,74,0.65)]"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-[2] max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 flex flex-col justify-center min-h-[420px] sm:min-h-[480px] lg:min-h-[560px]">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5">
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
                About Us
              </li>
            </ol>
          </nav>

          {/* Text Block — max-width constrains to left half on desktop */}
          <div className="max-w-xl lg:max-w-[580px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-[2px] bg-[var(--wemanage-gold)] rounded-full" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)]">
                ABOUT WEMANAGE
              </p>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.14]">
              Practical Business Support Built Around Your Real Requirements
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed font-normal max-w-lg">
              A professional consultancy and business support service dedicated to bringing clarity, organization and operational efficiency to businesses and professionals.
            </p>
          </div>

          {/* Engagement Types — compact inline row */}
          <div className="mt-8 flex flex-wrap items-center gap-y-2.5 gap-x-4 sm:gap-x-0 text-xs sm:text-[13px] font-semibold text-white/90">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0" />
              <span>Individual Solutions</span>
            </div>
            <span className="hidden sm:inline text-white/25 mx-3" aria-hidden="true">│</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0" />
              <span>Project-Based Assignments</span>
            </div>
            <span className="hidden sm:inline text-white/25 mx-3" aria-hidden="true">│</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0" />
              <span>Ongoing Business Support</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT WEMANAGE & HOW WE WORK                              */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-slate-200/80" aria-label="About Profile">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Workspace Column (IMAGE FIRST on mobile, RIGHT on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                <Image
                  src="/images/about-workspace.jpg"
                  alt="WeManage professional consulting workspace and documentation desk"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Profile Content Column (TEXT SECOND on mobile, LEFT on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-2">
                OUR PROFILE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
                WeManage Consultancy Services
              </h2>
              <div className="mt-5 space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  WeManage Consultancy Services is a professional consultancy and business support service providing practical and customized solutions across business management, accounting, finance, taxation, ERP systems, data management, documentation, content development and administrative support.
                </p>
                <p>
                  We work with businesses and professionals who need better organization, accurate information, structured documentation, efficient processes and practical management support.
                </p>
              </div>

              {/* Engagement Delivery Models */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  How Our Services Are Provided:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {serviceModels.map((model, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90"
                    >
                      <span className="text-xs font-bold text-[var(--wemanage-cyan)] block mb-1">
                        0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-[var(--wemanage-navy)] mb-1">
                        {model.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {model.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR FOCUS (11 OFFICIAL POINTS)                            */}
      {/* ============================================================ */}
      <section className="w-full bg-[#F8FAFC] py-12 lg:py-16 border-b border-slate-200/80" aria-label="Our Focus">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)] mb-2 block">
              OPERATIONAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
              Our Primary Business Focus
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We concentrate on core operational disciplines that directly impact business stability, control and decision-making:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
            {focusPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs hover:border-[var(--wemanage-cyan)]/50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[var(--wemanage-navy)] leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4 & 5. MISSION & VISION                                       */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-slate-200/80" aria-label="Mission and Vision">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* MISSION */}
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-1">
                  OUR MISSION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--wemanage-navy)] tracking-tight mb-3">
                  To Provide Practical Solutions That Make Business Management Easier.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Our mission is to help companies, entrepreneurs and professionals organize their operational information, streamline documentation and establish reliable systems that simplify daily administration and decision-making.
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className="p-8 rounded-2xl bg-[#0C2F54] text-white flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-1">
                  OUR VISION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  Better Information. Better Management. Stronger Business.
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  We envision businesses powered by accurate records, structured documentation, and modern technology systems that provide true operational visibility and enable resilient, sustainable commercial growth.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. OUR APPROACH (Understand, Organize, Develop, Support)      */}
      {/* ============================================================ */}
      <OurApproachSection />

      {/* ============================================================ */}
      {/* 7. OUR COMMITMENT                                            */}
      {/* ============================================================ */}
      <section className="w-full bg-[#F4F8FA] py-12 lg:py-14 border-b border-slate-200/80" aria-label="Our Commitment">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-3.5 shadow-2xs">
              <ShieldCheck className="w-6 h-6 text-[var(--wemanage-cyan)]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)] mb-1 block">
              OUR COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
              Our Professional Commitment
            </h2>
            <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-normal">
              At WeManage Consultancy Services, the focus is not simply on providing a service.
              The goal is to understand the requirement and provide a solution that is organized,
              practical and useful for the business.
            </p>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Better information, better organization and better processes can help businesses
              achieve stronger management and improved operational control.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CONSULTATION CTA                                          */}
      {/* ============================================================ */}
      <ServiceCtaSection
        title="Have a Business Requirement?"
        description="Let's find a practical solution for your business."
      />
    </>
  );
}
