export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  accent: string;
  glowColor: string;
  pricingRange: string;
  timeline: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  metric: {
    value: string;
    label: string;
  };
  processSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export const services: ServiceItem[] = [
  {
    id: "web-apps",
    slug: "web-apps",
    number: "01",
    title: "High-Performance Web Apps",
    tagline: "Ultra-fast, dynamic web experiences engineered for scale",
    description:
      "We design and develop custom web applications using Next.js 15, React 19, and headless architectures with sub-second page loads, fluid micro-interactions, and flawless responsive layouts.",
    longDescription:
      "In an era where every 100ms of latency costs conversions, Webnify engineers web experiences that achieve near-instantaneous interactivity. From server-rendered React Server Components (RSC) to optimized edge streaming and GSAP-accelerated micro-interactions, our web applications establish your brand as an undisputed industry leader.",
    icon: "LayoutGrid",
    accent: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.35)",
    pricingRange: "$10,000 - $25,000",
    timeline: "3 - 5 weeks",
    features: [
      "Next.js 15 App Router & React Server Components",
      "Dynamic GSAP & Framer Motion 60 FPS animations",
      "Headless CMS (Sanity / Strapi) & microservices",
      "100/100 Google Lighthouse Core Web Vitals",
      "Edge-cached content delivery via Vercel",
      "End-to-end TypeScript & accessible semantic markup",
    ],
    deliverables: [
      "Full-Stack Web App",
      "Custom Design System",
      "API & CMS Integrations",
      "Technical SEO Optimization",
      "30-Day Post-Launch Warranty",
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript", "GSAP 3", "Vercel Edge"],
    metric: {
      value: "< 0.4s",
      label: "Average First Contentful Paint",
    },
    processSteps: [
      { step: "01", title: "Information Architecture", desc: "User journey mapping, wireframing, and component hierarchy design." },
      { step: "02", title: "Kinetic UI Prototyping", desc: "High-fidelity Figma layouts with micro-interaction direction." },
      { step: "03", title: "Server Component Build", desc: "Clean TypeScript architecture with streaming SSR and GSAP orchestration." },
      { step: "04", title: "Lighthouse 100 Audit", desc: "Cross-device stress testing and performance calibration." },
    ],
  },
  {
    id: "saas-platforms",
    slug: "saas-platforms",
    number: "02",
    title: "Next-Gen SaaS Platforms",
    tagline: "Scalable cloud applications built for recurring revenue",
    description:
      "End-to-end cloud software engineering from multi-tenant database architectures to frictionless subscription billing, role-based access control, and intuitive analytic dashboards.",
    longDescription:
      "Building a software-as-a-service requires more than pretty dashboards; it demands industrial-grade data isolation, effortless onboarding funnels, and unyielding uptime. We architect multi-tenant SaaS platforms with automated billing, RBAC access gates, and ultra-responsive telemetry visualization.",
    icon: "Cpu",
    accent: "from-indigo-500 to-purple-600",
    glowColor: "rgba(99, 102, 241, 0.35)",
    pricingRange: "$20,000 - $48,000",
    timeline: "6 - 8 weeks",
    features: [
      "Multi-tenant database schema & secure auth (NextAuth/Clerk)",
      "Stripe / LemonSqueezy subscription & webhook automation",
      "Real-time analytical dashboards & charting (Recharts/Chart.js)",
      "Role-Based Access Control (RBAC) & audit logging",
      "Automated CI/CD pipelines & zero-downtime blue/green deploys",
      "Serverless background jobs with Inngest / BullMQ",
    ],
    deliverables: [
      "Scalable SaaS Foundation",
      "Billing & Subscription Engine",
      "Interactive Telemetry Dashboard",
      "OpenAPI Specification & SDK",
      "Infrastructure-as-Code Terraform Setup",
    ],
    techStack: ["Next.js 15", "PostgreSQL", "Supabase", "Prisma/Drizzle", "Stripe API", "ClickHouse"],
    metric: {
      value: "99.99%",
      label: "Platform Uptime SLA",
    },
    processSteps: [
      { step: "01", title: "Data Model & Multi-Tenancy", desc: "Schema design, tenant isolation policies, and auth flows." },
      { step: "02", title: "Dashboard & Workflow UX", desc: "Intuitive state machines and workspace hierarchy." },
      { step: "03", title: "Stripe & Webhook Engine", desc: "Proration, plan tiers, and automated usage metering." },
      { step: "04", title: "Security & Load Testing", desc: "SOC2 compliance readiness and automated vulnerability scans." },
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    number: "03",
    title: "AI & Intelligent Automation",
    tagline: "Bespoke AI agents, LLM pipelines, and predictive models",
    description:
      "Transform business efficiency with custom LLM integrations, autonomous agent workflows, RAG search engines, and real-time streaming conversational assistants tailored to your enterprise data.",
    longDescription:
      "Move beyond generic chatbots. Webnify designs custom neural pipelines that reason across your proprietary company knowledge. We develop agentic workflows equipped with function calling, vector memory retrieval, and streaming low-latency user interfaces.",
    icon: "Sparkles",
    accent: "from-emerald-400 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.35)",
    pricingRange: "$18,000 - $40,000",
    timeline: "4 - 7 weeks",
    features: [
      "Autonomous agent workflows & tool/function calling",
      "Retrieval-Augmented Generation (RAG) with hybrid search",
      "Fine-tuned open-source (Llama 3 / Mistral) & OpenAI/Claude APIs",
      "Vector embeddings & high-throughput Pinecone/Qdrant databases",
      "Real-time streaming WebSockets & token pacing",
      "Enterprise guardrails, prompt evaluation, and audit logging",
    ],
    deliverables: [
      "Trained / Fine-Tuned AI Agent",
      "Vector Knowledge Base Ingestion Pipeline",
      "Streaming Conversational Interface",
      "API Middleware & Token Rate Limiter",
      "Prompt Optimization Benchmark Suite",
    ],
    techStack: ["Python 3.12", "FastAPI", "PyTorch", "LangChain/LlamaIndex", "Pinecone", "OpenAI / Anthropic"],
    metric: {
      value: "8.5x",
      label: "Operational Speed Increase",
    },
    processSteps: [
      { step: "01", title: "Knowledge Ingestion", desc: "Document parsing, chunking optimization, and vector embedding." },
      { step: "02", title: "Agent Protocol & Tools", desc: "Prompt engineering, guardrails, and third-party API tool bindings." },
      { step: "03", title: "Streaming Front-End", desc: "Sub-100ms conversational UI with markdown and code execution." },
      { step: "04", title: "Eval Benchmarks", desc: "Precision, recall, and hallucination reduction testing." },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    number: "04",
    title: "Spatial E-Commerce & 3D Stores",
    tagline: "Immersive shopping engines that convert visitors into loyal fans",
    description:
      "Push beyond traditional grids with 3D product visualizers, headless Shopify Plus setups, accelerated one-click checkouts, and hyper-personalized recommendations.",
    longDescription:
      "Transform passive browsing into an irresistible tactile journey. By combining headless Shopify Plus infrastructures with real-time WebGL spatial configurators, our e-commerce solutions create high emotional attachment and deliver staggering conversion lift.",
    icon: "ShoppingBag",
    accent: "from-amber-400 to-rose-500",
    glowColor: "rgba(245, 158, 11, 0.35)",
    pricingRange: "$15,000 - $35,000",
    timeline: "4 - 6 weeks",
    features: [
      "Headless Shopify Plus & Storefront API integration",
      "Interactive 3D WebGL / Three.js product configurators",
      "Sub-second checkout flow & Apple Pay/Shop Pay acceleration",
      "Dynamic bundle builders & algorithmic upsell funnels",
      "Multi-currency, localized tax, and internationalization",
      "Instant faceted search and predictive inventory syncing",
    ],
    deliverables: [
      "Custom Headless Storefront",
      "3D Spatial Product Visualizer",
      "Cart & Checkout Conversion Engine",
      "ERP / Inventory Sync Integration",
      "Comprehensive Analytics Setup",
    ],
    techStack: ["Shopify Plus", "Three.js / React Three Fiber", "Next.js 15", "Sanity CMS", "Stripe"],
    metric: {
      value: "+42%",
      label: "Average Cart Value Lift",
    },
    processSteps: [
      { step: "01", title: "Merchandising Strategy", desc: "Catalog architecture, bundle funnels, and checkout friction analysis." },
      { step: "02", title: "3D Spatial Modeling", desc: "Low-poly WebGL asset optimization and physical material rendering." },
      { step: "03", title: "Storefront API Build", desc: "Ultra-fast headless Next.js cart state with instant edge hydration." },
      { step: "04", title: "Checkout Optimization", desc: "A/B testing, one-click purchase funnels, and analytics tagging." },
    ],
  },
];
