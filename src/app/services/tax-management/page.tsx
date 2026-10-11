import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, ReceiptText, ShieldCheck, AlertCircle, FileText } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Tax Management & Compliance Support | WeManage Consultancy Services",
  description:
    "Practical Tax Documentation & Compliance Support. Structured preparation, record-keeping and compliance documentation for Income Tax, Sales Tax (GST) and regulatory filings.",
};

const incomeTaxItems = [
  "Income Tax registration support",
  "Tax return preparation support",
  "Tax computation",
  "Withholding tax documentation",
  "Tax records",
  "Tax reconciliation",
  "Advance tax documentation",
  "Tax payment support",
];

const salesTaxItems = [
  "Sales tax registration support",
  "Periodic sales tax return support",
  "Input-output reconciliation",
  "Sales tax documentation",
  "Invoice review",
  "Sales tax records",
];

const otherTaxItems = [
  "Services tax documentation",
  "Property tax-related documentation",
  "Professional tax-related support",
  "Excise-related documentation",
  "Customs and import/export tax documentation",
];

export default function TaxManagementPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Tax Management & Compliance Support"
        tagline="Practical Tax Documentation & Compliance Support"
        category="COMPLIANCE & DOCUMENTATION"
        serviceSlug="tax-management"
      />

      {/* 2. Introduction & Scope */}
      <section className="w-full bg-white py-12 lg:py-16" aria-label="Service Overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-2">
              COMPLIANCE ASSISTANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
              Organized Tax Documentation for Businesses & Professionals
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
              Managing tax obligations requires accurate records, rigorous documentation and complete alignment with applicable tax laws. WeManage assists businesses, traders, manufacturers and professionals with practical tax preparation and documentation support.
            </p>
          </div>

          {/* 3. Structured Categories: Income Tax, Sales Tax, Other Taxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Category 1: Income Tax */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                    <ReceiptText className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--wemanage-navy)]">
                    Income Tax
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  Direct tax preparation, withholding reconciliations and annual return support:
                </p>
                <ul className="space-y-2.5">
                  {incomeTaxItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 2: Sales Tax / GST */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--wemanage-navy)]">
                    Sales Tax / GST
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  Indirect tax filings, monthly returns and input-output tax reconciliations:
                </p>
                <ul className="space-y-2.5">
                  {salesTaxItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 3: Other Tax Support */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--wemanage-navy)]">
                    Other Tax-Related Support
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  Provincial, property, commercial excise and trade-related tax documents:
                </p>
                <ul className="space-y-2.5">
                  {otherTaxItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Regulatory Disclaimer */}
          <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <strong className="text-[var(--wemanage-navy)] font-semibold">Important Note:</strong> Tax services are documentation, preparation and management support based on the client&apos;s requirements and applicable regulations. WeManage provides advisory and operational documentation assistance and is not a government tax authority.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Our Approach */}
      <OurApproachSection />

      {/* 5. Consultation CTA */}
      <ServiceCtaSection
        title="Need Support with Your Tax Documentation?"
        description="Reach out to WeManage for organized, accurate documentation and compliance management support."
        serviceSlug="tax-management"
      />
    </>
  );
}
