import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Truck, Factory, Cog, Users, UserCheck } from "lucide-react";

const industryIcons = [
  {
    id: "trading",
    name: "Trading",
    icon: Truck,
    href: "/industries#trading",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    href: "/industries#manufacturing",
  },
  {
    id: "services",
    name: "Services",
    icon: Cog,
    href: "/industries#services",
  },
  {
    id: "startups",
    name: "Startups",
    href: "/industries#startups",
    icon: Users,
  },
  {
    id: "professionals",
    name: "Professionals",
    icon: UserCheck,
    href: "/industries#professionals",
  },
];

const visualPanels = [
  {
    id: "trading",
    title: "Trading",
    image: "/images/industry-trading.jpg",
    href: "/industries#trading",
    alt: "Trading and wholesale warehouse logistics",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: "/images/industry-manufacturing.jpg",
    href: "/industries#manufacturing",
    alt: "Industrial manufacturing plant operations",
  },
  {
    id: "services",
    title: "Services",
    image: "/images/industry-services.jpg",
    href: "/industries#services",
    alt: "Corporate professional services meeting",
  },
  {
    id: "professionals-startups",
    title: "Professionals & Startups",
    image: "/images/industry-professionals.jpg",
    href: "/industries#professionals",
    alt: "Modern workspace for professionals and startups",
  },
];

export function IndustriesSection() {
  return (
    <section
      className="w-full bg-[#F4F8FA] border-b border-slate-200/80 py-10 lg:py-14"
      aria-label="Industries We Serve"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: Section Introduction + Compact Circular Industry Icons */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--wemanage-cyan)] mb-2">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wemanage-navy)] tracking-tight leading-tight">
              Supporting Diverse Industries
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We work with businesses across multiple industries, helping them achieve efficiency,
              compliance and sustainable growth.
            </p>

            {/* 5 Industry Circular Icons in a Compact Row */}
            <div className="mt-7 grid grid-cols-5 gap-2 sm:gap-3">
              {industryIcons.map((ind) => {
                const Icon = ind.icon;
                return (
                  <Link
                    key={ind.id}
                    href={ind.href}
                    className="flex flex-col items-center group text-center focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-md py-1"
                  >
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-b from-white to-[#E1F3FA] border border-[#08A9DD]/40 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[var(--wemanage-cyan)] group-hover:shadow-sm transition-all duration-200">
                      <Icon className="w-5 h-5 text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors" />
                    </div>
                    <span className="mt-2 text-xs font-semibold text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors line-clamp-1">
                      {ind.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Professional Industry Imagery Visual Panels */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {visualPanels.map((panel) => (
                <Link
                  key={panel.id}
                  href={panel.href}
                  className="group relative h-[180px] sm:h-[210px] rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)]"
                >
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {/* Bottom Dark Navy Banner */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102D4F] via-[#102D4F]/90 to-transparent pt-6 pb-2.5 px-2 text-center">
                    <span className="text-xs sm:text-[13px] font-bold text-white tracking-wide block truncate">
                      {panel.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
