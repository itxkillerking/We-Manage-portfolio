"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import {
  ChevronDown,
  Briefcase,
  Calculator,
  ChartColumn,
  ReceiptText,
  Database,
  Table2,
  DatabaseZap,
  FileText,
  PenLine,
  Headset,
} from "lucide-react";

// Icon mapping helper
const getIcon = (iconName?: string) => {
  switch (iconName) {
    case "Calculator":
      return Calculator;
    case "ChartColumn":
      return ChartColumn;
    case "ReceiptText":
      return ReceiptText;
    case "Database":
      return Database;
    case "Table2":
      return Table2;
    case "DatabaseZap":
      return DatabaseZap;
    case "FileText":
      return FileText;
    case "PenLine":
      return PenLine;
    case "Headset":
      return Headset;
    case "Briefcase":
    default:
      return Briefcase;
  }
};

export function DesktopNavigation() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const handleToggleClick = (e: React.MouseEvent, name: string) => {
    // If it's already open, close it; otherwise open it
    e.preventDefault();
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  return (
    <nav ref={navRef} className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        const hasDropdown = !!item.megaMenu || !!item.dropdown;
        const isOpen = openMenu === item.name;
        
        // Base classes for the trigger
        const triggerClasses = `flex items-center gap-1 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm ${
          isActive
            ? "text-[var(--wemanage-cyan)]"
            : "text-[var(--wemanage-navy)] hover:text-[var(--wemanage-cyan)]"
        }`;

        return (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
            onMouseLeave={() => hasDropdown && handleMouseLeave()}
          >
            {hasDropdown ? (
              <button
                type="button"
                className={triggerClasses}
                aria-expanded={isOpen}
                onClick={(e) => handleToggleClick(e, item.name)}
                onFocus={() => handleMouseEnter(item.name)}
              >
                {item.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                href={item.href}
                className={triggerClasses}
                onClick={() => setOpenMenu(null)}
              >
                {item.name}
              </Link>
            )}

            {/* Mega Menu for Services */}
            {item.megaMenu && isOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-6">
                  {item.megaMenu.map((subItem) => {
                    const Icon = getIcon(subItem.icon);
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="group flex items-start gap-4 p-2 rounded-lg hover:bg-[var(--wemanage-light)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)]"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="mt-1 p-2 bg-[var(--wemanage-light)] group-hover:bg-white rounded-md text-[var(--wemanage-cyan)] transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[var(--wemanage-navy)] group-hover:text-[var(--wemanage-cyan)] transition-colors">
                            {subItem.name}
                          </div>
                          <p className="text-xs text-[var(--wemanage-text)] mt-1 line-clamp-1">
                            {subItem.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="bg-[var(--wemanage-light)] p-4 text-center border-t border-gray-100">
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-[var(--wemanage-navy)] hover:text-[var(--wemanage-cyan)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] rounded-sm px-2 py-1 inline-block"
                    onClick={() => setOpenMenu(null)}
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              </div>
            )}

            {/* Standard Dropdown for Industries */}
            {item.dropdown && isOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2 flex flex-col">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="px-4 py-3 text-sm font-semibold text-[var(--wemanage-navy)] hover:text-[var(--wemanage-cyan)] hover:bg-[var(--wemanage-light)] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)]"
                      onClick={() => setOpenMenu(null)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                  <div className="h-px bg-gray-100 my-1 mx-2"></div>
                  <Link
                    href="/industries"
                    className="px-4 py-3 text-sm font-semibold text-[var(--wemanage-cyan)] hover:bg-[var(--wemanage-light)] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)]"
                    onClick={() => setOpenMenu(null)}
                  >
                    View All Industries &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
