"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { MessageSquare, AlertCircle, CheckCircle, ChevronDown, Check } from "lucide-react";
import { businessInfo } from "@/data/business-data";

const serviceOptions = [
  { slug: "business-consultancy", label: "Business & Management Consultancy" },
  { slug: "accounting-bookkeeping", label: "Accounting & Bookkeeping" },
  { slug: "financial-reporting", label: "Financial & Management Reporting" },
  { slug: "tax-management", label: "Tax Management & Compliance" },
  { slug: "erp-solutions", label: "ERP Solutions & Implementation" },
  { slug: "excel-google-sheets", label: "Advanced Excel & Google Sheets" },
  { slug: "data-management", label: "Business Data Management & Analysis" },
  { slug: "business-documentation", label: "Business Documentation & Process Development" },
  { slug: "content-copywriting", label: "Content Writing & Copywriting" },
  { slug: "virtual-business-support", label: "Virtual Business & Administrative Support" },
  { slug: "general", label: "General Business Consultation / Other" },
];

function resolveServiceParam(param: string | null): string {
  if (!param) return "business-consultancy";
  const match = serviceOptions.find(
    (s) => s.slug.toLowerCase() === param.toLowerCase()
  );
  return match ? match.slug : "business-consultancy";
}

interface ServiceOption {
  slug: string;
  label: string;
}

interface ServiceSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: ServiceOption[];
}

