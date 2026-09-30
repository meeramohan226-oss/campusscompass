"use client";

import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered" | "interactive";
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const variantStyles = {
    default: "bg-navy-900/90 border border-navy-700/80 text-slate-100 shadow-xl",
    glass: "glass-panel text-slate-100 shadow-xl",
    bordered: "bg-navy-950 border border-navy-700 text-slate-100",
    interactive:
      "bg-navy-900/90 border border-navy-700/80 text-slate-100 shadow-xl transition-all duration-200 hover:border-brand-primary/50 hover:shadow-brand-primary/5 cursor-pointer active:scale-[0.99]",
  };

  return (
    <div
      className={`rounded-2xl p-5 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`flex flex-col gap-1 mb-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <h3
    className={`font-serif text-lg font-semibold tracking-tight text-white ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <p className={`text-xs text-slate-400 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`space-y-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div
    className={`flex items-center justify-between pt-4 mt-4 border-t border-navy-800 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
