"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Send,
  CheckCircle,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Heart,
} from "lucide-react";
import confetti from "canvas-confetti";
import { MagneticButton } from "@/components/ui/MagneticButton";

const SITEMAP = {
  Services: [
    { label: "High-Performance Web Apps", href: "/services/web-apps" },
    { label: "Next-Gen SaaS Platforms", href: "/services/saas-platforms" },
    { label: "AI & LLM Workflows", href: "/services/ai-solutions" },
    { label: "Spatial E-Commerce", href: "/services/ecommerce" },
    { label: "All Services Overview", href: "/services" },
  ],
  Company: [
    { label: "About Webnify", href: "/about" },
    { label: "Selected Work", href: "/work" },
    { label: "Client Testimonials", href: "/#reviews" },
    { label: "Development Protocol", href: "/#process" },
    { label: "Contact Studio", href: "/contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "/work" },
    { label: "NeuroFlow Case Study", href: "/work/neuroflow-ai" },
    { label: "Synthex Case Study", href: "/work/synthex-finance" },
    { label: "Frequently Asked Questions", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubscribed(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#818cf8", "#34d399", "#f43f5e"],
    });
  };

  return (
    <footer id="contact" className="relative bg-[#02050e] border-t border-white/[0.08] overflow-hidden pt-20 pb-12">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-600/15 via-blue-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glowing Grand CTA Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 mb-20 overflow-hidden bg-gradient-to-r from-[#091530] via-[#0b193d] to-[#071129] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Q2 / Q3 Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to elevate your brand to the{" "}
              <span className="text-gradient-cyan">Next Dimension?</span>
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-4 max-w-xl">
              Let&apos;s build an extraordinary digital product together. Book a strategy session with
              our principal design and engineering leads.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <MagneticButton
              href="mailto:contact@webnify.io"
              variant="primary"
              size="lg"
              triggerConfetti={true}
              className="px-8 py-5 text-base font-bold"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand & Live Clock Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-2.5 mb-4 focus:outline-none">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Webnify
                </span>
              </a>
              <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mb-6">
                Creative Front-End Specialists and High-Velocity Animation Engineers building the
                future of digital presence.
              </p>

              {/* Live Timezone Clock */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                <Clock className="w-4 h-4 text-cyan-400 animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-zinc-500">
                    Live System Clock
                  </span>
                  <span className="text-xs font-mono font-semibold text-zinc-200">
                    {time || "Synchronizing..."}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: "https://x.com", label: "X" },
                { icon: <Github className="w-4 h-4" />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Dribbble className="w-4 h-4" />, href: "https://dribbble.com", label: "Dribbble" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Links */}
          {Object.entries(SITEMAP).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-300 font-bold mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-cyan-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Input Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-300 font-bold mb-4">
              Intelligence Brief
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Join 12,000+ tech leads receiving our monthly breakdown on modern web animation,
              AI agents, and architecture.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You&apos;re in! Welcome to the insider circle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="founder@company.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">
                  Zero spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Webnify Agency. Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            <span>&amp; high-velocity code.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-zinc-300 transition-colors">
              Security RFC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
