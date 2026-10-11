import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Calculator, BookOpen, ShieldCheck } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping | WeManage Consultancy Services",
  description:
    "Organized Accounts. Better Financial Control. Comprehensive bookkeeping, general ledger, bank reconciliations, receivable/payable management and financial reporting.",
};

const accountingItems = [
  "Manual accounting",
  "Bookkeeping",
  "General ledger management",
  "Cash and bank records",
  "Bank reconciliation",
  "Accounts receivable",
  "Accounts payable",
  "Expense recording",
  "Petty cash management",
  "Payroll / basic payroll records",
  "Inventory-related accounting records",
  "Financial data organization",
  "Financial statements",
  "Management reports",
  "Profitability analysis",
  "Cost analysis",
  "Expense and cost control",
  "Cash-flow reporting",
];

export default function AccountingBookkeepingPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Accounting & Bookkeeping"
        tagline="Organized Accounts. Better Financial Control."
        category="FINANCIAL SERVICES"
        serviceSlug="accounting-bookkeeping"
      />

      {/* 2. Introduction & Scope */}
      <section className="w-full bg-white py-12 lg:py-16" aria-label="Service Overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-2">
                CORE DISCIPLINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
                Accurate, Up-to-Date Financial Records
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Reliable accounting is the backbone of every well-managed business. WeManage supports companies, traders, manufacturers, service providers and professionals with systematic bookkeeping and accurate record-keeping.
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                Whether you need daily transaction recording, monthly bank reconciliations, vendor ledger management, or structured financial reports, we ensure your financial data is clear, organized and audit-ready.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#F5F9FC] border border-slate-200/80">
                <div className="flex items-center gap-3 mb-2">
                  <Calculator className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                  <span className="text-sm font-bold text-[var(--wemanage-navy)]">
                    Reliable Financial Control
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Eliminate reconciliation discrepancies, prevent cash leaks, and gain complete transparency over receivables, payables and operational expenses.
                </p>
              </div>
            </div>

            {/* 3. All 18 Services Included */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] mb-2">
                Services & Solutions Included
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Complete operational and managerial bookkeeping coverage based on your business setup:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {accountingItems.map((item, index) => (
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
        title="Need Organized Accounting for Your Business?"
        description="Get in touch with WeManage to establish reliable, structured bookkeeping and accurate financial reporting tailored to your business."
        serviceSlug="accounting-bookkeeping"
      />
    </>
  );
}
