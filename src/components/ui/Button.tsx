"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "call";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-950 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-brand-primary text-navy-950 hover:bg-brand-primary-hover font-semibold shadow-lg shadow-brand-primary/20 focus:ring-brand-primary",
      secondary:
        "bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/40 hover:bg-brand-secondary/25 focus:ring-brand-secondary",
      outline:
        "bg-navy-800/80 text-slate-100 border border-navy-600 hover:bg-navy-700 hover:border-slate-500 focus:ring-slate-400",
      ghost:
        "bg-transparent text-slate-200 hover:bg-navy-800 hover:text-white focus:ring-slate-400",
      call:
        "bg-navy-800/90 text-brand-secondary border border-brand-secondary/50 hover:bg-navy-700 hover:border-brand-secondary font-semibold shadow-md shadow-brand-secondary/10 focus:ring-brand-secondary",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 min-h-[32px]",
      md: "text-sm px-5 py-2.5 gap-2 min-h-[42px]",
      lg: "text-base px-6 py-3.5 gap-2.5 min-h-[50px] font-semibold",
    };

    const widthStyle = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
