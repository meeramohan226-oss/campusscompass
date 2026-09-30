"use client";

import React, { useState, useMemo } from "react";
import { Search, Briefcase, MapPin, Clock, Phone, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Chip from "@/components/ui/Chip";
import Tabs from "@/components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import FormError from "@/components/ui/FormError";
import { MOCK_JOBS, PartTimeJob } from "@/lib/mockData";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState("find_jobs");

  // Search & Filter State
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [minPay, setMinPay] = useState("");

  // Post Job Form State
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [formError, setFormError] = useState("");
  const [postSuccess, setPostSuccess] = useState(false);

  const [jobs, setJobs] = useState<PartTimeJob[]>(MOCK_JOBS);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (keyword && !job.jobTitle.toLowerCase().includes(keyword.toLowerCase()) && !job.description.toLowerCase().includes(keyword.toLowerCase())) {
        return false;
      }
      if (location && !job.location.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }
      if (category && category !== "all" && job.category !== category) {
        return false;
      }
      if (minPay && job.minPayPerHour < Number(minPay)) {
        return false;
      }
      return true;
    });
  }, [jobs, keyword, location, category, minPay]);

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shopName || !ownerName || !phone || !jobTitle) {
      setFormError("Please complete all required fields.");
      return;
    }
    setFormError("");

    const newJob: PartTimeJob = {
      id: `j_${Date.now()}`,
      jobTitle,
      shopName,
      ownerName,
      phone,
      location: jobLocation || "Near Campus, Thrissur",
      category: "Retail / Shop",
      minPayPerHour: 100,
      workingDays: "Flexible",
      workingHours: "Evening shifts",
      description: description || "Part-time assistant wanted.",
    };

    setJobs([newJob, ...jobs]);
    setPostSuccess(true);
    setShopName("");
    setOwnerName("");
    setPhone("");
    setJobTitle("");
    setDescription("");
    setJobLocation("");

    setTimeout(() => {
      setPostSuccess(false);
      setActiveTab("find_jobs");
    }, 1200);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Tabs */}
      <Tabs
        activeTab={activeTab}
        onChange={setActiveTab}
        tabs={[
          { id: "find_jobs", label: "Find jobs" },
          { id: "post_job", label: "Post a job" },
        ]}
      />

      {/* Tab 1: Find Jobs */}
      {activeTab === "find_jobs" && (
        <div className="space-y-5">
          <div className="space-y-1 text-left">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Part-time jobs near campus
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Search jobs that fit around your classes.
            </p>
          </div>

          {/* Filter Form Card */}
          <Card className="space-y-3">
            <Input
              label="Job title or keyword"
              placeholder="e.g. barista, tutor"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              leftIcon={<Search className="w-4 h-4 text-slate-400" />}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Location"
                placeholder="Area or street"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                leftIcon={<MapPin className="w-4 h-4 text-slate-400" />}
              />

              <Select
                label="Category"
                placeholder="All categories"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                options={[
                  { value: "all", label: "All categories" },
                  { value: "Food & Beverage", label: "Food & Beverage / Cafe" },
                  { value: "Teaching / Tutoring", label: "Teaching / Tutoring" },
                  { value: "Retail / Shop", label: "Retail / Store Assistant" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input
                label="Minimum pay (₹ per hour)"
                placeholder="e.g. 80"
                type="number"
                value={minPay}
                onChange={(e) => setMinPay(e.target.value)}
              />

              <Select
                label="Working days"
                placeholder="Any days"
                options={[
                  { value: "any", label: "Any days" },
                  { value: "weekends", label: "Weekends only" },
                  { value: "weekdays", label: "Evenings after classes" },
                ]}
              />

              <Select
                label="Working hours"
                placeholder="Any hours"
                options={[
                  { value: "any", label: "Any hours" },
                  { value: "evening", label: "Evening (4 PM - 8 PM)" },
                ]}
              />
            </div>
          </Card>

          {/* Results List */}
          {filteredJobs.length === 0 ? (
            <EmptyState
              title="No jobs found"
              description="Try resetting your keyword or location search."
              actionLabel="Show all jobs"
              onAction={() => {
                setKeyword("");
                setLocation("");
                setCategory("");
                setMinPay("");
              }}
            />
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle>{job.jobTitle}</CardTitle>
                      <p className="text-xs text-brand-primary font-medium">{job.shopName}</p>
                    </div>
                    <Chip variant="currency">₹{job.minPayPerHour} / hr</Chip>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.workingDays}, {job.workingHours}
                    </span>
                  </div>

                  <CardDescription>{job.description}</CardDescription>

                  <CardFooter>
                    <span className="text-xs text-slate-400">Contact: {job.ownerName}</span>
                    <a href={`tel:${job.phone}`}>
                      <Button variant="call" size="sm" leftIcon={<Phone className="w-3.5 h-3.5" />}>
                        Call {job.phone}
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Post a Job */}
      {activeTab === "post_job" && (
        <Card className="space-y-4">
          <div className="space-y-1 text-left border-b border-navy-800 pb-3">
            <h1 className="font-serif text-2xl font-bold text-white">Post a job</h1>
            <p className="text-xs text-slate-400">
              For shop owners. Fill in the details and students can apply straight away.
            </p>
          </div>

          <FormError message={formError} />

          {postSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Job posted successfully! Switching to job board...</span>
            </div>
          )}

          <form onSubmit={handlePostJob} className="space-y-4">
            <Input
              label="Shop name"
              placeholder="e.g. Thrissur Brew Cafe"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />

            <Input
              label="Owner / contact name"
              placeholder="Enter contact person name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />

            <Input
              label="Phone number"
              placeholder="10-digit mobile number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Input
              label="Job title"
              placeholder="e.g. Barista, Billing Assistant"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-slate-300">Job description</label>
              <textarea
                rows={4}
                className="w-full bg-navy-900/90 text-slate-100 placeholder:text-slate-500 rounded-xl text-sm border border-navy-700 p-3 focus:outline-none focus:border-brand-secondary"
                placeholder="Describe role, working hours, and expectations..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Input
              label="Location"
              placeholder="Area or street"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />

            <Button type="submit" variant="primary" size="lg" fullWidth className="mt-2">
              Post Job Opening
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}
