import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Building2, TrendingUp, Compass, FileCheck } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { OurApproachSection } from "@/components/services/OurApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";

export const metadata: Metadata = {
  title: "Business & Management Consultancy | WeManage Consultancy Services",
  description:
    "We provide practical business and management support based on the specific requirements of each client. Planning, operational organization and performance improvement.",
};

const solutions = [
  "Business planning support",
  "Business organization",
  "Operational planning",
  "Management support",
  "Process improvement",
  "Business documentation",
  "Administrative systems",
  "Management information",
  "Business performance analysis",
  "Customized business solutions",
];

export default function BusinessConsultancyPage() {
  return (
    <>
      {/* 1. Internal Hero */}
      <ServiceDetailHero
        title="Business & Management Consultancy"
        tagline="Practical business and operational guidance designed to help companies, startups and professionals organize processes and achieve steady growth."
        category="MANAGEMENT SOLUTIONS"
        serviceSlug="business-consultancy"
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
                Practical Support Built for Real Business Realities
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                We provide practical business and management support based on the specific requirements of each client.
              </p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
                Whether you need to organize internal departments, clarify management roles, optimize operational workflows, or establish clear performance metrics, WeManage provides hands-on, objective consulting support that delivers real operational clarity.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--wemanage-light)] border border-slate-200 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="text-sm font-semibold text-[var(--wemanage-navy)]">
                  Tailored to companies, entrepreneurs & professionals
                </span>
              </div>
            </div>

            {/* 3. Services / Solutions Included */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/90">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--wemanage-navy)] mb-2">
                Solutions & Support Included
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Comprehensive consulting coverage spanning strategy, internal procedures and management control:
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
        title="Ready to Improve Your Business Management?"
        description="Connect with WeManage today to discuss practical, customized business management solutions tailored specifically to your operational requirements."
        serviceSlug="business-consultancy"
      />
    </>
  );
}
