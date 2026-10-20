"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Code, ShieldCheck, Zap } from "lucide-react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";

const headlineWords = [
  "We",
  "Engineer",
  "Next-Gen",
  "Digital",
  "Experiences",
  "That",
  "Scale",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030712]"
    >
      {/* Dynamic 3D interactive particle canvas */}
      <ParticleCanvas particleCount={70} />

      {/* Atmospheric radial glow lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-violet-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-indigo-600/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none mask-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Translucent badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] text-xs sm:text-sm font-medium text-cyan-300"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Next-Gen Digital Agency</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">Next.js 15 & Motion Specialist</span>
        </motion.div>

        {/* Kinetic Typography: Staggered Word Reveal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] sm:leading-[1.05] mb-6 select-none">
          {headlineWords.map((word, i) => {
            const isGradient = word === "Next-Gen" || word === "Experiences";
            return (
              <span key={i} className="inline-block overflow-hidden mr-2 sm:mr-3.5">
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.15 + i * 0.08,
                    ease: [0.215, 0.61, 0.355, 1] as const,
                  }}
                  className={`inline-block ${
                    isGradient
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]"
                      : "text-white"
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 px-4"
        >
          We architect ultra-fast web platforms, bespoke AI automation pipelines, and
          immersive 60&nbsp;FPS interfaces that captivate high-intent users and accelerate
          hypergrowth.
        </motion.p>

        {/* Magnetic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <MagneticButton
            href="#contact"
            variant="primary"
            size="lg"
            triggerConfetti={true}
            className="w-full sm:w-auto"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href="#work"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <span>Explore Work</span>
          </MagneticButton>
        </motion.div>

        {/* Trust Badges / Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-white/[0.08] w-full max-w-3xl"
        >
          <div className="flex items-center justify-center gap-2.5 text-zinc-400 text-xs sm:text-sm">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>60 FPS Fluid Motion</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-zinc-400 text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100/100 Lighthouse Web Vitals</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2.5 text-zinc-400 text-xs sm:text-sm">
            <Code className="w-4 h-4 text-indigo-400" />
            <span>Next.js 15 & React 19 Core</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade transition to marquee */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}
