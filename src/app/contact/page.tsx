import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  MessageSquare,
  Mail,
  CheckCircle2,
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
                  {/* WhatsApp Row */}
                  <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 transition-colors hover:border-[var(--wemanage-cyan)]/50">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[var(--wemanage-light)] border border-slate-200/80 flex items-center justify-center flex-shrink-0 text-[var(--wemanage-cyan)]">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          WhatsApp
                        </span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-bold text-[var(--wemanage-navy)] hover:text-[var(--wemanage-cyan)] transition-colors inline-block mt-0.5"
                        >
                          {businessInfo.contact.whatsappDisplay}
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          Direct messaging, document sharing and routine business coordination.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Row */}
                  <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 transition-colors hover:border-[var(--wemanage-cyan)]/50">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[var(--wemanage-light)] border border-slate-200/80 flex items-center justify-center flex-shrink-0 text-[var(--wemanage-cyan)]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Official Email
                        </span>
                        <a
                          href={emailUrl}
                          className="text-base font-bold text-[var(--wemanage-navy)] hover:text-[var(--wemanage-cyan)] transition-colors inline-block mt-0.5 break-all"
                        >
                          {businessInfo.contact.email}
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          Formal inquiries, project briefs and commercial communications.
                        </p>
                      </div>
                    </div>
                  </div>
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
