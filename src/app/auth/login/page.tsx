"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Tabs from "@/components/ui/Tabs";
import FormError from "@/components/ui/FormError";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password.");
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
        activeTab="login"
        onChange={(tab) => {
          if (tab === "signup") router.push("/auth/signup");
        }}
        tabs={[
          { id: "login", label: "Log in" },
          { id: "signup", label: "Sign up" },
        ]}
      />

      {/* Headings */}
      <div className="space-y-1 text-left">
        <h1 className="font-serif text-2xl font-bold text-white">Welcome back</h1>
        <p className="text-xs text-slate-400">Log in with your college email or ID.</p>
      </div>

      <FormError message={error} />

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          label="College email or ID"
          placeholder="you@college.edu"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
        />

        <Input
          label="Password"
          placeholder="Enter password"
          isPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
        />

        {/* Auxiliary Options Row */}
        <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
              className="w-4 h-4 rounded border-navy-700 bg-navy-900 text-brand-primary focus:ring-brand-primary/50"
            />
            <span>Keep me logged in</span>
          </label>

          <a href="#" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to email."); }} className="text-brand-secondary hover:underline font-semibold">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          fullWidth
          isLoading={isLoading}
          className="mt-2"
        >
          Log in
        </Button>
      </form>

      {/* Bottom Redirect */}
      <p className="text-xs text-center text-slate-400 pt-2">
        New here?{" "}
        <Link href="/auth/signup" className="text-brand-secondary font-semibold hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
