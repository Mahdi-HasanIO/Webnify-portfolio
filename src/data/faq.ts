export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Process" | "Pricing" | "Technology" | "Support";
}

export const faqs: FAQItem[] = [
  {
    id: "faq-timeline",
    question: "What is your typical project timeline from kickoff to launch?",
    answer:
      "Most agency projects range between 4 to 8 weeks depending on scope and complexity. Marketing websites and digital showcases typically take 3 to 5 weeks, while full-scale SaaS platforms or custom 3D web applications take 6 to 8 weeks. We work in 1-week sprints with clear demo milestones.",
    category: "Process",
  },
  {
    id: "faq-tech-stack",
    question: "What tech stack do you recommend and specialize in?",
    answer:
      "Our core front-end stack is Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS, orchestrated with Framer Motion and GSAP ScrollTrigger for 60 FPS animations. For back-ends, we use Node.js/FastAPI, PostgreSQL/Supabase, ClickHouse, and Python/PyTorch for AI agent workflows.",
    category: "Technology",
  },
  {
    id: "faq-animation-perf",
    question: "Will heavy animations affect our website speed or SEO score?",
    answer:
      "Never. We are animation engineers who prioritize performance first. All animations utilize GPU-accelerated CSS transforms (`translate3d`, `opacity`, `scale`), lazy loading, and GSAP ticker optimizations. We guarantee 90+ Lighthouse performance scores and zero layout shifts (CLS < 0.05).",
    category: "Technology",
  },
  {
    id: "faq-ip-ownership",
    question: "Do we get 100% intellectual property ownership of the codebase?",
    answer:
      "Yes, absolutely. Once final delivery is completed and settled, 100% of the intellectual property, custom code, Figma designs, motion assets, and deployment keys belong exclusively to your company under a clean MIT/proprietary license transfer.",
    category: "Process",
  },
  {
    id: "faq-pricing",
    question: "How do your pricing models and engagements work?",
    answer:
      "We offer two flexible models: Fixed-Price Project Contracts (with milestone payments tied to tangible deliverables) and Dedicated Monthly Retainers (for venture-backed startups needing a continuous, high-velocity design & engineering team). Reach out for a tailored estimate.",
    category: "Pricing",
  },
  {
    id: "faq-support",
    question: "What happens after our website or web app launches?",
    answer:
      "Every project includes 30 days of complimentary post-launch warranty support, bug fixing, and telemetry monitoring. Afterward, we offer ongoing maintenance, continuous optimization, feature expansion, and SEO maintenance packages.",
    category: "Support",
  },
];
