"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIds, setOpenIds] = useState<string[]>([faqs[0].id]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Process", "Pricing", "Technology", "Support"];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-xs font-medium text-cyan-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Everything you need to know about partnering with Webnify.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer",
                activeCategory === cat
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl transition-all duration-300 border overflow-hidden",
                  isOpen
                    ? "bg-white/[0.05] border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.1)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15"
                )}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/[0.05] text-cyan-400 border border-white/[0.08]">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "p-2 rounded-full border transition-transform duration-300 shrink-0",
                      isOpen
                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/40 rotate-180"
                        : "bg-white/5 text-zinc-400 border-white/10"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a custom question or specific requirements?</h4>
              <p className="text-xs text-zinc-400">Our senior architects reply in under 4 hours.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15 transition-all shrink-0"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
}
