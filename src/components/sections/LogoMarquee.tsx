"use client";

import React from "react";
import {
  Layers,
  Sparkles,
  Terminal,
  Zap,
  Flame,
  Binary,
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const TECH_STACK: TechItem[] = [
  {
    name: "Next.js 15",
    category: "Full-Stack Framework",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 180 180">
        <path d="M90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM137.494 139.263L78.6942 63.8562V128.469H65.867V51.5309H78.6942L137.494 126.938V62.3253H150.321V139.263H137.494Z" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    name: "React 19",
    category: "Component Engine",
    icon: (
      <svg className="w-5 h-5 fill-current text-cyan-400" viewBox="0 0 115.3 100">
        <path d="M57.65 0C25.79 0 0 22.39 0 50s25.79 50 57.65 50 57.65-22.39 57.65-50S89.51 0 57.65 0zm0 91.5C30.65 91.5 8.5 72.84 8.5 50S30.65 8.5 57.65 8.5s49.15 18.66 49.15 41.5-22.15 41.5-49.15 41.5z" />
        <circle cx="57.65" cy="50" r="10.5" />
      </svg>
    ),
    color: "#61dafb",
  },
  {
    name: "Python 3.12",
    category: "AI Backend",
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    color: "#fbbf24",
  },
  {
    name: "PyTorch",
    category: "Neural Models",
    icon: <Flame className="w-5 h-5 text-rose-500" />,
    color: "#f43f5e",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    icon: <Binary className="w-5 h-5 text-blue-400" />,
    color: "#3b82f6",
  },
  {
    name: "Figma",
    category: "Spatial Design",
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    color: "#a855f7",
  },
  {
    name: "Vercel",
    category: "Edge Infrastructure",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 115.5 100">
        <path d="M57.75 0L115.5 100H0L57.75 0Z" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    category: "Dynamic Styling",
    icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    color: "#06b6d4",
  },
  {
    name: "GSAP 3",
    category: "60 FPS Timelines",
    icon: <Zap className="w-5 h-5 text-green-400" />,
    color: "#4ade80",
  },
];

const CLIENT_BRANDS = [
  { name: "Synthex Financial", role: "Institutional FinTech", metric: "$1.8B+ Traded" },
  { name: "NeuroFlow Labs", role: "AI Workflow Engine", metric: "45M req/day" },
  { name: "AURA Spatial", role: "Luxury WebGL E-Comm", metric: "+340% Conversion" },
  { name: "HyperCloud Edge", role: "Telemetry Infra", metric: "Global Mesh" },
  { name: "Zenith BioSync", role: "Biometric AI Health", metric: "99.4% Accuracy" },
  { name: "Orbit Collective", role: "Real-time Collaboration", metric: "12k Teams" },
];

export function LogoMarquee() {
  return (
    <section className="relative py-14 bg-[#030712] border-y border-white/[0.06] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#030712] via-[#030712]/90 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-mono text-zinc-500">
          POWERING NEXT-GENERATION ENTERPRISE ARCHITECTURES WITH CUTTING-EDGE TECH
        </p>
      </div>

      {/* Row 1: Tech Stack Infinite Marquee */}
      <div className="marquee-container relative flex overflow-hidden py-3">
        <div className="flex shrink-0 items-center gap-6 animate-marquee">
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div
              key={`tech-1-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all group shrink-0"
            >
              <div
                className="p-1.5 rounded-lg bg-white/[0.04] transition-transform group-hover:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Client Badges Infinite Marquee (Reverse direction) */}
      <div className="marquee-container relative flex overflow-hidden py-3 mt-2">
        <div className="flex shrink-0 items-center gap-6 animate-marquee-reverse">
          {[...CLIENT_BRANDS, ...CLIENT_BRANDS].map((client, index) => (
            <div
              key={`client-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-white/[0.02] to-cyan-500/[0.03] border border-white/[0.06] hover:border-indigo-500/40 hover:bg-white/[0.05] transition-all group shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-300 group-hover:text-cyan-300 transition-colors">
                  {client.name}
                </span>
                <span className="text-xs text-zinc-600">•</span>
                <span className="text-xs text-zinc-400 font-mono bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                  {client.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
