"use client";

import React, { useState, useMemo } from "react";
import { Search, GraduationCap, Calendar, Filter, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Chip from "@/components/ui/Chip";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import EmptyState from "@/components/ui/EmptyState";
import { MOCK_SCHOLARSHIPS, Scholarship } from "@/lib/mockData";

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [course, setCourse] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [familyIncome, setFamilyIncome] = useState("");
  const [category, setCategory] = useState("");
  const [sslcPct, setSslcPct] = useState("");
  const [plusTwoPct, setPlusTwoPct] = useState("");

  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  const filteredScholarships = useMemo(() => {
    return MOCK_SCHOLARSHIPS.filter((item) => {
      if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase()) && !item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      if (category && category !== "all" && item.category && item.category !== category) {
        return false;
      }
      if (plusTwoPct && item.minPlusTwoPct && Number(plusTwoPct) < item.minPlusTwoPct) {
        return false;
      }
      return true;
    });
  }, [searchTerm, category, plusTwoPct]);

  const handleReset = () => {
    setSearchTerm("");
    setCollegeName("");
    setCourse("");
    setYearOfStudy("");
    setFamilyIncome("");
    setCategory("");
    setSslcPct("");
    setPlusTwoPct("");
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Headings */}
      <div className="space-y-1 text-left">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Find scholarships you qualify for
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Fill in your details and we will show matching scholarships.
        </p>
      </div>

      {/* Search Input */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search by name, e.g. merit, post-"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          leftIcon={<Search className="w-4 h-4 text-slate-400" />}
        />
        <Button variant="primary" size="md" className="shrink-0 px-5">
          Search
        </Button>
      </div>

      {/* Filter Form Card ("Your details") */}
      <Card className="space-y-4">
        <div className="flex items-center justify-between border-b border-navy-800 pb-3">
          <h3 className="font-serif text-base font-semibold text-white flex items-center gap-2">
            <Filter className="w-4 h-4 text-brand-primary" />
            <span>Your details</span>
          </h3>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-slate-400 hover:text-brand-secondary flex items-center gap-1 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        <div className="space-y-3">
          <Input
            label="Which college are you studying in?"
            placeholder="College name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Select
              label="Course"
              placeholder="Any course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              options={[
                { value: "btech", label: "B.Tech Computer Science / Engg" },
                { value: "bsc", label: "B.Sc Degree" },
                { value: "mbbs", label: "MBBS / Medical" },
                { value: "bcom", label: "B.Com" },
              ]}
            />

            <Select
              label="Year of study"
              placeholder="Any year"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              options={[
                { value: "1", label: "First year (Y1)" },
                { value: "2", label: "Second year (Y2)" },
                { value: "3", label: "Third year (Y3)" },
                { value: "4", label: "Final year (Y4)" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Annual family income (₹)"
              placeholder="e.g. 200000"
              type="number"
              value={familyIncome}
              onChange={(e) => setFamilyIncome(e.target.value)}
            />

            <Select
              label="Caste / category"
              placeholder="Prefer not to say"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              helperText="Only used to match schemes. Optional."
              options={[
                { value: "General", label: "General" },
                { value: "OBC", label: "OBC" },
                { value: "SC/ST", label: "SC / ST" },
              ]}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <Input
              label="SSLC %"
              placeholder="e.g. 88"
              type="number"
              value={sslcPct}
              onChange={(e) => setSslcPct(e.target.value)}
            />
            <Input
              label="+2 %"
              placeholder="e.g. 82"
              type="number"
              value={plusTwoPct}
              onChange={(e) => setPlusTwoPct(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button variant="primary" size="md" fullWidth>
              Show matches
            </Button>
            <Button variant="ghost" size="md" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg font-bold text-white">
          {filteredScholarships.length} scholarships found
        </h3>
      </div>

      {/* Results List */}
      {filteredScholarships.length === 0 ? (
        <EmptyState
          title="No scholarships matched"
          description="Try broadening your criteria or clicking reset."
          onAction={handleReset}
          actionLabel="Reset filters"
        />
      ) : (
        <div className="space-y-4">
          {filteredScholarships.map((sch) => (
            <Card key={sch.id} className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle>{sch.title}</CardTitle>
                  <p className="text-xs text-slate-400">{sch.provider}</p>
                </div>
                <Chip variant="currency">{sch.amount}</Chip>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <Chip variant="warning" size="sm">
                  {sch.incomeLimit}
                </Chip>
                <Chip variant="warning" size="sm">
                  {sch.criteria}
                </Chip>
              </div>

              <CardDescription>{sch.description}</CardDescription>

              <CardFooter>
                <div className="flex items-center gap-1.5 text-xs text-brand-secondary font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Last date: {sch.deadline}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedScholarship(sch)}
                >
                  View details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Details Modal */}
      {selectedScholarship && (
        <Modal
          isOpen={Boolean(selectedScholarship)}
          onClose={() => setSelectedScholarship(null)}
          title={selectedScholarship.title}
          footer={
            <>
              <Button variant="ghost" size="sm" onClick={() => setSelectedScholarship(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  alert(`Redirecting to official scholarship portal for ${selectedScholarship.title}...`);
                  setSelectedScholarship(null);
                }}
              >
                Apply Scheme
              </Button>
            </>
          }
        >
          <div className="space-y-3 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{selectedScholarship.provider}</span>
              <Chip variant="currency">{selectedScholarship.amount}</Chip>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedScholarship.description}
            </p>

            <div className="bg-navy-950 p-4 rounded-2xl border border-navy-800 space-y-2 text-xs">
              <p className="font-semibold text-white">• Income Threshold: {selectedScholarship.incomeLimit}</p>
              <p className="font-semibold text-white">• Academic Requirement: {selectedScholarship.criteria}</p>
              <p className="font-semibold text-brand-secondary">• Application Last Date: {selectedScholarship.deadline}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
