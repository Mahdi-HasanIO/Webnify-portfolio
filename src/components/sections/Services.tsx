"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Cpu,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
};

export function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

  const activeService =
    services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06]">
      {/* Background radial lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-medium text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Specialized Engineering for <span className="text-gradient-cyan">Modern Scale</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            We don&apos;t build cookie-cutter templates. We architect bespoke, high-velocity digital
            systems built to dominate competitive markets.
          </p>
        </div>

        {/* Dual Layout: Interactive Accordion Cards on left & Live Showcase on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Selector Accordion */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={cn(
                    "group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left",
                    isActive
                      ? "bg-white/[0.06] border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/20"
                  )}
                >
                  {/* Left indicator glow line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-r-full shadow-[0_0_10px_#38bdf8]"
                    />
                  )}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "p-2.5 rounded-xl transition-colors",
                          isActive
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                            : "bg-white/5 text-zinc-400 group-hover:text-white"
                        )}
                      >
                        {iconMap[service.icon]}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                          {service.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowRight
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isActive
                          ? "text-cyan-400 translate-x-1"
                          : "text-zinc-600 group-hover:text-zinc-400"
                      )}
                    />
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Service Deep Dive Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                className="relative rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-[#0a1226] to-[#060b19] border border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Dynamic backdrop accent */}
                <div
                  className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
                  style={{ backgroundColor: activeService.glowColor }}
                />

                <div className="relative z-10 flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                      Service Breakdown • {activeService.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {activeService.title}
                    </h3>
                  </div>

                  {/* Impact Metric Badge */}
                  <div className="shrink-0 px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center gap-2.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-sm font-bold text-white font-mono leading-none">
                        {activeService.metric.value}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">
                        {activeService.metric.label}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="relative z-10 text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                  {activeService.description}
                </p>

                {/* Key Features List */}
                <div className="relative z-10 mb-8">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-4">
                    Architectural Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Direct CTA */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-zinc-500 font-mono">Deliverables:</span>
                    {activeService.deliverables.map((del) => (
                      <span
                        key={del}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-cyan-300 border border-white/[0.08] font-mono"
                      >
                        {del}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
