import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Factory,
  Cog,
  Users,
  UserCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Industries We Serve | WeManage Consultancy Services",
  description:
    "Solutions adaptable to different business environments. Practical consultancy, accounting, tax, ERP, data and documentation support for trading, manufacturing, services, startups and professionals.",
};

const industriesData = [
  {
    id: "trading",
    title: "Trading",
    eyebrow: "WHOLESALE & DISTRIBUTION",
    tagline: "Structured inventory, supplier accounts and high-volume transaction controls.",
    description:
      "Trading businesses handle high transaction volumes, multi-party receivables, and dynamic inventory movements. We establish clear commercial accounting, stock reconciliation and management reporting systems.",
    icon: Truck,
    image: "/images/industry-trading.jpg",
    imageAlt: "Trading warehouse distribution and logistics operations",
    capabilities: [
      "Sales tracking and invoicing controls",
      "Purchases and vendor management",
      "Inventory reconciliation and stock controls",
      "Accounts management and general ledger",
      "Receivables monitoring and aging reports",
      "Payables management and payment schedules",
      "Operational & commercial reporting",
      "Business data organization and analysis",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    eyebrow: "INDUSTRIAL & PRODUCTION",
    tagline: "Accurate cost accounting, bill of materials and production record keeping.",
    description:
      "Manufacturing operations require precise tracking of raw materials, work-in-progress, labor overheads and finished inventory to maintain healthy margins and operational discipline.",
    icon: Factory,
    image: "/images/industry-manufacturing.jpg",
    imageAlt: "Industrial manufacturing plant and production line operations",
    capabilities: [
      "Production records and tracking",
      "Raw material management and store ledgers",
      "Inventory accounting (WIP & finished goods)",
      "Costing and unit economics calculation",
      "Expenses allocation and cost control",
      "Financial reporting and margin analysis",
      "Management information and variance reporting",
    ],
  },
  {
    id: "services",
    title: "Services",
    eyebrow: "CORPORATE & PROFESSIONAL SERVICES",
    tagline: "Project billing, client accounts and overhead operational management.",
    description:
      "Service-based firms thrive on accurate time tracking, project profitability, prompt client invoicing and streamlined routine administrative coordination.",
    icon: Cog,
    image: "/images/industry-services.jpg",
    imageAlt: "Corporate professional services advisory and executive meeting",
    capabilities: [
      "Client management and billing ledgers",
      "Project information and budget tracking",
      "Billing, retainers and invoicing schedules",
      "Expenses management and reimbursement systems",
      "Revenue tracking and cash flow forecasting",
      "Management reporting and utilization analysis",
      "Administrative support and documentation",
    ],
  },
  {
    id: "startups",
    altId: "startups-entrepreneurs",
    title: "Startups & Entrepreneurs",
    eyebrow: "EARLY STAGE & VENTURES",
    tagline: "Practical foundation systems, financial planning and administrative clarity.",
    description:
      "Emerging ventures need organized foundational systems from day one without heavy corporate overhead. We assist entrepreneurs with setup documentation, structured accounting and practical forecasting.",
    icon: Users,
    image: "/images/industry-professionals.jpg",
    imageAlt: "Entrepreneurial team collaborating on startup business models",
    capabilities: [
      "Business setup support and registration guidance",
      "Business documentation and corporate profiles",
      "Accounting systems and bookkeeping setup",
      "Financial planning and cash burn forecasting",
      "Excel solutions and customized calculators",
      "Business processes and standard workflows",
      "Management reporting for founders and investors",
    ],
  },
  {
    id: "professionals",
    title: "Professionals & Business Individuals",
    eyebrow: "PRACTITIONERS & INDIVIDUALS",
    tagline: "Personal business records, tax-related documentation and virtual assistance.",
    description:
      "For independent consultants, practitioners and business owners who require organized record-keeping, reliable tax documentation support and discreet remote administrative backing.",
    icon: UserCheck,
    image: "/images/about-workspace.jpg",
    imageAlt: "Organized executive desk and documentation workspace",
    capabilities: [
      "Financial records and personal bookkeeping",
      "Documentation and commercial proposals",
      "Business reports and performance summaries",
      "Excel / Google Sheets tailored models",
      "Tax-related documentation support and preparation",
      "Content and business communication development",
      "Virtual business support and coordination",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Route-specific LCP Hero Preload */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-industries-desktop.webp"
        type="image/webp"
        media="(min-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero-industries-mobile.webp"
        type="image/webp"
        media="(max-width: 767px)"
      />

      {/* ============================================================ */}
      {/* 1. EDITORIAL INDUSTRIES HERO                                 */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] bg-[#0A2342] overflow-hidden flex flex-col justify-center border-b border-slate-200/80">
        {/* Pre-optimized Responsive Hero Background */}
        <picture className="absolute inset-0 block w-full h-full pointer-events-none">
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-industries-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero-industries-desktop.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-industries-desktop.webp"
            alt="Diverse business environments across trading, manufacturing, and corporate services"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-right lg:object-[80%_center]"
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
          
          {/* Breadcrumb Navigation */}
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
                Industries
              </li>
            </ol>
          </nav>

          <div className="max-w-xl lg:max-w-[640px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-[2px] bg-[var(--wemanage-gold)] rounded-full" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)]">
                INDUSTRIES WE SERVE
              </p>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.14]">
              Solutions Adaptable to Different Business Environments
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-white/80 leading-relaxed font-normal max-w-xl">
              Every business environment has distinct operational patterns, compliance requirements and data workflows.
              WeManage tailors accounting, ERP, documentation and management systems to your specific industry realities.
            </p>
          </div>

          {/* Quick Anchor Navigation Jump Bar */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider mr-2">
              Jump to:
            </span>
            {industriesData.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 hover:border-white/40 transition-colors"
              >
                {ind.title}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ALTERNATING INDUSTRY SECTIONS                             */}
      {/* ============================================================ */}
      <div className="w-full bg-white">
        {industriesData.map((ind, index) => {
          const Icon = ind.icon;
          const isEven = index % 2 === 1;

          return (
            <section
              key={ind.id}
              id={ind.id}
              className={`py-12 lg:py-16 border-b border-slate-200/80 scroll-mt-24 ${
                isEven ? "bg-[#F8FAFC]" : "bg-white"
              }`}
              aria-label={`Industry Focus: ${ind.title}`}
            >
              {ind.altId && <div id={ind.altId} className="scroll-mt-24" aria-hidden="true" />}
              
              <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* VISUAL PANEL COLUMN (IMAGE FIRST on mobile) */}
                  <div className={`order-1 lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                      <Image
                        src={ind.image}
                        alt={ind.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* TEXT CONTENT COLUMN (TEXT SECOND on mobile) */}
                  <div className={`order-2 lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    
                    {/* Header badge & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] block">
                          {ind.eyebrow}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
                          {ind.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-slate-700 mt-2 mb-2">
                      {ind.tagline}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {ind.description}
                    </p>

                    {/* Capabilities Checklist */}
                    <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                        Key Solutions & Support Provided:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {ind.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-[13px] text-slate-700 font-medium">
                              {cap}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Consultation CTA */}
                    <div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--wemanage-cyan)] hover:text-[var(--wemanage-navy)] transition-colors group"
                      >
                        <span>Discuss {ind.title} Solutions</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* 3. CONSULTATION CTA                                          */}
      {/* ============================================================ */}
      <ServiceCtaSection
        title="Have a Business Requirement?"
        description="Let's find a practical solution for your business."
      />
    </>
  );
}
