"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Activity } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// 3D Tilt & Glassmorphism Card Component
function BentoCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn("group relative", project.bentoSpan)}
      style={{ perspective: 1000 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
        className="relative h-full w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0b1329]/90 to-[#070b18]/90 border border-white/[0.08] hover:border-cyan-500/40 shadow-2xl transition-all duration-300"
      >
        {/* Dynamic Aceternity spotlight follower */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
          style={{
            opacity: glowPos.opacity,
            background: `radial-gradient(450px circle at ${glowPos.x}px ${glowPos.y}px, rgba(56, 189, 248, 0.18), transparent 70%)`,
          }}
        />

        {/* Top Badges & Category */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md"
              style={{
                borderColor: `${project.accentColor}50`,
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">{project.year}</span>
          </div>

          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors group/btn"
            aria-label={`View live ${project.title}`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>

        {/* Project Thumbnail with smooth zoom effect */}
        <div className="relative z-0 w-full h-48 sm:h-56 md:h-64 my-4 rounded-2xl overflow-hidden border border-white/[0.06] bg-black/40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-transparent to-transparent opacity-80" />

          {/* Metric Pill floating over image */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 leading-none">
                {project.stats.label}
              </span>
              <span className="text-xs font-bold text-white font-mono leading-tight">
                {project.stats.value}
              </span>
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <div className="relative z-10 flex flex-col mt-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-2">
            {project.tagline}
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.05] group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function BentoGridProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI & ML", "Next.js SaaS", "FinTech", "E-Commerce"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-medium text-cyan-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engineered with <span className="text-gradient-cyan">Precision</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
              Explore our recent flagship builds combining spatial UI aesthetics, real-time
              telemetry, and sub-second full-stack architectures.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer",
                  selectedCategory === cat
                    ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-12 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <BentoCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
