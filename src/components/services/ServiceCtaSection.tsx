import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";
import { businessInfo } from "@/data/business-data";

interface ServiceCtaSectionProps {
  title?: string;
  description?: string;
  serviceSlug?: string;
}

export function ServiceCtaSection({
  title = "Have a Business Requirement?",
  description = "Let's find a practical solution for your business.",
  serviceSlug,
}: ServiceCtaSectionProps) {
  const whatsappUrl = `https://wa.me/${businessInfo.contact.whatsapp.replace("+", "")}`;
  const emailUrl = `mailto:${businessInfo.contact.email}`;
  const consultationHref = serviceSlug ? `/contact?service=${serviceSlug}` : "/contact";

  return (
    <section className="w-full bg-[#0C2F54] text-white py-12 sm:py-16" aria-label="Consultation Call to Action">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)] mb-2">
            LET&apos;S WORK TOGETHER
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto font-normal">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={consultationHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F1B72D] hover:bg-[#E0A71F] text-[#102D4F] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#F1B72D]"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#102D4F]" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[var(--wemanage-cyan)] bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)]"
            >
              <MessageSquare className="w-4 h-4 text-[var(--wemanage-cyan)]" />
              <span>WhatsApp: {businessInfo.contact.whatsappDisplay}</span>
            </a>

            <a
              href={emailUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[var(--wemanage-cyan)] bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)]"
            >
              <Mail className="w-4 h-4 text-[var(--wemanage-cyan)]" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
