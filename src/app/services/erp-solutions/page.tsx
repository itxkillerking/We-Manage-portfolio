import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, PanelsTopLeft, Layers, AlertCircle, Cpu } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "ERP Solutions & Implementation Support | WeManage Consultancy Services",
  description:
    "Smarter Systems. Better Business Management. Independent ERP consulting, system selection, setup, data migration and configuration support for Odoo, QuickBooks, BUSY, IFS, Tally and custom systems.",
};

const erpPlatforms = [
  "Odoo",
  "QuickBooks",
  "BUSY",
  "IFS",
  "Tally",
  "Manager.io",
  "Customized ERP Solutions",
  "Excel-Based Business Management Systems",
];

const erpSupportScope = [
  "ERP requirement analysis",
  "System selection support",
  "ERP planning",
  "Configuration support",
  "Accounting setup",
  "Inventory setup",
  "Sales and purchase processes",
  "Customer/vendor management",
  "Data migration support",
  "Reporting",
  "Dashboard development",
  "Process automation",
  "User training/support",
  "ERP improvement and customization support",
];

export default function ErpSolutionsPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="ERP Solutions"
        tagline="Smarter Systems. Better Business Management."
        category="ENTERPRISE SYSTEMS"
        serviceSlug="erp-solutions"
      />

      {/* 2. Introduction & Scope */}
      <section className="w-full bg-white py-12 lg:py-16" aria-label="Service Overview">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block mb-2">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
                Integrate Your Operations into One Reliable Platform
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                Implementing or upgrading an ERP platform requires practical business understanding, accurate data mapping and realistic workflow design. WeManage supports businesses through every phase of system selection, setup, data migration and ongoing system management.
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                Whether deploying cloud accounting software or tailoring an integrated ERP to your manufacturing, trading or service workflow, we help you avoid costly mistakes and build a solution that truly serves your business.
              </p>

              {/* Supported Platforms Tag Cloud */}
              <div className="mt-6 p-5 rounded-2xl bg-[#F5F9FC] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-3">
                  <PanelsTopLeft className="w-4 h-4 text-[var(--wemanage-cyan)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-navy)]">
                    Supported Platforms & Solutions
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {erpPlatforms.map((platform, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-xs font-semibold px-3 py-1.5 rounded-md bg-white text-[var(--wemanage-navy)] border border-slate-200 shadow-2xs"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. ERP Support Includes */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] mb-2">
                ERP Support Includes
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                End-to-end implementation and optimization services tailored to your operational scale:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {erpSupportScope.map((item, index) => (
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

          {/* Independent Consulting Disclaimer */}
          <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <strong className="text-[var(--wemanage-navy)] font-semibold">Important Note:</strong> WeManage provides independent implementation, configuration, data migration and operational consulting support. WeManage is not an official vendor or authorized partner of third-party software platforms.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Our Approach */}
      <OurApproachSection />

      {/* 5. Consultation CTA */}
      <ServiceCtaSection
        title="Planning an ERP Implementation or Upgrade?"
        description="Connect with WeManage to assess your business requirements, evaluate system options and plan a practical implementation."
        serviceSlug="erp-solutions"
      />
    </>
  );
}
