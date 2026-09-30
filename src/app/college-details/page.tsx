"use client";

import React, { useState } from "react";
import { TrendingUp, Award, BookOpen, Rocket, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Chip from "@/components/ui/Chip";
import Tabs from "@/components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export default function CollegeDetailsPage() {
  const [course, setCourse] = useState("btech_cs");
  const [subTab, setSubTab] = useState("college_details");
  const [selectedExam, setSelectedExam] = useState("UPSC");

  const examsData: Record<string, { name: string; org: string; eligibility: string; pattern: string }> = {
    UPSC: {
      name: "UPSC Civil Services Examination",
      org: "Union Public Service Commission",
      eligibility: "Any degree, age 21 to 32 years",
      pattern: "Prelims (GS + CSAT), Mains (9 papers), Personality Interview",
    },
    SSC: {
      name: "SSC Combined Graduate Level (CGL)",
      org: "Staff Selection Commission",
      eligibility: "Bachelor's degree from recognized university",
      pattern: "Tier I & Tier II computer-based examinations",
    },
    IBPS: {
      name: "IBPS Probationary Officer (PO) / IT Officer",
      org: "Institute of Banking Personnel Selection",
      eligibility: "Degree in Engineering/CS/IT or any discipline",
      pattern: "Prelims, Mains & Common Interview",
    },
    GATE: {
      name: "Graduate Aptitude Test in Engineering",
      org: "IISc & IITs",
      eligibility: "Currently in 3rd/4th year or completed B.Tech",
      pattern: "65 questions (100 marks) testing core engineering & math",
    },
    CAT: {
      name: "Common Admission Test",
      org: "Indian Institutes of Management (IIMs)",
      eligibility: "Bachelor's degree with minimum 50% marks",
      pattern: "VARC, DILR, Quantitative Aptitude",
    },
  };

  return (
    <div className="space-y-6 pb-12">
      {/* College Hero Banner */}
      <div className="space-y-3 text-left border-b border-navy-800 pb-5">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Sample Institute of Technology
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
          Everything you need to compare a college: placements, what comes next, and the exams worth preparing for.
        </p>

        {/* Course Dropdown Selector */}
        <div className="pt-2 max-w-xs">
          <Select
            label="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            options={[
              { value: "btech_cs", label: "B.Tech Computer Science" },
              { value: "btech_ec", label: "B.Tech Electronics & Comm" },
              { value: "bsc_math", label: "B.Sc Mathematics / CS" },
            ]}
          />
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <Tabs
        activeTab={subTab}
        onChange={setSubTab}
        tabs={[
          { id: "college_details", label: "College details" },
          { id: "placement", label: "Placement" },
          { id: "studies_job", label: "Studies and job" },
        ]}
      />

      {/* SubTab 1: College details */}
      {subTab === "college_details" && (
        <div className="space-y-4">
          <div className="space-y-1 text-left">
            <h2 className="font-serif text-xl font-bold text-white">College details</h2>
            <p className="text-xs text-slate-400">Who can apply and how admission works.</p>
          </div>

          <Card className="space-y-4">
            <div className="space-y-1 border-b border-navy-800 pb-3">
              <span className="text-xs text-slate-400">College name</span>
              <p className="text-sm font-semibold text-white">Sample Institute of Technology (Govt Aided)</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400">Eligibility</span>
              <p className="text-xs text-slate-200 leading-relaxed">
                12th with 60% in Physics, Chemistry, and Mathematics (PCM), valid entrance score (KEAM for Kerala state allotment).
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* SubTab 2: Placement */}
      {subTab === "placement" && (
        <div className="space-y-5">
          <div className="space-y-1 text-left">
            <h2 className="font-serif text-xl font-bold text-white">Placement details</h2>
            <p className="text-xs text-slate-400">Last academic year, for the selected course.</p>
          </div>

          {/* 3 KPI Metric Cards */}
          <div className="grid grid-cols-3 gap-3">
            <Card className="p-3 text-center space-y-1">
              <p className="text-xl sm:text-2xl font-extrabold text-brand-secondary">86%</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Placement rate</p>
            </Card>

            <Card className="p-3 text-center space-y-1">
              <p className="text-xl sm:text-2xl font-extrabold text-brand-secondary">6.2 LPA</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Average package</p>
            </Card>

            <Card className="p-3 text-center space-y-1">
              <p className="text-xl sm:text-2xl font-extrabold text-brand-secondary">24 LPA</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Highest package</p>
            </Card>
          </div>

          {/* Top recruiters */}
          <Card className="space-y-2">
            <CardTitle>Top recruiting companies</CardTitle>
            <div className="flex flex-wrap gap-2 pt-1">
              <Chip variant="tag">TCS Digital</Chip>
              <Chip variant="tag">Infosys Power Programmer</Chip>
              <Chip variant="tag">Wipro</Chip>
              <Chip variant="tag">Cognizant</Chip>
              <Chip variant="tag">Quest Global</Chip>
            </div>
          </Card>

          {/* Common job roles */}
          <Card className="space-y-2">
            <CardTitle>Common job roles</CardTitle>
            <div className="flex flex-wrap gap-2 pt-1">
              <Chip variant="secondary">Software engineer</Chip>
              <Chip variant="secondary">Data analyst</Chip>
              <Chip variant="secondary">Support engineer</Chip>
            </div>
          </Card>

          {/* Internship opportunities */}
          <Card className="space-y-2">
            <CardTitle>Internship opportunities</CardTitle>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>6-month industry internship in final year</li>
              <li>Stipend: 10,000 to 25,000 per month</li>
            </ul>
          </Card>
        </div>
      )}

      {/* SubTab 3: Studies and job */}
      {subTab === "studies_job" && (
        <div className="space-y-6">
          <div className="space-y-1 text-left">
            <h2 className="font-serif text-xl font-bold text-white">Further studies and jobs after college</h2>
            <p className="text-xs text-slate-400">Your options once the degree is done.</p>
          </div>

          {/* Group 1: Further Studies */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-white border-l-3 border-brand-primary pl-2">
              Further studies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card>
                <CardTitle>PG courses</CardTitle>
                <ul className="text-xs text-slate-300 space-y-1 pt-2 list-disc list-inside">
                  <li>M.Tech</li>
                  <li>MCA</li>
                </ul>
              </Card>

              <Card>
                <CardTitle>Master&apos;s degree options</CardTitle>
                <ul className="text-xs text-slate-300 space-y-1 pt-2 list-disc list-inside">
                  <li>MS in Computer Science</li>
                  <li>MBA</li>
                </ul>
              </Card>
            </div>

            <Card>
              <CardTitle>Professional courses</CardTitle>
              <ul className="text-xs text-slate-300 space-y-1 pt-2 list-disc list-inside">
                <li>Cloud certification (AWS/Azure)</li>
                <li>Data science diploma</li>
              </ul>
            </Card>

            <Card>
              <CardTitle>Higher-study entrance exams</CardTitle>
              <div className="flex gap-2 pt-2">
                <Chip variant="tag">GATE</Chip>
                <Chip variant="tag">CAT</Chip>
                <Chip variant="tag">GRE</Chip>
              </div>
            </Card>

            <Card>
              <CardTitle>Study-abroad opportunities</CardTitle>
              <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                Exchange programs and MS admits in Germany, Canada, and the US. Requires GRE or IELTS.
              </p>
            </Card>
          </div>

          {/* Group 2: Jobs */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-semibold text-white border-l-3 border-brand-primary pl-2">
              Jobs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card>
                <CardTitle>Job roles after graduation</CardTitle>
                <ul className="text-xs text-slate-300 space-y-1 pt-2 list-disc list-inside">
                  <li>Developer</li>
                  <li>Analyst</li>
                  <li>Consultant</li>
                </ul>
              </Card>

              <Card>
                <CardTitle>Companies hiring graduates</CardTitle>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <Chip variant="secondary" size="sm">Company A</Chip>
                  <Chip variant="secondary" size="sm">Company E</Chip>
                  <Chip variant="secondary" size="sm">Company F</Chip>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card>
                <CardTitle>Government jobs</CardTitle>
                <ul className="text-xs text-slate-300 space-y-1 pt-2 list-disc list-inside">
                  <li>PSU engineer (via GATE)</li>
                  <li>Bank IT officer</li>
                </ul>
              </Card>

              <Card>
                <CardTitle>Private-sector jobs</CardTitle>
                <ul className="text-xs text-slate-300 space-y-1 pt-2 list-disc list-inside">
                  <li>IT services</li>
                  <li>Product companies</li>
                  <li>Startups</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Group 3: Competitive Exam Details */}
          <div className="space-y-3">
            <div>
              <h3 className="font-serif text-base font-semibold text-white">Competitive exam details</h3>
              <p className="text-xs text-slate-400">Exams relevant to this course.</p>
            </div>

            {/* Exam Filter Chips */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
              {Object.keys(examsData).map((examKey) => (
                <Chip
                  key={examKey}
                  variant="secondary"
                  active={selectedExam === examKey}
                  onClick={() => setSelectedExam(examKey)}
                >
                  {examKey}
                </Chip>
              ))}
            </div>

            {/* Selected Exam Card */}
            {examsData[selectedExam] && (
              <Card className="space-y-3">
                <div className="space-y-0.5 border-b border-navy-800 pb-2">
                  <span className="text-xs text-slate-400">Exam name</span>
                  <p className="text-sm font-semibold text-white">
                    {examsData[selectedExam].name}
                  </p>
                </div>

                <div className="space-y-0.5 border-b border-navy-800 pb-2">
                  <span className="text-xs text-slate-400">Conducting organization</span>
                  <p className="text-xs text-slate-200">
                    {examsData[selectedExam].org}
                  </p>
                </div>

                <div className="space-y-0.5 border-b border-navy-800 pb-2">
                  <span className="text-xs text-slate-400">Eligibility</span>
                  <p className="text-xs text-slate-200">
                    {examsData[selectedExam].eligibility}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <span className="text-xs text-slate-400">Exam pattern</span>
                  <p className="text-xs text-slate-200">
                    {examsData[selectedExam].pattern}
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
