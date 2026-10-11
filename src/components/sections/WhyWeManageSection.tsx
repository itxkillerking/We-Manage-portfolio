import React from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  Compass,
  Sliders,
  Layers,
  Laptop,
  ClipboardCheck,
  Handshake,
  ArrowRight,
} from "lucide-react";

const strengths = [
  {
    id: "practical-approach",
    title: "Practical Approach",
    description: "Focused on operational reality and real business efficiency.",
    icon: Compass,
  },
  {
    id: "customized-solutions",
    title: "Customized Solutions",
    description: "Tailored specifically to your industry, workflow and goals.",
    icon: Sliders,
  },
  {
    id: "integrated-expertise",
    title: "Integrated Expertise",
    description: "Cross-functional support across finance, tax, ERP and management.",
    icon: Layers,
  },
  {
    id: "technology-enabled",
    title: "Technology-Enabled",
    description: "Leveraging modern ERP, advanced spreadsheets and digital tools.",
    icon: Laptop,
  },
  {
    id: "clear-organized",
    title: "Clear & Organized",
    description: "Structured workflows, accurate records and transparent reporting.",
    icon: ClipboardCheck,
  },
  {
    id: "flexible-support",
    title: "Flexible Support",
    description: "Remote or ongoing assistance adapted to your business pace.",
    icon: Handshake,
  },
];

export function WhyWeManageSection() {
  return (
    <section
      className="w-full bg-white border-b border-slate-200/80 py-10 lg:py-14"
      aria-label="Why WeManage"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: Section Introduction & Restrained CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] mb-2">
              WHY WEMANAGE?
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight leading-tight">
              Your Growth Partner
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We combine expertise, technology and a practical approach to deliver solutions
              that fit your business needs.
            </p>

            <div className="mt-6">
              <PrimaryButton
                href="/why-wemanage"
                variant="outline-cyan"
                className="rounded-full gap-2 px-6 py-2.5 text-sm font-semibold inline-flex"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </div>

          {/* RIGHT: Compact Icon-Led Horizontal Strip with Subtle Vertical Separators */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
              {strengths.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col items-center text-center p-3.5 sm:p-4 group hover:bg-[#F5F9FC] transition-colors ${
                      index !== strengths.length - 1
                        ? "lg:border-r border-slate-200"
                        : ""
                    } ${
                      index % 2 === 0
                        ? "border-r border-slate-200 sm:border-r-0 lg:border-r"
                        : ""
                    } ${
                      index < 4 ? "border-b sm:border-b-0 border-slate-200" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--wemanage-light)] border border-slate-200/80 flex items-center justify-center mb-2.5 group-hover:bg-[var(--wemanage-cyan)]/10 group-hover:border-[var(--wemanage-cyan)]/30 transition-colors">
                      <Icon className="w-5 h-5 text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[var(--wemanage-navy)] leading-snug group-hover:text-[var(--wemanage-cyan)] transition-colors">
                      {item.title}
                    </span>
                    <p className="mt-1.5 text-[11px] text-slate-500 leading-snug">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
