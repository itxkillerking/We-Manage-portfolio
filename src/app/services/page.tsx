import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Calculator,
  BarChart3,
  ReceiptText,
  PanelsTopLeft,
  Table2,
  DatabaseZap,
  FileText,
  PenLine,
  Headset,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";
import { OurApproachSection } from "@/components/services/OurApproachSection";

export const metadata: Metadata = {
  title: "Core Services | WeManage Consultancy Services",
  description:
    "Explore our 10 comprehensive business solutions across business consultancy, accounting, financial reporting, tax management, ERP solutions, data analysis and administrative support.",
};

const allServices = [
  {
    number: "01",
    id: "business-consultancy",
    title: "Business & Management Consultancy",
    description:
      "Practical business planning, organization, operational systems, process improvement and customized management support.",
    icon: Users,
    href: "/services/business-consultancy",
    hasDetailPage: true,
  },
  {
    number: "02",
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    description:
      "Accurate bookkeeping, general ledger, reconciliations, receivables, payables, expense tracking and organized financial control.",
    icon: Calculator,
    href: "/services/accounting-bookkeeping",
    hasDetailPage: true,
  },
  {
    number: "03",
    id: "financial-reporting",
    title: "Financial & Management Reporting",
    description:
      "Turn business data into useful management information: P&L, balance sheets, cash-flow statements and customized dashboards.",
    icon: BarChart3,
    href: "/services/financial-reporting",
    hasDetailPage: true,
  },
  {
    number: "04",
    id: "tax-management",
    title: "Tax Management & Compliance Support",
    description:
      "Practical documentation, preparation and filing support for Income Tax, Sales Tax (GST), withholding records and compliance.",
    icon: ReceiptText,
    href: "/services/tax-management",
    hasDetailPage: true,
  },
  {
    number: "05",
    id: "erp-solutions",
    title: "ERP Solutions",
    description:
      "Requirement analysis, system selection, setup, configuration and data migration for Odoo, QuickBooks, BUSY and custom ERP systems.",
    icon: PanelsTopLeft,
    href: "/services/erp-solutions",
    hasDetailPage: true,
  },
  {
    number: "06",
    id: "excel-google-sheets",
    title: "Advanced Excel & Google Sheets",
    description:
      "Advanced spreadsheets, financial models, automated calculation sheets, custom templates and interactive business dashboards.",
    icon: Table2,
    href: "/services/excel-google-sheets",
    hasDetailPage: true,
  },
  {
    number: "07",
    id: "data-management",
    title: "Business Data Management & Analysis",
    description:
      "Structured business data organization, database cleanup, trend analysis and actionable management reporting.",
    icon: DatabaseZap,
    href: "/services/data-management",
    hasDetailPage: true,
  },
  {
    number: "08",
    id: "business-documentation",
    title: "Business Documentation & Process Development",
    description:
      "Standard operating procedures (SOPs), company policies, customized business templates and structured operational workflows.",
    icon: FileText,
    href: "/services/business-documentation",
    hasDetailPage: true,
  },
  {
    number: "09",
    id: "content-copywriting",
    title: "Content Writing & Copywriting",
    description:
      "Professional company profiles, website content, commercial proposals, marketing materials and business communications.",
    icon: PenLine,
    href: "/services/content-copywriting",
    hasDetailPage: true,
  },
  {
    number: "10",
    id: "virtual-business-support",
    title: "Virtual Business & Administrative Support",
    description:
      "Remote administrative coordination, back-office assistance, ongoing business support and routine operational management.",
    icon: Headset,
    href: "/services/virtual-business-support",
    hasDetailPage: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Route-specific LCP Hero Preload */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-services-desktop.webp"
        type="image/webp"
        media="(min-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero-services-mobile.webp"
        type="image/webp"
        media="(max-width: 767px)"
      />

      {/* ============================================================ */}
      {/* EDITORIAL SERVICES HERO                                      */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] bg-[#0A2342] overflow-hidden flex flex-col justify-center border-b border-slate-200/80">
        {/* Pre-optimized Responsive Hero Background */}
        <picture className="absolute inset-0 block w-full h-full pointer-events-none">
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-services-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero-services-desktop.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-services-desktop.webp"
            alt="WeManage professional consultancy team collaborating on comprehensive business solutions"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-right lg:object-[82%_center]"
          />
        </picture>

        {/* Directional Navy Gradient Overlay (Strong left fade, clear image on right) */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #0A2342 0%, rgba(10,35,66,0.95) 28%, rgba(10,35,66,0.72) 46%, rgba(10,35,66,0.22) 68%, rgba(10,35,66,0.04) 86%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Mobile & Tablet Tint Overlay */}
        <div
          className="lg:hidden absolute inset-0 z-[1] bg-gradient-to-b from-[#0A2342]/95 via-[#0A2342]/88 to-[#0A2342]/78 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-[2] max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 flex flex-col justify-center">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="flex items-center gap-1.5 text-xs text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              </li>
              <li className="font-semibold text-white/90" aria-current="page">
                Services
              </li>
            </ol>
          </nav>

          <div className="max-w-xl lg:max-w-[620px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-[2px] bg-[var(--wemanage-gold)] rounded-full" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)]">
                OUR SERVICES
              </p>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.14]">
              Comprehensive Business Solutions
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-white/80 leading-relaxed font-normal max-w-xl">
              From financial management and taxation to digital systems and business documentation,
              we provide practical, customized solutions to help businesses work smarter and grow with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* ALL 10 SERVICES LIST / GRID                                  */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-12 lg:py-16" aria-label="Complete List of Services">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-6 sm:p-7 rounded-xl border border-slate-200/90 bg-white hover:border-[var(--wemanage-cyan)]/70 hover:shadow-xs transition-all duration-200 group"
                >
                  <div>
                    {/* Top row with icon & number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--wemanage-light)] border border-slate-200/80 flex items-center justify-center group-hover:bg-[var(--wemanage-cyan)]/10 group-hover:border-[var(--wemanage-cyan)]/30 transition-colors">
                        <Icon className="w-6 h-6 text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] tracking-tight group-hover:text-[var(--wemanage-cyan)] transition-colors">
                      {service.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    {service.hasDetailPage ? (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--wemanage-cyan)] hover:text-[var(--wemanage-navy)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-[var(--wemanage-cyan)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm"
                      >
                        <span>WhatsApp Consultation &rarr;</span>
                      </a>
                    )}

                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      {service.hasDetailPage ? "Detailed View" : "Available on Request"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR APPROACH SECTION                                         */}
      {/* ============================================================ */}
      <OurApproachSection />

      {/* ============================================================ */}
      {/* BOTTOM CONSULTATION CTA                                      */}
      {/* ============================================================ */}
      <ServiceCtaSection
        title="Ready to Discuss Your Business Requirement?"
        description="Contact WeManage today to discover practical, tailored solutions across business management, accounting, tax and technology systems."
      />
    </>
  );
}
