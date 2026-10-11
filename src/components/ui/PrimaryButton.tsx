import Link from "next/link";
import React from "react";

interface PrimaryButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "cyan" | "outline-cyan";
  className?: string;
}

export function PrimaryButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 ease-in-out px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary:
      "bg-[var(--wemanage-navy)] text-white hover:bg-[#1a3b61] focus:ring-[var(--wemanage-navy)]",
    secondary:
      "bg-transparent text-[var(--wemanage-navy)] border-2 border-[var(--wemanage-navy)] hover:bg-[var(--wemanage-light)] focus:ring-[var(--wemanage-navy)]",
    gold: "bg-[var(--wemanage-gold)] text-[var(--wemanage-navy)] hover:bg-[#dfa724] focus:ring-[var(--wemanage-gold)]",
    cyan: "bg-[var(--wemanage-cyan)] text-white hover:bg-[#0796c4] focus:ring-[var(--wemanage-cyan)]",
    "outline-cyan":
      "bg-white text-[var(--wemanage-navy)] border-2 border-[var(--wemanage-cyan)] hover:bg-[var(--wemanage-light)] focus:ring-[var(--wemanage-cyan)]",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
