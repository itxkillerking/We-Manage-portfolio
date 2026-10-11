import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Table2 } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Advanced Excel & Google Sheets | WeManage Consultancy Services",
  description:
    "We develop customized spreadsheet solutions for businesses that need better data organization, calculations, reporting and management control.",
};

const solutions = [
  "Advanced Excel worksheets",
  "Google Sheets systems",
  "Automated reports",
  "Business templates",
  "Financial models",
  "Accounting templates",
  "Sales reports",
  "Purchase reports",
  "Inventory management",
  "Expense management",
  "Payroll/basic payroll systems",
  "Data analysis",
  "Dashboards",
  "Management reporting",
  "Customized calculators",
  "Automated formulas and workflows",
];

export default function ExcelGoogleSheetsPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Advanced Excel & Google Sheets"
        tagline="Powerful Business Solutions Using Excel & Google Sheets"
        category="SPREADSHEET & AUTOMATION SOLUTIONS"
        serviceSlug="excel-google-sheets"
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
                Powerful Business Solutions Using Excel & Google Sheets
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                We develop customized spreadsheet solutions for businesses that need better data organization, calculations, reporting and management control.
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                From structured financial models and real-time Google Sheets tracking to automated workflow calculations and management dashboards, our spreadsheet solutions reduce manual work and increase operational clarity.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                  <Table2 className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="text-sm font-semibold text-[var(--wemanage-navy)]">
                  Customized for small, medium & growing businesses
                </span>
              </div>
            </div>

            {/* 3. Solutions Included */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] mb-2">
                Solutions & Templates Included
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Complete spreadsheet solutions built to solve real calculations and reporting challenges:
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
        title="Need a Custom Spreadsheet Solution?"
        description="Connect with WeManage today to build reliable, automated Excel worksheets or Google Sheets systems tailored to your business needs."
        serviceSlug="excel-google-sheets"
      />
    </>
  );
}
