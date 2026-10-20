"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  Check,
  Calendar,
  Sparkles,
} from "lucide-react";
import { roadmapSteps } from "@/data/roadmap";

const stepIcons: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
};

export function ProcessRoadmap() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-medium text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Execution Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            From First Spark to <span className="text-gradient-cyan">Global Scale</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Our battle-tested 4-phase agile engineering methodology guarantees predictability,
            speed, and zero launch surprises.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Track Line (Background) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/[0.08]" />

          {/* Animated Line-Draw Progress Bar (Scroll-driven) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_15px_#38bdf8] rounded-full"
          />

          {/* Timeline Steps */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {roadmapSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node / Step Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] z-20">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300">
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="p-2 rounded-xl text-white"
                            style={{ backgroundColor: `${step.highlightColor}25` }}
                          >
                            {stepIcons[step.icon]}
                          </div>
                          <div>
                            <span
                              className="text-[11px] font-mono font-bold tracking-widest uppercase"
                              style={{ color: step.highlightColor }}
                            >
                              {step.phase}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{step.duration}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="pt-4 border-t border-white/[0.06]">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                          Phase Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.deliverables.map((deliv, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs text-zinc-300"
                            >
                              <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5" />
                              </div>
                              <span className="truncate">{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
