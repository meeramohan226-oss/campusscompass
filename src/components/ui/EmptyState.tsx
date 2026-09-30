"use client";

import React from "react";
import { SearchX } from "lucide-react";
import Button from "./Button";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No results found",
  description = "We couldn't find anything matching your search criteria. Try resetting filters or searching with different keywords.",
  icon = <SearchX className="w-10 h-10 text-brand-secondary/60" />,
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-navy-900/60 border border-navy-800 my-4 ${className}`}
    >
      <div className="p-4 rounded-full bg-navy-800/80 mb-3 border border-navy-700">
        {icon}
      </div>
      <h4 className="font-serif text-base font-semibold text-white mb-1">
        {title}
      </h4>
      <p className="text-xs text-slate-400 max-w-sm mb-5 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
