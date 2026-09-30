"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Chip from "@/components/ui/Chip";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import Tabs from "@/components/ui/Tabs";
import Toggle from "@/components/ui/Toggle";
import Modal from "@/components/ui/Modal";
import EmptyState from "@/components/ui/EmptyState";
import FormError from "@/components/ui/FormError";
import { Sparkles, Phone, Search, Lock, Mail, Compass, CheckCircle2, User, BookOpen } from "lucide-react";

export default function DesignPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [activePillTab, setActivePillTab] = useState("scholarships");
  const [role, setRole] = useState("student");
  const [rideMode, setRideMode] = useState("have_vehicle");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const handleValidation = () => {
    if (!inputValue) {
      setInputError("Name is required to proceed.");
    } else {
      setInputError("");
      alert("Validated successfully!");
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header Banner */}
      <div className="text-left space-y-2 border-b border-navy-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CampusCompass Design System</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">
          Unified UI Tokens & Component Library
        </h1>
        <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
          Standardized design specifications from the mockups: Dark Navy canvas (`#060B18`), Primary Orange (`#FF8A1F`), Secondary Cyan (`#00E5FF`), Noto Serif headings, and Inter sans body text.
        </p>
      </div>

      {/* 1. Color Tokens Swatches */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-white border-l-4 border-brand-primary pl-3">
          1. Color System
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-navy-950 p-4 rounded-xl border border-navy-700 space-y-1">
            <div className="w-full h-8 rounded bg-navy-950 border border-navy-700" />
            <p className="text-xs font-semibold text-white">Dark Navy (Canvas)</p>
            <p className="text-[10px] text-slate-400">#060B18</p>
          </div>
          <div className="bg-navy-900 p-4 rounded-xl border border-navy-700 space-y-1">
            <div className="w-full h-8 rounded bg-navy-900 border border-navy-700" />
            <p className="text-xs font-semibold text-white">Navy Surface (Card)</p>
            <p className="text-[10px] text-slate-400">#0F172A</p>
          </div>
          <div className="bg-navy-900 p-4 rounded-xl border border-navy-700 space-y-1">
            <div className="w-full h-8 rounded bg-brand-primary" />
            <p className="text-xs font-semibold text-white">Primary Orange</p>
            <p className="text-[10px] text-brand-primary font-mono">#FF8A1F</p>
          </div>
          <div className="bg-navy-900 p-4 rounded-xl border border-navy-700 space-y-1">
            <div className="w-full h-8 rounded bg-brand-secondary" />
            <p className="text-xs font-semibold text-white">Secondary Cyan</p>
            <p className="text-[10px] text-brand-secondary font-mono">#00E5FF</p>
          </div>
        </div>
      </section>

      {/* 2. Typography Showcase */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-white border-l-4 border-brand-primary pl-3">
          2. Typography
        </h2>
        <Card variant="glass" className="space-y-4">
          <div>
            <span className="text-[10px] uppercase font-mono text-brand-primary">Serif Heading (Noto Serif)</span>
            <h1 className="font-serif text-2xl font-bold text-white">
              Your whole college life, in one place.
            </h1>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono text-brand-secondary">Sans Body (Inter)</span>
            <p className="text-sm text-slate-300 leading-relaxed">
              Scholarships, part-time work, deadlines, PG stays and honest advice from seniors, so you stop hunting through ten different groups.
            </p>
          </div>
        </Card>
      </section>

      {/* 3. Button Variants */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-white border-l-4 border-brand-primary pl-3">
          3. Button Component
        </h2>
        <Card className="space-y-5">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Cyan</Button>
            <Button variant="outline">Outline Border</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="call" leftIcon={<Phone className="w-4 h-4" />}>
              Call 9876500011
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large Hero CTA</Button>
            <Button variant="primary" isLoading>Loading</Button>
          </div>
        </Card>
      </section>

      {/* 4. Input & Select Controls */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-white border-l-4 border-brand-primary pl-3">
          4. Inputs & Select Controls
        </h2>
        <Card className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="College email or ID"
              placeholder="you@college.edu"
              leftIcon={<Mail className="w-4 h-4" />}
            />
            <Input
              label="Password"
              placeholder="Enter password"
              isPassword
              leftIcon={<Lock className="w-4 h-4" />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Which college are you studying in?"
              placeholder="Select your college"
              options={[
                { value: "gec_thrissur", label: "Govt Engineering College Thrissur" },
                { value: "st_thomas", label: "St. Thomas College Thrissur" },
                { value: "city_engg", label: "City Engineering College" },
              ]}
            />
            <Input
              label="Your name"
              placeholder="Enter full name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              error={inputError}
            />
          </div>
          <div className="flex justify-end pt-2">
            <Button variant="secondary" size="sm" onClick={handleValidation}>
              Test Input Validation
            </Button>
          </div>
        </Card>
      </section>

      {/* 5. Chips & Badges */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-white border-l-4 border-brand-primary pl-3">
          5. Chips & Category Badges
        </h2>
        <Card className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Chip variant="primary" active>🎓 Scholarships</Chip>
            <Chip variant="primary">💼 Part-time</Chip>
            <Chip variant="secondary">🚌 Transport</Chip>
            <Chip variant="currency">₹3,800/mo</Chip>
            <Chip variant="currency">₹10,000 / year</Chip>
            <Chip variant="dark">2 beds free</Chip>
            <Chip variant="tag">Income up to ₹8,00,000</Chip>
            <Chip variant="warning">Min 80%</Chip>
          </div>
        </Card>
      </section>

      {/* 6. Tabs & Segmented Toggles */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-white border-l-4 border-brand-primary pl-3">
          6. Tabs & Segmented Control
        </h2>
        <Card className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-slate-400">Underline Tabs Variant:</p>
            <Tabs
              activeTab={activeTab}
              onChange={setActiveTab}
              tabs={[
                { id: "all", label: "All Items", badge: 10 },
                { id: "seniors", label: "Seniors", badge: 4 },
                { id: "alumni", label: "Alumni", badge: 6 },
              ]}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-slate-400">Pill Tabs Variant:</p>
            <Tabs
              variant="pills"
              activeTab={activePillTab}
              onChange={setActivePillTab}
              tabs={[
                { id: "scholarships", label: "Scholarships", icon: <BookOpen className="w-3.5 h-3.5" /> },
                { id: "parttime", label: "Part-time Jobs" },
                { id: "transport", label: "Transport" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-slate-400">Segmented Control Toggle:</p>
            <Toggle
              label="I am a"
              value={role}
              onChange={setRole}
              options={[
                { value: "student", label: "Student" },
                { value: "faculty", label: "Faculty or staff" },
              ]}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-slate-400">Transport Switch Toggle:</p>
            <Toggle
              value={rideMode}
              onChange={setRideMode}
              options={[
                { value: "have_vehicle", label: "I have a vehicle" },
                { value: "need_ride", label: "I need a ride" },
              ]}
            />
          </div>
        </Card>
      </section>

      {/* 7. Modal & States */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-semibold text-white border-l-4 border-brand-primary pl-3">
          7. Modals, Empty State & Form Error
        </h2>
        <Card className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Open Modal Dialog
            </Button>
          </div>

          <FormError message="Invalid mobile number format. Must be a 10-digit number." />

          <EmptyState
            title="No questions yet"
            description="Ask a question above and a senior or alumnus from your college will reply."
            actionLabel="Ask a question"
            onAction={() => alert("Navigate to question form")}
          />
        </Card>
      </section>

      {/* Modal Showcase */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Merit Scholarship Details"
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsModalOpen(false)}>
              Apply Now
            </Button>
          </>
        }
      >
        <div className="space-y-3 text-left">
          <Chip variant="currency">₹10,000 / year</Chip>
          <p className="text-xs text-slate-300">
            Offered by the State Government for undergraduate students with high academic performance in Kerala +2 board exams.
          </p>
          <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 space-y-1 text-xs">
            <p className="font-semibold text-white">• Minimum Marks: 80% in +2</p>
            <p className="font-semibold text-white">• Annual Family Income: Below ₹8,00,000</p>
            <p className="font-semibold text-white">• Deadline: 31 October 2026</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
