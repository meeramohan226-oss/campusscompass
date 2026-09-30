"use client";

import React, { useState, useMemo } from "react";
import { Search, Home, MapPin, Phone, Building, RefreshCw, CheckSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Chip from "@/components/ui/Chip";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import FormError from "@/components/ui/FormError";
import { MOCK_STAYS, StayListing } from "@/lib/mockData";

export default function StayPage() {
  const [mode, setMode] = useState<"search" | "post">("search");

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [collegeFilter, setCollegeFilter] = useState("");
  const [placeFilter, setPlaceFilter] = useState("");
  const [sharingFilter, setSharingFilter] = useState("");
  const [maxRent, setMaxRent] = useState("");

  // Post Listing Form State
  const [name, setName] = useState("");
  const [type, setType] = useState<"PG" | "Hostel" | "Shared Room">("PG");
  const [place, setPlace] = useState("");
  const [nearbyColleges, setNearbyColleges] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedSharing, setSelectedSharing] = useState<string[]>(["2 share"]);
  const [rules, setRules] = useState("");
  const [formError, setFormError] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);

  const [stays, setStays] = useState<StayListing[]>(MOCK_STAYS);

  const filteredStays = useMemo(() => {
    return stays.filter((stay) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = stay.name.toLowerCase().includes(q);
        const matchesLoc = stay.location.toLowerCase().includes(q);
        const matchesColleges = stay.nearbyColleges.some((c) => c.toLowerCase().includes(q));
        if (!matchesName && !matchesLoc && !matchesColleges) return false;
      }
      if (collegeFilter && !stay.nearbyColleges.some((c) => c.toLowerCase().includes(collegeFilter.toLowerCase()))) {
        return false;
      }
      if (placeFilter && !stay.location.toLowerCase().includes(placeFilter.toLowerCase())) {
        return false;
      }
      if (maxRent && stay.monthlyRent > Number(maxRent)) {
        return false;
      }
      return true;
    });
  }, [stays, searchQuery, collegeFilter, placeFilter, maxRent]);

  const handleReset = () => {
    setSearchQuery("");
    setCollegeFilter("");
    setPlaceFilter("");
    setSharingFilter("");
    setMaxRent("");
  };

  const toggleSharingCheckbox = (val: string) => {
    if (selectedSharing.includes(val)) {
      setSelectedSharing(selectedSharing.filter((item) => item !== val));
    } else {
      setSelectedSharing([...selectedSharing, val]);
    }
  };

  const handlePostAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactNumber || !monthlyRent) {
      setFormError("Please fill out PG name, monthly rent, and contact number.");
      return;
    }
    setFormError("");

    const newStay: StayListing = {
      id: `s_${Date.now()}`,
      name,
      type,
      location: place || "Thrissur Town",
      distanceFromCampus: "Near campus",
      bedsAvailable: "Bed vacancy open",
      monthlyRent: Number(monthlyRent),
      nearbyColleges: nearbyColleges ? nearbyColleges.split(",").map((s) => s.trim()) : ["Govt Engineering College"],
      sharingAvailable: selectedSharing.length ? selectedSharing : ["2 share"],
      phone: contactNumber,
      rules: rules || "Standard hostel gate timings apply.",
    };

    setStays([newStay, ...stays]);
    setPostSuccess(true);
    setName("");
    setPlace("");
    setNearbyColleges("");
    setMonthlyRent("");
    setContactNumber("");
    setRules("");

    setTimeout(() => {
      setPostSuccess(false);
      setMode("search");
    }, 1200);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Headings */}
      <div className="space-y-1 text-left">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">Stay</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Find a PG or hostel near your college, or list one you own.
        </p>
      </div>

      {/* Mode Dual Action Cards Selector */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setMode("search")}
          className={`p-4 rounded-2xl border text-left transition-all duration-200 select-none ${
            mode === "search"
              ? "bg-navy-900 border-brand-primary ring-1 ring-brand-primary/50 shadow-lg"
              : "bg-navy-900/60 border-navy-700 opacity-70 hover:opacity-100"
          }`}
        >
          <Search className="w-5 h-5 text-brand-primary mb-2" />
          <p className="font-serif text-sm font-bold text-white">Search availability</p>
          <p className="text-[11px] text-slate-400">Find a PG or hostel</p>
        </button>

        <button
          type="button"
          onClick={() => setMode("post")}
          className={`p-4 rounded-2xl border text-left transition-all duration-200 select-none ${
            mode === "post"
              ? "bg-navy-900 border-brand-primary ring-1 ring-brand-primary/50 shadow-lg"
              : "bg-navy-900/60 border-navy-700 opacity-70 hover:opacity-100"
          }`}
        >
          <Home className="w-5 h-5 text-brand-primary mb-2" />
          <p className="font-serif text-sm font-bold text-white">Post availability</p>
          <p className="text-[11px] text-slate-400">List your PG or hostel</p>
        </button>
      </div>

      {/* Mode 1: Search Availability */}
      {mode === "search" && (
        <div className="space-y-5">
          {/* Search Input */}
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search by PG / hostel name, college..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="w-4 h-4 text-slate-400" />}
            />
            <Button variant="primary" size="md" className="shrink-0 px-5">
              Search
            </Button>
          </div>

          {/* Filter Form Card */}
          <Card className="space-y-3">
            <div className="flex items-center justify-between border-b border-navy-800 pb-2">
              <span className="text-xs font-semibold text-white">Filter PGs & Hostels</span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-brand-secondary flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Name of college"
                placeholder="College name"
                value={collegeFilter}
                onChange={(e) => setCollegeFilter(e.target.value)}
              />
              <Input
                label="Place"
                placeholder="Town / area"
                value={placeFilter}
                onChange={(e) => setPlaceFilter(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Select
                label="Sharing"
                placeholder="Any"
                value={sharingFilter}
                onChange={(e) => setSharingFilter(e.target.value)}
                options={[
                  { value: "any", label: "Any sharing" },
                  { value: "2 share", label: "2 share" },
                  { value: "4 share", label: "4 share" },
                ]}
              />

              <Input
                label="Max monthly rent (₹)"
                placeholder="e.g. 4000"
                type="number"
                value={maxRent}
                onChange={(e) => setMaxRent(e.target.value)}
              />
            </div>
          </Card>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-white">
              {filteredStays.length} places found
            </h3>
          </div>

          {/* Results List */}
          {filteredStays.length === 0 ? (
            <EmptyState
              title="No places found"
              description="Try adjusting rent limit or area filters."
              actionLabel="Reset filters"
              onAction={handleReset}
            />
          ) : (
            <div className="space-y-4">
              {filteredStays.map((stay) => (
                <Card key={stay.id} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{stay.name}</CardTitle>
                      <p className="text-xs text-slate-400">
                        {stay.type} · {stay.location}
                      </p>
                    </div>
                    <Chip variant="currency">
                      ₹{stay.monthlyRent.toLocaleString()}/mo
                    </Chip>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {stay.sharingAvailable.map((sh) => (
                      <Chip key={sh} variant="warning" size="sm">
                        {sh}
                      </Chip>
                    ))}
                    {stay.nearbyColleges.map((col) => (
                      <Chip key={col} variant="dark" size="sm">
                        Near {col}
                      </Chip>
                    ))}
                  </div>

                  {stay.rules && (
                    <p className="text-xs text-slate-300 bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                      Rules: {stay.rules}
                    </p>
                  )}

                  <div className="pt-2 flex justify-end">
                    <a href={`tel:${stay.phone}`}>
                      <Button variant="call" size="sm" leftIcon={<Phone className="w-3.5 h-3.5" />}>
                        Call {stay.phone}
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mode 2: Post Availability */}
      {mode === "post" && (
        <Card className="space-y-4">
          <div className="border-b border-navy-800 pb-3 text-left">
            <h3 className="font-serif text-lg font-bold text-white">List your PG or hostel</h3>
            <p className="text-xs text-slate-400">Provide occupancy and contact details for student inquiries.</p>
          </div>

          <FormError message={formError} />

          {postSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              ✓ PG availability posted successfully! Switching to stay directory...
            </div>
          )}

          <form onSubmit={handlePostAvailability} className="space-y-4">
            <Input
              label="Name of PG or hostel"
              placeholder="e.g. Sunrise Boys PG"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              options={[
                { value: "PG", label: "PG (Paying Guest)" },
                { value: "Hostel", label: "Hostel" },
                { value: "Shared Room", label: "Shared Room / Apartment" },
              ]}
            />

            <Input
              label="Place"
              placeholder="Town / area (e.g. Thrissur Town, Viyyur)"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />

            <Input
              label="Colleges nearby"
              placeholder="Separate with commas, e.g. Govt Engg College, St Thomas"
              value={nearbyColleges}
              onChange={(e) => setNearbyColleges(e.target.value)}
            />

            <Input
              label="Monthly rent (₹)"
              placeholder="e.g. 3800"
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
            />

            <Input
              label="Contact number"
              placeholder="10-digit mobile number"
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />

            {/* Checkboxes Row */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-slate-300">Sharing available</label>
              <div className="flex gap-4 text-xs text-slate-300 pt-1">
                {["2 share", "4 share", "Any"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedSharing.includes(opt)}
                      onChange={() => toggleSharingCheckbox(opt)}
                      className="w-4 h-4 rounded border-navy-700 bg-navy-900 text-brand-primary focus:ring-brand-primary/50"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-slate-300">Rules and regulations</label>
              <textarea
                rows={3}
                className="w-full bg-navy-900/90 text-slate-100 placeholder:text-slate-500 rounded-xl text-sm border border-navy-700 p-3 focus:outline-none focus:border-brand-secondary"
                placeholder="e.g. Gate closes at 9:30 PM. No smoking. Visitors only in the common area."
                value={rules}
                onChange={(e) => setRules(e.target.value)}
              />
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth className="mt-2">
              Post availability
            </Button>
          </form>

          <p className="text-[11px] text-slate-500 text-center pt-2">
            Sample listings for design preview. Listings posted here are kept only while this page is open.
          </p>
        </Card>
      )}
    </div>
  );
}
