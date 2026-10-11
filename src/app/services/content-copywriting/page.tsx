import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, PenLine, FileText, Megaphone, Sparkles } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Content Writing & Copywriting | WeManage Consultancy Services",
  description:
    "Professional words for professional businesses. Clear, practical and business-focused content writing, copywriting and business communications.",
};

const contentWritingItems = [
  "Website content",
  "Company profiles",
  "Business articles",
  "Blogs",
  "LinkedIn content",
  "Social media content",
  "Product descriptions",
  "Service descriptions",
  "Professional biographies",
  "Business presentations",
  "Video scripts",
];

const copywritingItems = [
  "Advertising copy",
  "Promotional content",
  "Sales copy",
  "Landing-page copy",
  "Marketing messages",
  "Email marketing",
  "WhatsApp marketing messages",
  "Headlines",
  "Hooks",
  "Calls-to-action",
  "Campaign content",
];

const communicationPillars = [
  "Clear",
  "Professional",
  "Relevant",
  "Practical",
  "Business-Focused",
];

export default function ContentCopywritingPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Content Writing & Copywriting"
        tagline="Professional Words for Professional Businesses."
        category="COMMUNICATIONS & CONTENT"
        serviceSlug="content-copywriting"
      />

      {/* 2. Introduction & Scope */}
      <section className="w-full bg-white py-12 lg:py-16" aria-label="Service Overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-2">
              OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
              Clear, Purposeful Business Communication
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
              Words represent your business, build authority and drive commercial engagement. We produce structured content and persuasive copy designed to communicate value clearly without unnecessary corporate jargon.
            </p>

            {/* Business Communication Pillars */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[var(--wemanage-navy)] uppercase tracking-wider mr-2">
                Our Focus:
              </span>
              {communicationPillars.map((pillar, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--wemanage-light)] text-[var(--wemanage-navy)] border border-slate-200"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Two Categorized Grids: Content Writing & Copywriting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Category 1: Content Writing */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)]">
                      Content Writing
                    </h3>
                    <p className="text-xs text-slate-500">
                      Informative, authoritative and structured brand content
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-6">
                  {contentWritingItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-[var(--wemanage-navy)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Category 2: Copywriting */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)]">
                      Copywriting
                    </h3>
                    <p className="text-xs text-slate-500">
                      High-impact, conversion-focused promotional messages
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-6">
                  {copywritingItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200/80 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-[var(--wemanage-navy)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Our Approach */}
      <OurApproachSection />

      {/* 5. Consultation CTA */}
      <ServiceCtaSection
        title="Looking for Professional Business Content?"
        description="Connect with WeManage today to produce clear, practical content and commercial copy that elevates your brand message."
        serviceSlug="content-copywriting"
      />
    </>
  );
}
