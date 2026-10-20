import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { services } from "@/data/services";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Specialized Services & Capabilities | Webnify",
  description:
    "Explore Webnify's full spectrum of digital engineering services: High-Performance Web Apps, Next-Gen SaaS, AI Solutions, and Spatial 3D E-Commerce.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-semibold text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Spectrum Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Engineering the <span className="text-gradient-cyan">Future of Web</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We partner with ambitious startups and industry leaders to design and engineer
            breakthrough software, 60 FPS spatial motion, and autonomous intelligence.
          </p>
        </div>

        {/* Services Grid with Pricing & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#091124] to-[#050a16] border border-white/[0.08] hover:border-cyan-500/40 shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
                    Service {service.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {service.timeline}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {service.pricingRange}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features Matrix */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                    Core Architectural Deliverables
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] mb-8">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-zinc-400 border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Deep Dive Route Link */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-zinc-500">
                    Target Impact
                  </span>
                  <span className="text-sm font-bold font-mono text-white">
                    {service.metric.value} {service.metric.label}
                  </span>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-cyan-500 hover:text-white text-zinc-200 border border-white/10 hover:border-cyan-400 transition-all text-xs font-semibold group/btn"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl mb-24 overflow-x-auto">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Technical Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Architecture &amp; Service Matrix
            </h3>
          </div>

          <table className="w-full text-left text-sm text-zinc-300 min-w-[650px]">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase font-mono text-zinc-400">
                <th className="py-4">Service Tier</th>
                <th className="py-4">Primary Stack</th>
                <th className="py-4">Delivery Cycle</th>
                <th className="py-4">Investment</th>
                <th className="py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {services.map((s) => (
                <tr key={s.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {s.title}
                  </td>
                  <td className="py-4 font-mono text-xs text-zinc-400">
                    {s.techStack.slice(0, 3).join(", ")}
                  </td>
                  <td className="py-4 font-mono text-xs">{s.timeline}</td>
                  <td className="py-4 font-mono text-cyan-300 font-semibold">{s.pricingRange}</td>
                  <td className="py-4 text-right">
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-xs text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-[#030712] border border-cyan-500/30 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Zap className="w-10 h-10 text-cyan-400 mb-4 animate-bounce" />
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Have a specialized or hybrid requirement?
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mb-8">
            We routinely build cross-disciplinary platforms combining spatial 3D interfaces with
            custom LLM agent pipelines and serverless scale.
          </p>
          <MagneticButton href="/contact" variant="primary" size="lg" triggerConfetti={true}>
            <span>Request Custom Architecture Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
