import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, DatabaseZap } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Business Data Management & Analysis | WeManage Consultancy Services",
  description:
    "Business data becomes valuable when it is properly organized, structured and analyzed. We help businesses manage and convert raw information into useful business reports.",
};

const solutions = [
  "Data entry and organization",
  "Data cleaning",
  "Data structuring",
  "Data consolidation",
  "Data reconciliation",
  "Business data analysis",
  "Financial data analysis",
  "Sales analysis",
  "Purchase analysis",
  "Expense analysis",
  "Inventory analysis",
  "Performance reporting",
  "Management dashboards",
];

export default function DataManagementPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Business Data Management & Analysis"
        tagline="Organize Your Data. Understand Your Business."
        category="DATA MANAGEMENT & ANALYTICS"
        serviceSlug="data-management"
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
                Organize Your Data. Understand Your Business.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Business data becomes valuable when it is properly organized, structured and analyzed.
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                We help businesses manage and convert raw information into useful business reports, enabling owners and managers to make informed commercial decisions based on verified facts rather than assumptions.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                  <DatabaseZap className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="text-sm font-semibold text-[var(--wemanage-navy)]">
                  Turning unstructured raw data into actionable intelligence
                </span>
              </div>
            </div>

            {/* 3. Services Included */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] mb-2">
                Services & Capabilities Included
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                End-to-end data organization, cleaning, reconciliation and executive analytics:
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
        title="Ready to Structure and Analyze Your Business Data?"
        description="Connect with WeManage today to organize your datasets and build clear, accurate management reporting dashboards."
        serviceSlug="data-management"
      />
    </>
  );
}
