import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Github,
  Twitter,
  Linkedin,
  Globe2,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { teamMembers } from "@/data/team";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "About Webnify | Elite Creative Engineering Studio",
  description:
    "Learn about Webnify's philosophy, engineering leadership, and vision for crafting next-generation digital experiences.",
};

const STATS = [
  { value: "60 FPS", label: "Animation Standard", desc: "Silky smooth GPU-accelerated motion on all screens." },
  { value: "100/100", label: "Core Web Vitals", desc: "Sub-second First Contentful Paint benchmarks." },
  { value: "$2.4B+", label: "Client GMV Handled", desc: "Secure multi-tenant transactional architecture." },
  { value: "99.9%", label: "Client Retention Rate", desc: "Long-term partnership with seed to IPO teams." },
];

const VALUES = [
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "Velocity Without Compromise",
    desc: "Speed is our baseline. We write componentized, test-backed code in fast 1-week iterative sprints without cutting architectural corners.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    title: "Obsession with Aesthetic Craft",
    desc: "We reject generic corporate templates. Every curve, particle shader, and kinetic transition is deliberately tailored to command respect.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: "AI-Augmented Architecture",
    desc: "We live on the frontier of machine intelligence, embedding autonomous LLM agents and streaming inference directly into user workflows.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    title: "Radical Transparency & IP Transfer",
    desc: "No locked ecosystems or vendor lock-in. You retain 100% intellectual property ownership of the repositories and tokens from day zero.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-semibold text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Agency Behind The Code</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Where Cinematic Motion Meets <span className="text-gradient-cyan">Hard Engineering</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Webnify is an independent creative engineering agency founded on one premise:
            modern digital software should be as visually captivating as a cinematic feature film,
            while running with the sub-second precision of an aerospace control system.
          </p>
        </div>

        {/* Agency Stats Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight text-gradient-cyan">
                  {stat.value}
                </span>
                <h3 className="text-base font-bold text-white mt-2 mb-1">{stat.label}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy & Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              How We Think &amp; Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Leadership & Team Cards */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              The Collective
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Engineers &amp; Designers Behind Webnify
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Cross-functional specialists dedicated to shipping high-velocity digital craft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group p-6 rounded-3xl bg-gradient-to-b from-[#0a1226] to-[#050b18] border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Avatar image */}
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-white/[0.08] bg-black/40">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent opacity-70" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10">
                      {member.department}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">{member.bio}</p>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.03] text-zinc-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.03] text-zinc-400 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.03] text-zinc-400 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-indigo-950/30 to-[#030712] border border-cyan-500/30 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Globe2 className="w-10 h-10 text-cyan-400 mb-4 animate-spin-slow" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Distributed Across San Francisco, London &amp; Tokyo
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mb-8">
            Our global presence ensures uninterrupted 24-hour sprint progress, seamless time zone
            overlap with North American and European founders, and round-the-clock emergency support.
          </p>
          <MagneticButton href="/contact" variant="primary" size="lg" triggerConfetti={true}>
            <span>Work With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
