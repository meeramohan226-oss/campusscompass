"use client";

import React from "react";

export interface ToggleOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ToggleProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  size?: "sm" | "md";
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  options,
  value,
  onChange,
  label,
  size = "md",
  className = "",
}) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 text-left ${className}`}>
      {label && (
        <span className="text-xs font-medium text-slate-300 tracking-wide">
          {label}
        </span>
      )}
      <div className="w-full bg-navy-900/90 p-1 rounded-2xl border border-navy-700/80 flex items-center gap-1 shadow-inner">
        {options.map((opt) => {
          const isActive = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`flex-1 flex items-center justify-center gap-2 rounded-xl text-xs font-semibold transition-all duration-200 select-none py-2.5 px-3 ${
                isActive
                  ? "bg-brand-secondary text-navy-950 shadow-md font-bold"
                  : "text-slate-300 hover:text-white hover:bg-navy-800/60"
              }`}
            >
              {opt.icon && <span className="inline-flex shrink-0">{opt.icon}</span>}
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Toggle;
