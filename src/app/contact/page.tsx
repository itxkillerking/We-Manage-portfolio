import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  MessageSquare,
  Mail,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { businessInfo } from "@/data/business-data";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us & Consultation | WeManage Consultancy Services",
  description:
    "Connect with WeManage Consultancy Services for practical business consultancy, accounting, tax, ERP, data and documentation support. Reach us via WhatsApp or direct inquiry.",
};

const supportedAreas = [
  "Business Consultancy",
  "Accounting & Finance",
  "Tax Documentation",
  "ERP Solutions",
  "Excel & Google Sheets",
  "Data Management",
  "Business Documentation",
  "Content & Copywriting",
  "Virtual Business Support",
];

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${businessInfo.contact.whatsapp.replace("+", "")}`;
  const emailUrl = `mailto:${businessInfo.contact.email}`;

  return (
    <>
      {/* ============================================================ */}
      {/* 1. COMPACT CORPORATE CONTACT HERO                            */}
      {/* ============================================================ */}
      <section className="relative w-full bg-gradient-to-b from-[#F2F6FA] via-[#F8FAFC] to-white border-b border-slate-200/80 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-[var(--wemanage-cyan)] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="font-semibold text-[var(--wemanage-navy)]" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            {/* Eyebrow with gold accent detail */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[var(--wemanage-gold)] rounded-full" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)]">
                GET IN TOUCH
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[var(--wemanage-navy)] tracking-tight leading-tight">
              Start Your Business Consultation
            </h1>

            {/* Source-backed Paragraph */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Discuss your management, accounting, tax, ERP, or documentation requirements directly with our consultancy team.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MAIN TWO-COLUMN CONTACT SECTION                           */}
      {/* ============================================================ */}
      <section className="w-full bg-[#F8FAFC] py-12 lg:py-16" aria-label="Consultation Form & Direct Contact">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Main Consultation Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-8 bg-white rounded-xl border border-slate-200 animate-pulse text-sm text-slate-400">
                    Loading consultation inquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* RIGHT COLUMN: Unified Corporate Contact & Advisory Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
                
                {/* Panel Header */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-1">
                    DIRECT CONTACT
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] tracking-tight">
                    Get in Touch Directly
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Connect with our advisory team for prompt assistance and preliminary consultation.
                  </p>
                </div>

                {/* Contact Options: WhatsApp & Email */}
                <div className="space-y-4 mb-8">
                  {/* WhatsApp Action Card */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat on WhatsApp with WeManage at ${businessInfo.contact.whatsappDisplay}`}
                    className="group relative block p-4 sm:p-4.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 cursor-pointer transition-all duration-200 ease-out hover:border-[#25D366]/50 hover:bg-[#25D366]/[0.03] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] active:bg-slate-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-start justify-between gap-3 sm:gap-3.5">
                      <div className="flex items-start gap-3 sm:gap-3.5 min-w-0 flex-1">
                        <div className="w-9 h-9 rounded-lg bg-[var(--wemanage-light)] border border-slate-200/80 flex items-center justify-center flex-shrink-0 text-[var(--wemanage-cyan)] group-hover:text-[#25D366] group-hover:border-[#25D366]/30 group-hover:bg-[#25D366]/10 transition-colors duration-200">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            WhatsApp
                          </span>
                          <span className="text-base font-bold text-[var(--wemanage-navy)] group-hover:text-[#128C7E] transition-colors duration-200 block mt-0.5">
                            {businessInfo.contact.whatsappDisplay}
                          </span>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            Direct messaging, document sharing and routine business coordination.
                          </p>
                        </div>
                      </div>

                      {/* Right-side brand indicator & action arrow */}
                      <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5 text-[#25D366]" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[22px] h-[22px] text-[#25D366] transition-transform duration-200 group-hover:scale-105"
                        >
                          <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.176.2-.351.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.787-1.68-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.245-.589-.494-.509-.678-.518-.176-.008-.377-.01-.578-.01-.2 0-.528.075-.804.376-.276.301-1.055 1.03-1.055 2.512 0 1.482 1.08 2.912 1.231 3.113.151.2 2.126 3.246 5.151 4.553.72.311 1.282.497 1.721.636.724.23 1.383.197 1.903.12.579-.086 1.781-.727 2.032-1.43.251-.703.251-1.306.176-1.43-.075-.125-.276-.201-.577-.351zM12.06 2.008c-5.518 0-10.002 4.484-10.002 10.002 0 1.763.46 3.486 1.332 5.006L2.012 22l5.127-1.344a9.98 9.98 0 0 0 4.921 1.294c5.518 0 10.002-4.484 10.002-10.002 0-5.518-4.484-10.002-10.002-10.002z" />
                        </svg>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </a>

                  {/* Official Email Action Card */}
                  <a
                    href={emailUrl}
                    aria-label={`Send official email to WeManage at ${businessInfo.contact.email}`}
                    className="group relative block p-4 sm:p-4.5 rounded-lg bg-[#F8FAFC] border border-slate-200/80 cursor-pointer transition-all duration-200 ease-out hover:border-[#EA4335]/40 hover:bg-[#EA4335]/[0.025] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] active:bg-slate-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wemanage-cyan)] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-start justify-between gap-3 sm:gap-3.5">
                      <div className="flex items-start gap-3 sm:gap-3.5 min-w-0 flex-1">
                        <div className="w-9 h-9 rounded-lg bg-[var(--wemanage-light)] border border-slate-200/80 flex items-center justify-center flex-shrink-0 text-[var(--wemanage-cyan)] group-hover:text-[#EA4335] group-hover:border-[#EA4335]/30 group-hover:bg-[#EA4335]/10 transition-colors duration-200">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            Official Email
                          </span>
                          <span className="text-base font-bold text-[var(--wemanage-navy)] group-hover:text-[#C5221F] transition-colors duration-200 block mt-0.5 break-all">
                            {businessInfo.contact.email}
                          </span>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            Formal inquiries, project briefs and commercial communications.
                          </p>
                        </div>
                      </div>

                      {/* Right-side brand indicator & action arrow */}
                      <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[22px] h-[22px] text-[#EA4335] transition-transform duration-200 group-hover:scale-105"
                        >
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                        </svg>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#EA4335] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Supported Service Areas within the same panel */}
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-1">
                    HAVE A BUSINESS REQUIREMENT?
                  </span>
                  <h3 className="text-base font-bold text-[var(--wemanage-navy)] mb-1.5">
                    Let&apos;s Find a Practical Solution for Your Business.
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    WeManage provides practical, customized support across these core areas:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                    {supportedAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--wemanage-cyan)] flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
