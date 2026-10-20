import React from "react";
import { Metadata } from "next";
import { FileCode2, Scale, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Webnify Agency",
  description: "Webnify contractual terms, engineering deliverables, sprint milestones, and warranty guarantees.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Return Home</span>
        </Link>

        <div className="mb-12 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-mono text-cyan-300 mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Master Services Agreement Terms</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Last Updated: January 15, 2025 • Version 3.1
          </p>
        </div>

        <article className="flex flex-col gap-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileCode2 className="w-5 h-5 text-cyan-400" />
              1. Engagement Scope &amp; Agile Sprints
            </h2>
            <p>
              Webnify engages in client projects under formal Statements of Work (SOWs) structured as 1-week iterative development cycles. Scope variations or emergent feature requests are estimated and approved transparently prior to implementation.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              2. Intellectual Property &amp; Code Delivery
            </h2>
            <p>
              Upon receipt of final milestone settlement, Webnify transfers all right, title, and interest in and to the custom software code, UI designs, animations, and documentation developed for the client under the applicable SOW. Pre-existing open-source libraries remain licensed under their respective MIT/Apache 2.0 terms.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-400" />
              3. Post-Launch Warranty
            </h2>
            <p>
              All fixed-price deliveries include a thirty (30) calendar day post-launch warranty period during which Webnify will promptly remediate any functional defects or regressions that fail to conform with the agreed technical specifications at zero additional charge.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              4. Limitation of Liability
            </h2>
            <p>
              Except in cases of gross negligence or willful misconduct, in no event shall either party&apos;s aggregate liability exceed the total fees paid or payable by the client under the applicable SOW during the preceding twelve (12) month period.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
