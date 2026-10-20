"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  TrendingUp,
  Pause,
  Play,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance slider every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      id="reviews"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-medium text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Social Validation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trusted by Visionary <span className="text-gradient-cyan">Founders & Leaders</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Real outcomes from high-growth venture-backed teams and global enterprises.
          </p>
        </div>

        {/* Carousel Main Card */}
        <div className="relative min-h-[380px] sm:min-h-[340px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.1] backdrop-blur-2xl shadow-2xl relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-white/[0.04] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/[0.08]">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <Image
                      src={current.avatar}
                      alt={current.author}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {current.author}
                    </h4>
                    <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                      {current.role} • {current.company}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stat Pill */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs sm:text-sm font-bold font-mono">
                    {current.stat}
                  </span>
                </div>
              </div>

              {/* Quote Highlight & Content */}
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                  Key Highlight: &ldquo;{current.highlight}&rdquo;
                </span>
                <p className="text-base sm:text-xl text-zinc-200 leading-relaxed font-normal italic">
                  &ldquo;{current.content}&rdquo;
                </p>
              </div>

              {/* Tag footer */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                  {current.projectTag}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span>Verified Review</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls: Manual Prev/Next, Dots Pagination, Pause/Play */}
        <div className="flex items-center justify-between mt-8 pt-4">
          {/* Pause / Play status */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] transition-colors"
            title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-cyan-400" /> : <Pause className="w-3.5 h-3.5 text-zinc-400" />}
            <span className="font-mono text-[11px]">{isPaused ? "Paused" : "Auto"}</span>
          </button>

          {/* Dots Pagination */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  idx === currentIndex
                    ? "w-8 bg-cyan-400 shadow-[0_0_10px_#38bdf8]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
