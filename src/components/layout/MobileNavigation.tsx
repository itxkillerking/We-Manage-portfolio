"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Close when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleAccordion = (name: string) => {
    setOpenAccordion((prev) => (prev === name ? null : name));
  };

  const menuModal = isOpen && mounted ? (
    <div
      className="fixed inset-0 z-[9999] w-screen h-screen min-h-screen h-[100dvh] overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Full Viewport Backdrop */}
      <div
        className="fixed inset-0 w-full h-full bg-[var(--wemanage-navy)]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menu Container: Full screen on phone & compact tablet (up to 768px), side-drawer on tablet */}
      <div
        className="relative z-10 w-full md:max-w-[420px] md:ml-auto h-full min-h-screen h-[100dvh] bg-white shadow-2xl flex flex-col justify-between"
      >
        {/* Top Header inside menu */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0 bg-white">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm"
          >
            <Image
              src="/images/background-remove-logo.png"
              alt="WeManage Consultancy Services"
              width={316}
              height={170}
              className="w-auto h-[48px] sm:h-[54px] object-contain"
            />
          </Link>
          <button
            type="button"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:text-[var(--wemanage-navy)] hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-1">
          {navigation.map((item) => {
            const hasDropdown = !!item.megaMenu || !!item.dropdown;
            const isExpanded = openAccordion === item.name;

            if (hasDropdown) {
              const subItems = item.megaMenu || item.dropdown || [];
              return (
                <div key={item.name} className="flex flex-col border-b border-slate-100 last:border-0 pb-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-3.5 min-h-[44px] text-base font-semibold text-[var(--wemanage-navy)] focus:outline-none text-left"
                    onClick={() => toggleAccordion(item.name)}
                    aria-expanded={isExpanded}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isExpanded ? "rotate-180 text-[var(--wemanage-cyan)]" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`flex flex-col pl-3 border-l-2 border-[var(--wemanage-cyan)]/30 overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-[800px] mt-1 mb-3 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="py-2.5 min-h-[44px] flex items-center text-sm font-medium text-slate-600 hover:text-[var(--wemanage-cyan)] break-words leading-snug"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      className="py-2.5 min-h-[44px] flex items-center text-sm font-bold text-[var(--wemanage-cyan)] hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      View All {item.name} &rarr;
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`py-3.5 min-h-[44px] flex items-center text-base font-semibold border-b border-slate-100 last:border-0 ${
                  pathname === item.href ? "text-[var(--wemanage-cyan)]" : "text-[var(--wemanage-navy)] hover:text-[var(--wemanage-cyan)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="p-5 border-t border-gray-100 bg-[var(--wemanage-light)] flex-shrink-0">
          <PrimaryButton
            href="/contact"
            variant="cyan"
            className="w-full rounded-full gap-2 py-3.5 min-h-[48px] justify-center text-center font-semibold text-sm"
            onClick={() => setIsOpen(false)}
          >
            <span>Get a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--wemanage-navy)] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-md"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open main menu"
      >
        <Menu className="w-7 h-7" />
      </button>

      {mounted && typeof document !== "undefined" && menuModal ? createPortal(menuModal, document.body) : null}
    </div>
  );
}