function ServiceSelect({
  id,
  label,
  value,
  onChange,
  options,
}: ServiceSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const selectedIndex = options.findIndex((opt) => opt.slug === value);
  const selectedOption = options[selectedIndex] || options[0];

  // Close dropdown on outside click or tap
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Keep highlighted item in view while navigating via keyboard
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listboxRef.current) {
      const item = listboxRef.current.children[highlightedIndex] as HTMLElement | undefined;
      if (item) {
        item.scrollIntoView({ block: "nearest" });
      }
    }
  }, [isOpen, highlightedIndex]);

  const handleOpen = () => {
    setIsOpen(true);
    setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleSelect = (slug: string) => {
    onChange(slug);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        if (!isOpen) {
          handleOpen();
        } else {
          setHighlightedIndex((prev) => (prev + 1) % options.length);
        }
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : options.length - 1);
        } else {
          setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        }
        break;
      }
      case "Enter":
      case " ": {
        e.preventDefault();
        if (isOpen) {
          if (highlightedIndex >= 0 && highlightedIndex < options.length) {
            handleSelect(options[highlightedIndex].slug);
          } else {
            setIsOpen(false);
          }
        } else {
          handleOpen();
        }
        break;
      }
      case "Escape": {
        if (isOpen) {
          e.preventDefault();
          handleClose();
        }
        break;
      }
      case "Tab": {
        if (isOpen) {
          setIsOpen(false);
        }
        break;
      }
      case "Home": {
        if (isOpen) {
          e.preventDefault();
          setHighlightedIndex(0);
        }
        break;
      }
      case "End": {
        if (isOpen) {
          e.preventDefault();
          setHighlightedIndex(options.length - 1);
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <label
        id={`${id}-label`}
        htmlFor={`${id}-trigger`}
        className="block text-xs font-semibold text-slate-700 mb-1.5"
      >
        {label}
      </label>

      {/* Hidden input preserves standard form value serialization */}
      <input type="hidden" name={id} value={value} />

      {/* Custom Accessible Trigger */}
      <button
        ref={triggerRef}
        id={`${id}-trigger`}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-labelledby={`${id}-label ${id}-trigger`}
        aria-activedescendant={
          isOpen && highlightedIndex >= 0
            ? `${id}-option-${options[highlightedIndex].slug}`
            : undefined
        }
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            handleOpen();
          }
        }}
        onKeyDown={handleKeyDown}
        className={`w-full min-h-[42px] px-3.5 py-2.5 rounded-lg border bg-white text-sm text-left flex items-center justify-between gap-3 transition-colors cursor-pointer select-none focus:outline-none ${
          isOpen
            ? "border-[var(--wemanage-cyan)] ring-2 ring-[var(--wemanage-cyan)]/20"
            : "border-slate-300 hover:border-slate-400 focus:border-[var(--wemanage-cyan)] focus:ring-2 focus:ring-[var(--wemanage-cyan)]/20"
        }`}
      >
        <span className="flex-1 truncate text-[var(--wemanage-navy)] font-normal">
          {selectedOption.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[var(--wemanage-cyan)]" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Listbox Panel */}
      {isOpen && (
        <ul
          ref={listboxRef}
          id={`${id}-listbox`}
          role="listbox"
          aria-labelledby={`${id}-label`}
          tabIndex={-1}
          className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white border border-slate-200/90 rounded-lg shadow-lg max-h-64 overflow-y-auto py-1 focus:outline-none divide-y divide-slate-50"
        >
          {options.map((opt, index) => {
            const isSelected = opt.slug === value;
            const isHighlighted = index === highlightedIndex;

            return (
              <li
                key={opt.slug}
                id={`${id}-option-${opt.slug}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => handleSelect(opt.slug)}
                className={`px-3.5 py-2.5 text-xs sm:text-sm cursor-pointer flex items-center justify-between gap-3 transition-colors ${
                  isSelected
                    ? "bg-cyan-50/70 text-[var(--wemanage-cyan)] font-semibold"
                    : isHighlighted
                    ? "bg-slate-50 text-[var(--wemanage-navy)]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="flex-1 text-left leading-snug break-words sm:break-normal">
                  {opt.label}
                </span>
                {isSelected && (
                  <Check
                    className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: resolveServiceParam(serviceParam),
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  // Sync service preselection safely if query param changes dynamically
  useEffect(() => {
    if (serviceParam) {
      const resolved = resolveServiceParam(serviceParam);
      setFormData((prev) => (prev.service === resolved ? prev : { ...prev, service: resolved }));
    }
  }, [serviceParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required.";
    }
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your requirement.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedServiceLabel =
      serviceOptions.find((s) => s.slug === formData.service)?.label || formData.service;

    const whatsappMessage = `Hello WeManage,

Name: ${formData.name.trim()}
Company: ${formData.company.trim() || "N/A"}
Email: ${formData.email.trim() || "N/A"}
Phone: ${formData.phone.trim()}
Service: ${selectedServiceLabel}
Requirement: ${formData.message.trim()}`;

    const targetUrl = `https://wa.me/${businessInfo.contact.whatsapp.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(whatsappMessage)}`;

    setIsOpeningWhatsApp(true);
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-2xs">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--wemanage-navy)] tracking-tight">
          Send a Consultation Inquiry
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
          Provide your requirements below. Our team will format your inquiry for direct discussion.
        </p>
      </div>

      {isOpeningWhatsApp && (
        <div
          role="status"
          className="mb-6 p-4 rounded-lg bg-cyan-50/80 border border-[var(--wemanage-cyan)]/30 flex items-start gap-3"
        >
          <CheckCircle className="w-4 h-4 text-[var(--wemanage-cyan)] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="font-semibold text-[var(--wemanage-navy)]">Inquiry Ready:</strong> WhatsApp has been opened in a new tab with your prefilled details.
            If the window did not open,{" "}
            <button
              type="button"
              onClick={handleSubmit}
              className="text-[var(--wemanage-cyan)] hover:text-[var(--wemanage-navy)] underline font-semibold transition-colors"
            >
              click here to retry
            </button>
            .
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Muhammad Ashfaq"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[var(--wemanage-navy)] placeholder-slate-400 focus:outline-none transition-colors ${
                errors.name
                  ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  : "border-slate-300 bg-white focus:border-[var(--wemanage-cyan)] focus:ring-2 focus:ring-[var(--wemanage-cyan)]/20"
              }`}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Company / Business <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Apex Enterprises"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-[var(--wemanage-navy)] placeholder-slate-400 focus:outline-none focus:border-[var(--wemanage-cyan)] focus:ring-2 focus:ring-[var(--wemanage-cyan)]/20 transition-colors"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. contact@company.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[var(--wemanage-navy)] placeholder-slate-400 focus:outline-none transition-colors ${
                errors.email
                  ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  : "border-slate-300 bg-white focus:border-[var(--wemanage-cyan)] focus:ring-2 focus:ring-[var(--wemanage-cyan)]/20"
              }`}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone / WhatsApp <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +92 310 2328040"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[var(--wemanage-navy)] placeholder-slate-400 focus:outline-none transition-colors ${
                errors.phone
                  ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                  : "border-slate-300 bg-white focus:border-[var(--wemanage-cyan)] focus:ring-2 focus:ring-[var(--wemanage-cyan)]/20"
              }`}
            />
            {errors.phone && (
              <p id="phone-error" role="alert" className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Service Interested In */}
        <ServiceSelect
          id="service"
          label="Service Interested In"
          value={formData.service}
          onChange={(newService) =>
            setFormData((prev) => ({ ...prev, service: newService }))
          }
          options={serviceOptions}
        />

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Requirement Details <span className="text-rose-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please summarize your business requirement or operational challenge..."
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[var(--wemanage-navy)] placeholder-slate-400 focus:outline-none transition-colors resize-y min-h-[105px] ${
              errors.message
                ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                : "border-slate-300 bg-white focus:border-[var(--wemanage-cyan)] focus:ring-2 focus:ring-[var(--wemanage-cyan)]/20"
            }`}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--wemanage-cyan)] hover:bg-[#0793c2] text-white font-semibold text-sm px-7 py-3 rounded-lg transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[var(--wemanage-cyan)] focus:ring-offset-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Proceed via WhatsApp</span>
          </button>
          <p className="mt-2.5 text-xs text-slate-400">
            Inquiry details will be formatted and opened directly in WhatsApp (+92 310 2328040).
          </p>
        </div>
      </form>
    </div>
  );
}
