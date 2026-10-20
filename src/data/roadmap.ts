export interface RoadmapStep {
  step: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: string;
  badge: string;
  highlightColor: string;
}

export const roadmapSteps: RoadmapStep[] = [
  {
    step: "01",
    phase: "Phase 1: Discovery & Strategy",
    title: "Idea & Architecture Blueprint",
    duration: "Week 1",
    description:
      "We dissect your business goals, target audience, competitive advantages, and technical requirements to create an airtight digital architecture and visual direction roadmap.",
    deliverables: [
      "Technical Architecture RFC",
      "User Journey & Sitemap",
      "Feature Prioritization Matrix",
      "Tech Stack & Infrastructure Plan",
    ],
    icon: "Lightbulb",
    badge: "Foundation",
    highlightColor: "#06b6d4",
  },
  {
    step: "02",
    phase: "Phase 2: Visual & Interaction Design",
    title: "UI/UX & Kinetic Prototyping",
    duration: "Week 2 - 3",
    description:
      "Crafting high-fidelity Figma components, custom design systems, typography hierarchies, and clickable micro-interaction prototypes that bring your brand's personality to life.",
    deliverables: [
      "Design System & Tokens",
      "Desktop & Mobile Hi-Fi Prototypes",
      "Motion & Micro-Interaction Specs",
      "Interactive 3D / Asset Direction",
    ],
    icon: "Palette",
    badge: "Craftsmanship",
    highlightColor: "#8b5cf6",
  },
  {
    step: "03",
    phase: "Phase 3: High-Velocity Engineering",
    title: "Full-Stack Development",
    duration: "Week 4 - 6",
    description:
      "Turning pixels into high-speed code with Next.js 15, React 19, TypeScript, and GSAP. Clean, componentized code with automated testing, edge caching, and scalable APIs.",
    deliverables: [
      "Modular Next.js Codebase",
      "GSAP & Framer Motion Integration",
      "API & Database Architecture",
      "Continuous Integration / Deployment",
    ],
    icon: "Code2",
    badge: "Engineering",
    highlightColor: "#3b82f6",
  },
  {
    step: "04",
    phase: "Phase 4: Optimization & Deployment",
    title: "QA, Polish & Global Launch",
    duration: "Week 7 - 8",
    description:
      "Rigorous cross-browser stress testing, Lighthouse 100 audits, accessibility compliance, SEO indexing, and seamless production rollout with zero downtime.",
    deliverables: [
      "Lighthouse 100/100 Core Web Vitals",
      "Cross-Device & Browser QA",
      "Technical SEO & OpenGraph Config",
      "Post-Launch Analytics & 30-Day Support",
    ],
    icon: "Rocket",
    badge: "Ascent",
    highlightColor: "#10b981",
  },
];
