"use client";

import React from "react";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: "underline" | "pills";
  fullWidth?: boolean;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = "underline",
  fullWidth = true,
  className = "",
}) => {
  if (variant === "pills") {
    return (
      <div
        className={`flex items-center gap-2 overflow-x-auto no-scrollbar py-1 ${
          fullWidth ? "w-full" : ""
        } ${className}`}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 shrink-0 select-none ${
                isActive
                  ? "bg-brand-primary text-navy-950 shadow-md shadow-brand-primary/20"
                  : "bg-navy-900/90 text-slate-300 border border-navy-700 hover:bg-navy-800 hover:text-white"
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${
                    isActive ? "bg-navy-950 text-brand-primary" : "bg-navy-800 text-slate-400"
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`border-b border-navy-800 ${fullWidth ? "w-full" : ""} ${className}`}>
      <nav className={`flex ${fullWidth ? "w-full" : "gap-6"}`} aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all duration-200 select-none flex items-center justify-center gap-2 ${
                isActive
                  ? "border-brand-primary text-slate-100"
                  : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className="px-1.5 py-0.5 text-[10px] bg-navy-800 text-brand-secondary rounded-full font-bold">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Tabs;
