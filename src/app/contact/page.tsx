"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { cn } from "@/lib/utils";

const SERVICES = [
  "High-Performance Web App",
  "Next-Gen SaaS Platform",
  "AI & Agent Automation",
  "Spatial 3D E-Commerce",
  "Custom Design System",
  "Full-Stack Re-Architecture",
];

const BUDGETS = ["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

const TIMELINES = ["Within 1 Month", "2 - 3 Months", "Quarter 3 / Flexible"];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGETS[1]);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[1]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38bdf8", "#818cf8", "#34d399", "#f43f5e"],
    });
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-semibold text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Q2 / Q3 Engagements</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Let&apos;s Build Something <span className="text-gradient-cyan">Extraordinary</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Tell us about your technical goals, design ambitions, and target timeline. Our lead
            architects will prepare a detailed roadmap and estimate within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Multi-Step Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#091229] to-[#050b18] border border-white/[0.08] shadow-2xl relative overflow-hidden">
              {/* Form Step Indicator */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    Step {step} of 3
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400">
                    {step === 1 && "Select Capability"}
                    {step === 2 && "Scope & Investment"}
                    {step === 3 && "Project Details"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        s === step
                          ? "w-8 bg-cyan-400"
                          : s < step
                          ? "w-3 bg-emerald-400"
                          : "w-3 bg-white/20"
                      )}
                    />
                  ))}
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md leading-relaxed mb-8">
                    Thank you, {formData.name}. Our principal engineering team has received your
                    project RFC. We will analyze your specifications and reach out at{" "}
                    <span className="text-cyan-400 font-mono">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white border border-white/10 transition-colors"
                  >
                    Submit Another Project
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <h3 className="text-lg font-bold text-white mb-4">
                        What capability are you looking to engineer?
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {SERVICES.map((srv) => (
                          <div
                            key={srv}
                            onClick={() => setSelectedService(srv)}
                            className={cn(
                              "p-4 rounded-2xl cursor-pointer border text-xs sm:text-sm font-medium transition-all flex items-center justify-between",
                              selectedService === srv
                                ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                                : "bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05]"
                            )}
                          >
                            <span>{srv}</span>
                            {selectedService === srv && (
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                        >
                          <span>Continue to Scope</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Budget & Timeline */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <h3 className="text-lg font-bold text-white mb-4">
                        Estimated Budget Allocation
                      </h3>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {BUDGETS.map((bdg) => (
                          <div
                            key={bdg}
                            onClick={() => setSelectedBudget(bdg)}
                            className={cn(
                              "p-4 rounded-2xl cursor-pointer border text-center text-xs sm:text-sm font-mono font-bold transition-all",
                              selectedBudget === bdg
                                ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                                : "bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05]"
                            )}
                          >
                            {bdg}
                          </div>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-4">Target Launch Timeline</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                        {TIMELINES.map((tml) => (
                          <div
                            key={tml}
                            onClick={() => setSelectedTimeline(tml)}
                            className={cn(
                              "p-3.5 rounded-2xl cursor-pointer border text-center text-xs font-medium transition-all",
                              selectedTimeline === tml
                                ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                                : "bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05]"
                            )}
                          >
                            {tml}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-5 py-2.5 rounded-full bg-white/[0.05] text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                        >
                          <span>Continue to Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact & Description */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="text-xs font-mono text-zinc-400 block mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Alex Thorne"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-zinc-400 block mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-all"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="text-xs font-mono text-zinc-400 block mb-1.5">
                          Company / Venture Name
                        </label>
                        <input
                          type="text"
                          placeholder="Synthex Labs"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-all"
                        />
                      </div>

                      <div className="mb-8">
                        <label className="text-xs font-mono text-zinc-400 block mb-1.5">
                          Project Description &amp; Technical Requirements
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your core user flows, backend constraints, integrations, and desired launch date..."
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-5 py-2.5 rounded-full bg-white/[0.05] text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Project RFC</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Embedded Studio Location & Direct Channels Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live Clock & Studio Hub Card */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Clock className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                    Engineering Presence
                  </span>
                  <span className="text-base font-bold text-white font-mono">
                    {time || "Synchronizing..."}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-zinc-300 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>San Francisco • London • Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href="mailto:contact@webnify.io"
                    className="hover:text-cyan-300 transition-colors font-mono"
                  >
                    contact@webnify.io
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Monday – Friday: 9am – 7pm EST</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-zinc-400 leading-relaxed">
                <strong className="text-cyan-300 block mb-1">Direct Technical Review:</strong>
                All proposals are read and estimated directly by our Principal Systems Architect,
                not account executives.
              </div>
            </div>

            {/* Direct Calendar Callout */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c1a3b] to-[#060e24] border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Prefer an instant call?</h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Skip the form and pick a 30-minute technical discovery slot directly on our calendar.
              </p>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Book 30-Min Discovery Call</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
