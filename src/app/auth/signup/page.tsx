"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Building, Mail, Lock } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Toggle from "@/components/ui/Toggle";
import Tabs from "@/components/ui/Tabs";
import FormError from "@/components/ui/FormError";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [fullName, setFullName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !college || !email || !password || !confirmPassword) {
      setError("Please fill out all required fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreeTerms) {
      setError("You must agree to the terms and privacy policy.");
      return;
    }

    setError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 600);
  };

  return (
    <div className="max-w-sm mx-auto space-y-6 pt-4 pb-12">
      {/* Top Underline Tabs */}
      <Tabs
        activeTab="signup"
        onChange={(tab) => {
          if (tab === "login") router.push("/auth/login");
        }}
        tabs={[
          { id: "login", label: "Log in" },
          { id: "signup", label: "Sign up" },
        ]}
      />

      {/* Headings */}
      <div className="space-y-1 text-left">
        <h1 className="font-serif text-2xl font-bold text-white">Create your account</h1>
        <p className="text-xs text-slate-400">It takes about a minute.</p>
      </div>

      <FormError message={error} />

      {/* Role Toggle */}
      <Toggle
        label="I am a"
        value={role}
        onChange={setRole}
        options={[
          { value: "student", label: "Student" },
          { value: "faculty", label: "Faculty or staff" },
        ]}
      />

      {/* Form */}
      <form onSubmit={handleSignup} className="space-y-4">
        <Input
          label="Full name"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          leftIcon={<User className="w-4 h-4 text-slate-400" />}
        />

        <Input
          label="College"
          placeholder="Start typing your college name"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          leftIcon={<Building className="w-4 h-4 text-slate-400" />}
        />

        <Input
          label="College email"
          placeholder="you@college.edu"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
        />

        <Input
          label="Password"
          placeholder="Enter password"
          isPassword
          helperText="Use 8+ characters with a number and a symbol."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
        />

        <Input
          label="Confirm password"
          placeholder="Re-enter password"
          isPassword
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
        />

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="w-4 h-4 rounded border-navy-700 bg-navy-900 text-brand-primary focus:ring-brand-primary/50"
          />
          <span>
            I agree to the{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms of service"); }} className="text-brand-secondary underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy policy"); }} className="text-brand-secondary underline">
              privacy policy
            </a>
            .
          </span>
        </label>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          fullWidth
          isLoading={isLoading}
          className="mt-2"
        >
          Create account
        </Button>
      </form>

      {/* Bottom Redirect */}
      <p className="text-xs text-center text-slate-400 pt-2">
        Already registered?{" "}
        <Link href="/auth/login" className="text-brand-secondary font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
