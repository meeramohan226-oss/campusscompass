"use client";

import React from "react";
import { X } from "lucide-react";

export interface ChipProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "currency" | "tag" | "warning";
  size?: "sm" | "md";
  active?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = "tag",
  size = "md",
  active = false,
  onClick,
  onRemove,
  icon,
  className = "",
}) => {
  const isClickable = Boolean(onClick);

  const baseStyles =
    "inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200 select-none whitespace-nowrap";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1",
    md: "text-xs px-3.5 py-1.5",
  };

  const variantStyles = {
    primary: active
      ? "bg-brand-primary text-navy-950 font-semibold shadow-md shadow-brand-primary/20"
      : "bg-brand-primary/15 text-brand-primary border border-brand-primary/40 hover:bg-brand-primary/25",
    secondary: active
      ? "bg-brand-secondary text-navy-950 font-semibold shadow-md shadow-brand-secondary/20"
      : "bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/40 hover:bg-brand-secondary/25",
    currency: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold",
    dark: active
      ? "bg-slate-100 text-navy-950 font-semibold"
      : "bg-navy-800 text-slate-300 border border-navy-700 hover:bg-navy-700 hover:text-white",
    tag: active
      ? "bg-brand-secondary/20 text-brand-secondary border border-brand-secondary"
      : "bg-navy-900/80 text-slate-300 border border-navy-700 hover:border-slate-500",
    warning: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  };

  return (
    <span
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        isClickable ? "cursor-pointer active:scale-95" : ""
      } ${className}`}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:opacity-75 focus:outline-none rounded-full"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};

export default Chip;
