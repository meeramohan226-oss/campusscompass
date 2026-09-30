"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  GraduationCap,
  Briefcase,
  Bus,
  Trophy,
  Home as HomeIcon,
  TrendingUp,
  Rocket,
  Phone,
  ChevronRight,
  MessageSquare,
  Users,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Chip from "@/components/ui/Chip";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { MOCK_STAYS, MOCK_MENTORS } from "@/lib/mockData";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleGlobalSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase();
    if (query.includes("scholarship") || query.includes("merit") || query.includes("grant")) {
      router.push(`/scholarships?q=${encodeURIComponent(searchQuery)}`);
    } else if (query.includes("pg") || query.includes("hostel") || query.includes("room") || query.includes("stay")) {
      router.push(`/stay?q=${encodeURIComponent(searchQuery)}`);
    } else if (query.includes("bus") || query.includes("ride") || query.includes("vehicle") || query.includes("transport")) {
      router.push(`/transport?q=${encodeURIComponent(searchQuery)}`);
    } else if (query.includes("job") || query.includes("work") || query.includes("tutor")) {
      router.push(`/jobs?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push(`/college-details?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <section className="text-left space-y-4 pt-2">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Your whole college life, in one place.
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
          Scholarships, part-time work, deadlines, PG stays and honest advice from seniors, so you stop hunting through ten different groups.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleGlobalSearch} className="pt-2">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search scholarships, PGs, exam dates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="w-4 h-4 text-slate-400" />}
              className="rounded-full shadow-lg"
            />
            <Button type="submit" variant="primary" size="md" className="shrink-0 px-6">
              Search
            </Button>
          </div>
        </form>

        {/* Quick Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2">
          <Link href="/scholarships">
            <Chip variant="tag" icon={<GraduationCap className="w-3.5 h-3.5 text-brand-secondary" />}>
              Scholarships
            </Chip>
          </Link>
          <Link href="/jobs">
            <Chip variant="tag" icon={<Briefcase className="w-3.5 h-3.5 text-brand-primary" />}>
              Part-time
            </Chip>
          </Link>
          <Link href="/transport">
            <Chip variant="tag" icon={<Bus className="w-3.5 h-3.5 text-brand-secondary" />}>
              Transport
            </Chip>
          </Link>
          <Link href="/college-details">
            <Chip variant="tag" icon={<Trophy className="w-3.5 h-3.5 text-amber-400" />}>
              Sports
            </Chip>
          </Link>
          <Link href="/stay">
            <Chip variant="tag" icon={<HomeIcon className="w-3.5 h-3.5 text-emerald-400" />}>
              PG
            </Chip>
          </Link>
        </div>
      </section>

      {/* Section 1: Everyday Essentials */}
      <section className="space-y-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">Everyday essentials</h2>
          <p className="text-xs text-slate-400">The things every student asks about in the first month.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Scholarships */}
          <Card variant="interactive" onClick={() => router.push("/scholarships")}>
            <div className="p-2 w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 text-brand-secondary flex items-center justify-center mb-3">
              <GraduationCap className="w-6 h-6" />
            </div>
            <CardTitle>Scholarships</CardTitle>
            <CardDescription>
              Government and private scholarships with eligibility and last dates.
            </CardDescription>
            <div className="pt-3 flex items-center gap-1 text-xs font-semibold text-brand-secondary">
              <span>24 open now</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Card 2: Part-time works */}
          <Card variant="interactive" onClick={() => router.push("/jobs")}>
            <div className="p-2 w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 text-brand-primary flex items-center justify-center mb-3">
              <Briefcase className="w-6 h-6" />
            </div>
            <CardTitle>Part-time works</CardTitle>
            <CardDescription>
              Weekend and evening jobs that fit around classes.
            </CardDescription>
            <div className="pt-3 flex items-center gap-1 text-xs font-semibold text-brand-secondary">
              <span>Browse jobs</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>

          {/* Card 3: Transport */}
          <Card variant="interactive" onClick={() => router.push("/transport")}>
            <div className="p-2 w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 text-brand-secondary flex items-center justify-center mb-3">
              <Bus className="w-6 h-6" />
            </div>
            <CardTitle>Transport</CardTitle>
            <CardDescription>
              Bus timings, routes and concession details near your campus.
            </CardDescription>
            <div className="pt-3 flex items-center gap-1 text-xs font-semibold text-brand-secondary">
              <span>Find routes</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Card>
        </div>
      </section>

      {/* Section 2: Places to stay */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">Places to stay</h2>
            <p className="text-xs text-slate-400">PG availability with direct contact details.</p>
          </div>
          <Link href="/stay" className="text-xs font-semibold text-brand-secondary hover:underline">
            View all
          </Link>
        </div>

        <div className="space-y-3">
          {MOCK_STAYS.map((stay) => (
            <Card key={stay.id} className="flex items-center justify-between gap-4 p-4">
              <div className="space-y-1">
                <h4 className="font-serif text-base font-semibold text-white">{stay.name}</h4>
                <p className="text-xs text-slate-400">
                  {stay.distanceFromCampus} · <span className="text-slate-300">{stay.bedsAvailable}</span> ·{" "}
                  <span className="text-emerald-400 font-semibold">₹{stay.monthlyRent.toLocaleString()}/mo</span>
                </p>
              </div>

              <a href={`tel:${stay.phone}`}>
                <Button variant="call" size="sm" leftIcon={<Phone className="w-3.5 h-3.5" />}>
                  Call
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: College details for freshers */}
      <section className="space-y-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">College details for freshers</h2>
          <p className="text-xs text-slate-400">Shared by students who are actually there.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="interactive" onClick={() => router.push("/college-details?tab=placement")}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-brand-primary" />
              <CardTitle>Placement details</CardTitle>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Companies that visit and typical roles</li>
              <li>Packages reported by last year&apos;s batch</li>
              <li>Prep tips from placed seniors</li>
            </ul>
          </Card>

          <Card variant="interactive" onClick={() => router.push("/college-details?tab=after_college")}>
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-5 h-5 text-brand-primary" />
              <CardTitle>After college</CardTitle>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Further studies and where seniors went</li>
              <li>Jobs by branch</li>
              <li>Competitive exams: dates, syllabus, resources</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Section 4: Campus Connect Preview */}
      <section className="pt-2">
        <Card className="border border-brand-primary/30 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 p-6 space-y-5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Campus Connect</span>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-white">
              First year? Ask someone who&apos;s been there.
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
              Get matched with seniors from your college for practical guidance on classes, labs, hostels and what to actually focus on.
            </p>
          </div>

          <Link href="/campus-connect">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              Find a senior
            </Button>
          </Link>

          {/* Mentor Previews */}
          <div className="pt-3 border-t border-navy-800 space-y-3">
            {MOCK_MENTORS.slice(0, 3).map((mentor) => (
              <div key={mentor.id} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-primary text-navy-950 font-bold text-xs flex items-center justify-center shrink-0">
                  {mentor.avatarInitials}
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">
                    {mentor.name} · <span className="text-slate-400">{mentor.role.split(",")[0]}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">{mentor.tags.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="pt-6 pb-4 text-center border-t border-navy-800/60">
        <p className="text-xs text-slate-500">
          CampusCompass · Built by students. Sample data shown
        </p>
      </footer>
    </div>
  );
}
