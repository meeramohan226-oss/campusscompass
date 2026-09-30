"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightAction?: React.ReactNode;
  isPassword?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightAction,
      isPassword = false,
      type = "text",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    const actualType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-slate-300 tracking-wide"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={actualType}
            className={`w-full bg-navy-900/90 text-slate-100 placeholder:text-slate-500 rounded-xl text-sm border px-4 py-3 transition-all duration-200 focus:outline-none ${
              leftIcon ? "pl-10" : ""
            } ${
              isPassword || rightAction ? "pr-14" : ""
            } ${
              error
                ? "border-pink-500 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50"
                : "border-navy-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary/40"
            } ${className}`}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-xs font-semibold text-brand-secondary hover:text-brand-secondary-hover px-1 py-0.5 rounded transition-colors"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}

          {!isPassword && rightAction && (
            <div className="absolute right-2.5 flex items-center">{rightAction}</div>
          )}
        </div>

        {error && <p className="text-xs text-pink-400 font-medium">{error}</p>}
        {!error && helperText && (
          <p className="text-xs text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
