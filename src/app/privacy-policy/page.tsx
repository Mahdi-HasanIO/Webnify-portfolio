import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Webnify Agency",
  description: "Webnify privacy disclosures, data processing protocols, and client confidentiality standards.",
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5" />
            <span>Client Confidentiality Protocol</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Last Updated: January 15, 2025 • Version 2.4 RFC
          </p>
        </div>

        <article className="prose prose-invert prose-zinc max-w-none flex flex-col gap-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              1. Overview &amp; Commitment to Confidentiality
            </h2>
            <p>
              Webnify (&ldquo;the Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects the confidentiality and proprietary nature of our clients&apos; intellectual property, software architecture, and user telemetry. We adhere to strict data minimization principles and zero unauthorized third-party tracking.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-indigo-400" />
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect only the essential information necessary to evaluate project inquiries and fulfill engineering agreements:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-zinc-400 text-sm">
              <li><strong>Contact Information:</strong> Name, work email address, company name, and project scope submitted through our inquiry portal.</li>
              <li><strong>Client Repositories &amp; Credentials:</strong> All deployment keys, SSH keys, and staging database secrets are encrypted at rest using AES-256 and stored strictly in localized hardware vaults.</li>
              <li><strong>Anonymous Telemetry:</strong> Anonymized Core Web Vitals performance benchmarks to verify 60 FPS frame rates and sub-second load times.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-400" />
              3. Non-Disclosure &amp; Intellectual Property Transfer
            </h2>
            <p>
              All customer technical specifications, trade secrets, design systems, and code repositories are guarded by bilateral Non-Disclosure Agreements (NDAs). Upon final project delivery and settlement, 100% of all code assets, Figma design tokens, motion libraries, and infrastructure templates are assigned exclusively to the client.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              4. Contact Privacy Officers
            </h2>
            <p>
              For data access requests, deletion requests, or security audits, contact our designated Data Protection Officer directly at{" "}
              <a href="mailto:security@webnify.io" className="text-cyan-400 underline font-mono">
                security@webnify.io
              </a>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
