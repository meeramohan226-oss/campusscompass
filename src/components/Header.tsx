"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, User, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export const Header: React.FC = () => {
  const pathname = usePathname();

  // Custom user context badge depending on path
  let rightAction = (
    <Link href="/auth/signup">
      <Button variant="primary" size="sm">
        Join
      </Button>
    </Link>
  );

  if (pathname.startsWith("/scholarships") || pathname.startsWith("/stay")) {
    rightAction = (
      <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-navy-900/90 px-3 py-1.5 rounded-full border border-navy-700">
        <User className="w-3.5 h-3.5 text-brand-secondary" />
        <span>Hi, student</span>
      </div>
    );
  } else if (pathname.startsWith("/college-details")) {
    rightAction = (
      <Link
        href="/profile"
        className="text-xs font-semibold text-brand-secondary hover:underline flex items-center gap-1"
      >
        <span>My profile</span>
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-40 bg-navy-950/80 backdrop-blur-lg border-b border-navy-800/80 px-4 py-3">
      <div className="max-w-md md:max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-brand-primary/20 border border-brand-primary/50 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-brand-primary" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors">
            CampusCompass
          </span>
        </Link>

        {/* Right Action & System Links */}
        <div className="flex items-center gap-2">
          {pathname !== "/design" && (
            <Link
              href="/design"
              className="text-[11px] font-semibold text-brand-secondary hover:text-white bg-brand-secondary/10 hover:bg-brand-secondary/20 px-2.5 py-1 rounded-full border border-brand-secondary/30 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Design System</span>
            </Link>
          )}
          {rightAction}
        </div>
      </div>
    </header>
  );
};

export default Header;
