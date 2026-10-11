import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";
import { businessInfo } from "@/data/business-data";

export function ContactStrip() {
  const whatsappUrl = `https://wa.me/${businessInfo.contact.whatsapp.replace("+", "")}`;
  const emailUrl = `mailto:${businessInfo.contact.email}`;

  return (
    <section
      className="w-full bg-[#081F38] border-t border-white/10 py-5 sm:py-6"
      aria-label="Direct Consultation and Contact Strip"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          
          {/* Direct Communication Channels */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full md:w-auto justify-center md:justify-start">
            
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-md p-1"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[var(--wemanage-cyan)]/20 group-hover:border-[var(--wemanage-cyan)] transition-colors">
                <MessageSquare className="w-5 h-5 text-[var(--wemanage-cyan)]" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-medium text-slate-300 uppercase tracking-wider">
                  Chat on WhatsApp
                </span>
                <span className="block text-sm sm:text-[15px] font-bold text-white group-hover:text-[var(--wemanage-cyan)] transition-colors">
                  {businessInfo.contact.whatsappDisplay}
                </span>
              </div>
            </a>

            {/* Subtle Vertical Divider on sm+ */}
            <div className="hidden sm:block w-px h-8 bg-white/15" aria-hidden="true" />

            {/* Email */}
            <a
              href={emailUrl}
              className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-md p-1"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[var(--wemanage-cyan)]/20 group-hover:border-[var(--wemanage-cyan)] transition-colors">
                <Mail className="w-5 h-5 text-[var(--wemanage-cyan)]" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-medium text-slate-300 uppercase tracking-wider">
                  Email Us
                </span>
                <span className="block text-sm sm:text-[15px] font-bold text-white group-hover:text-[var(--wemanage-cyan)] transition-colors">
                  {businessInfo.contact.email}
                </span>
              </div>
            </a>

          </div>

          {/* Gold Accent CTA Button */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F1B72D] hover:bg-[#E2A920] active:scale-[0.99] text-[#102D4F] font-bold text-sm sm:text-[15px] px-8 py-3 rounded-full transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#F1B72D] focus:ring-offset-2 focus:ring-offset-[#081F38]"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#102D4F]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
