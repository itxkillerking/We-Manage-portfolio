import React from "react";

const steps = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the client's business, requirement and existing situation.",
  },
  {
    step: "02",
    title: "Organize",
    description: "Review and organize relevant information, records, processes or data.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Develop a practical solution, system, report, document or process according to the requirement.",
  },
  {
    step: "04",
    title: "Support",
    description: "Where required, provide ongoing assistance, improvement and support.",
  },
];

export function OurApproachSection() {
  return (
    <section className="w-full bg-[#F5F9FC] border-t border-b border-slate-200/80 py-10 sm:py-12" aria-label="Our Approach">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)] mb-1.5">
            OUR APPROACH
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight">
            How We Work With You
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
            A practical, organized engagement method designed to solve specific business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-lg p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:border-[var(--wemanage-cyan)]/60 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-cyan)] block mb-2 font-mono">
                {item.step}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[var(--wemanage-navy)] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
