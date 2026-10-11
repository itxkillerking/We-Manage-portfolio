import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessInfo, coreServices, industries } from "@/data/business-data";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#071b31] text-gray-300 pt-16 pb-8 border-t-4 border-[var(--wemanage-gold)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link 
              href="/" 
              className="mb-6 inline-block focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm"
              aria-label="WeManage Consultancy Services"
            >
              <Image
                src="/images/wemanage-logo-white.png"
                alt="WeManage Consultancy Services"
                width={316}
                height={170}
                className="w-auto h-[58px] sm:h-[66px] object-contain"
              />
            </Link>
            <p className="text-sm text-slate-200 mb-6 max-w-sm leading-relaxed">
              {businessInfo.hero.description}
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={`https://wa.me/${businessInfo.contact.whatsapp.replace('+', '')}`} 
                className="inline-flex items-center gap-3 text-white hover:text-[var(--wemanage-cyan)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="font-semibold text-white">{businessInfo.contact.whatsappDisplay}</span>
              </a>
              <a 
                href={`mailto:${businessInfo.contact.email}`} 
                className="inline-flex items-center gap-3 text-white hover:text-[var(--wemanage-cyan)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[var(--wemanage-cyan)]" />
                </div>
                <span className="text-slate-100">{businessInfo.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm">About Us</Link></li>
              <li><Link href="/why-wemanage" className="text-sm text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm">Why WeManage</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Core Services</h3>
            <ul className="flex flex-col gap-3">
              {coreServices.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="text-sm text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm line-clamp-1">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[var(--wemanage-cyan)] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm font-semibold">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Industries</h3>
            <ul className="flex flex-col gap-3">
              {industries.map((industry) => (
                <li key={industry.id}>
                  <Link href={`/industries#${industry.id}`} className="text-sm text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-300">
          <p>&copy; {currentYear} {businessInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-[var(--wemanage-cyan)]">Practical Solutions. Better Management. Stronger Business.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
