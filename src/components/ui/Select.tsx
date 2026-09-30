"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      error,
      helperText,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="text-xs font-medium text-slate-300 tracking-wide"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full">
          <select
            ref={ref}
            id={selectId}
            className={`w-full bg-navy-900/90 text-slate-100 rounded-xl text-sm border px-4 py-3 pr-10 appearance-none transition-all duration-200 focus:outline-none cursor-pointer ${
              error
                ? "border-pink-500 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50"
                : "border-navy-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary/40"
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-navy-900 text-slate-400">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-navy-900 text-slate-100 py-1"
              >
                {opt.label}
              </option>
            ))}
          </select>

          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 pointer-events-none" />
        </div>

        {error && <p className="text-xs text-pink-400 font-medium">{error}</p>}
        {!error && helperText && (
          <p className="text-xs text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
