import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingUp,
  Cpu,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { services } from "@/data/services";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Webnify" };

  return {
    title: `${service.title} | Webnify Agency`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 mb-8 transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#091530] via-[#071129] to-[#040916] border border-cyan-500/30 shadow-2xl overflow-hidden mb-16">
          <div
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ backgroundColor: service.glowColor }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-xs font-mono text-cyan-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Service Specification • {service.number}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-xl text-cyan-400 font-medium mb-6">
              {service.tagline}
            </p>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              {service.longDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono text-zinc-400">
                  Estimated Timeline
                </span>
                <span className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {service.timeline}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono text-zinc-400">
                  Target Performance
                </span>
                <span className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-1.5 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  {service.metric.value}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <span className="text-[10px] uppercase font-mono text-zinc-400">
                  Investment Scope
                </span>
                <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono flex items-center gap-1 mt-0.5">
                  <DollarSign className="w-4 h-4" />
                  {service.pricingRange}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables & Architecture Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Key Deliverables */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Target Deliverables</span>
            </h2>
            <div className="flex flex-col gap-4">
              {service.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{deliv}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Production-ready asset transfer with full documentation and deployment automation.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Standards */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>Engineered Tech Stack</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              We exclusively deploy current LTS and battle-tested modern tools with strict type safety,
              edge caching, and zero layout shift guarantees.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% IP &amp; Code Ownership</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Full copyright, source repositories, deployment keys, and design tokens transfer
                directly to your organization upon launch.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Delivery Process */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Execution Roadmap for {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 mb-2 block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Project Inquiry Trigger */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-[#02050e] border border-cyan-500/40 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Ready to initiate your {service.title}?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mb-8">
            Tell us about your target milestones, technical constraints, and launch timeline. We
            will review your RFC within 24 hours.
          </p>
          <MagneticButton
            href={`/contact?service=${service.slug}`}
            variant="primary"
            size="lg"
            triggerConfetti={true}
          >
            <span>Start {service.title} Project</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
