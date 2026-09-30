"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap, Bus, Briefcase, MessageSquare } from "lucide-react";

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/scholarships", label: "Scholarships", icon: GraduationCap },
    { href: "/transport", label: "Transport", icon: Bus },
    { href: "/stay", label: "Stay & Jobs", icon: Briefcase },
    { href: "/campus-connect", label: "Connect", icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/90 backdrop-blur-xl border-t border-navy-800/80 px-2 py-2 md:hidden">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 select-none ${
                isActive
                  ? "text-brand-secondary font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-all ${
                  isActive ? "bg-brand-secondary/15 ring-2 ring-brand-secondary/30" : ""
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-brand-secondary" : ""}`} />
              </div>
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
