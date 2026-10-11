import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, BarChart3, LineChart, PieChart } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Financial & Management Reporting | WeManage Consultancy Services",
  description:
    "Turn Business Data into Useful Management Information. Accurate P&L reports, balance sheets, cash-flow analysis, profitability reports and custom executive dashboards.",
};

const reportingSolutions = [
  "Profit & Loss Reports",
  "Balance Sheet",
  "Cash Flow Reports",
  "Receivables Reports",
  "Payables Reports",
  "Expense Reports",
  "Sales Reports",
  "Purchase Reports",
  "Inventory Reports",
  "Profitability Reports",
  "Cost Analysis",
  "Budget vs. Actual Reports",
  "Management Dashboards",
  "Customized Financial Reports",
];

export default function FinancialReportingPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Financial & Management Reporting"
        tagline="Turn Business Data into Useful Management Information."
        category="REPORTING & ANALYTICS"
        serviceSlug="financial-reporting"
      />

      {/* 2. Introduction & Scope */}
      <section className="w-full bg-white py-12 lg:py-16" aria-label="Service Overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-2">
                EXECUTIVE INTELLIGENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
                Clear Insights for Smarter Decision-Making
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Raw business numbers only become valuable when converted into structured, timely and actionable reports. WeManage develops clear financial and management reporting models that provide business owners with complete clarity over their performance.
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                From tracking sales trends and inventory turnover to analyzing operational cost structures and comparing budgeted targets against actual outcomes, our reporting solutions support informed, confident leadership.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#F5F9FC] border border-slate-200/80">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                  <span className="text-sm font-bold text-[var(--wemanage-navy)]">
                    Actionable Management Dashboards
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Custom financial templates and visual dashboards that make business health immediately visible to owners, executives and stakeholders.
                </p>
              </div>
            </div>

            {/* 3. Reporting Solutions Included */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] mb-2">
                Reporting Solutions Included
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Standard and customized financial statements tailored to your management cadence:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {reportingSolutions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-2xs hover:border-[var(--wemanage-cyan)]/50 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] font-semibold text-[var(--wemanage-navy)]">
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
        title="Need Timely Financial Reports for Your Business?"
        description="Contact WeManage to implement organized financial reporting and custom management dashboards that give you true visibility."
        serviceSlug="financial-reporting"
      />
    </>
  );
}
