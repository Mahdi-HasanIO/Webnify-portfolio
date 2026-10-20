import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { projects } from "@/data/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found | Webnify" };

  return {
    title: `${project.title} — Case Study | Webnify`,
    description: project.description,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 mb-8 transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Case Study Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold border"
              style={{
                borderColor: `${project.accentColor}50`,
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.client} • {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-2xl text-cyan-400 font-medium max-w-3xl mb-8">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                <span>Visit Live Application</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="relative w-full h-72 sm:h-96 md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl bg-black/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>

        {/* Results & Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/30 mb-20">
          {project.results.map((res, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {res.value}
              </span>
              <span className="text-xs text-zinc-400 mt-1">{res.label}</span>
            </div>
          ))}
        </div>

        {/* Problem Statement & Solution Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-2 block">
              The Challenge
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">Problem Statement</h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              The Innovation
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">Solution Architecture</h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.solutionArchitecture}
            </p>
          </div>
        </div>

        {/* Key Features Breakdown */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] mb-20">
          <h2 className="text-2xl font-bold text-white mb-6">Key Engineered Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-200">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Resolution Preview Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Visual &amp; System Previews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/[0.08] bg-black/40"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} Preview ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Testimonial */}
        {project.testimonial && (
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#091636] to-[#040d21] border border-cyan-500/30 mb-20 relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-white/[0.04] pointer-events-none" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
              Client Feedback
            </span>
            <p className="text-lg sm:text-2xl text-zinc-100 font-normal italic leading-relaxed mb-6">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">{project.testimonial.author}</span>
              <span className="text-xs text-cyan-400">{project.testimonial.role}</span>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center p-8 sm:p-14 rounded-3xl bg-white/[0.02] border border-white/[0.08] max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Want to achieve similar benchmarks?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6">
            Schedule a technical strategy sprint with our principal engineers.
          </p>
          <MagneticButton href="/contact" variant="primary" size="lg" triggerConfetti={true}>
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
