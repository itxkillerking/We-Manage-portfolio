import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface ServiceDetailHeroProps {
  title: string;
  tagline: string;
  category?: string;
  serviceSlug?: string;
}

export function ServiceDetailHero({
  title,
  tagline,
  category = "CORE SERVICE",
  serviceSlug,
}: ServiceDetailHeroProps) {
  const consultationHref = serviceSlug ? `/contact?service=${serviceSlug}` : "/contact";
  return (
    <section className="relative bg-gradient-to-b from-[#F5F9FC] via-white to-white border-b border-slate-200/80 py-10 sm:py-14">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[var(--wemanage-cyan)] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--wemanage-cyan)] transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-[var(--wemanage-navy)] truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--wemanage-cyan)] mb-2">
            {category}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[var(--wemanage-navy)] tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <PrimaryButton
              href={consultationHref}
              variant="cyan"
              className="rounded-full gap-2 px-6 py-2.5 text-sm font-semibold shadow-xs"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>

            <Link
              href="/services"
              className="text-xs sm:text-sm font-semibold text-[var(--wemanage-navy)] hover:text-[var(--wemanage-cyan)] transition-colors py-2 px-3"
            >
              &larr; View All Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
