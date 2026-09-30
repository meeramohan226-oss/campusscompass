"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

export interface FormErrorProps {
  message?: string;
  className?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message, className = "" }) => {
  if (!message) return null;

  return (
    <div
      className={`flex items-center gap-2 p-3 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-400 text-xs font-medium animate-fade-in ${className}`}
    >
      <AlertCircle className="w-4 h-4 shrink-0 text-pink-400" />
      <span>{message}</span>
    </div>
  );
};

export default FormError;
