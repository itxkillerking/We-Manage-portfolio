import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, FileText } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Business Documentation & Process Development | WeManage Consultancy Services",
  description:
    "Proper documentation helps businesses maintain consistency, accountability and operational clarity. SOPs, company profiles, proposals, policies and customized formats.",
};

const solutions = [
  "Company profiles",
  "Business proposals",
  "Business plans",
  "Procedures",
  "Process documentation",
  "SOPs",
  "Internal forms",
  "Business templates",
  "Reporting formats",
  "Financial templates",
  "Operational documentation",
  "Management documentation",
  "Customized business documents",
];

export default function BusinessDocumentationPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Business Documentation & Process Development"
        tagline="Professional Documentation for Better Business Organization"
        category="PROCESS & DOCUMENTATION"
        serviceSlug="business-documentation"
      />

      {/* 2. Introduction & Scope */}
      <section className="w-full bg-white py-12 lg:py-16" aria-label="Service Overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-2">
                OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
                Professional Documentation for Better Business Organization
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Proper documentation helps businesses maintain consistency, accountability and operational clarity.
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                Whether you need standardized operating procedures (SOPs), winning business proposals, investor-ready plans, or structured internal operational forms, we create clear, practical documentation that establishes permanent order.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="text-sm font-semibold text-[var(--wemanage-navy)]">
                  Standardizing operations, workflows & business communication
                </span>
              </div>
            </div>

            {/* 3. Services Included */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] mb-2">
                Documentation & Templates Included
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Comprehensive operational, administrative and strategic business documents:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {solutions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs hover:border-[var(--wemanage-cyan)]/50 transition-colors"
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
      </section>

      {/* 4. Our Approach */}
      <OurApproachSection />

      {/* 5. Consultation CTA */}
      <ServiceCtaSection
        title="Need Professional Business Documentation?"
        description="Connect with WeManage today to structure your company policies, SOPs, proposals and internal administrative templates."
        serviceSlug="business-documentation"
      />
    </>
  );
}
