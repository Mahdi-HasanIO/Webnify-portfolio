export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  client: string;
  category: "AI & ML" | "Next.js SaaS" | "E-Commerce" | "FinTech" | "Mobile & Web";
  image: string;
  gallery: string[];
  featured?: boolean;
  bentoSpan: string;
  stats: {
    label: string;
    value: string;
  };
  results: {
    value: string;
    label: string;
  }[];
  problemStatement: string;
  solutionArchitecture: string;
  keyFeatures: string[];
  technologies: string[];
  gradient: string;
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: "neuroflow-ai",
    slug: "neuroflow-ai",
    title: "NeuroFlow AI Engine",
    tagline: "Autonomous Agent Workflow Platform",
    client: "NeuroFlow Technologies",
    description: "An enterprise multimodal AI orchestrator processing 45M+ daily requests with real-time streaming, latency under 80ms, and vector graph memory.",
    problemStatement:
      "Legacy workflow engines were incapable of coordinating multi-agent LLM systems with asynchronous human-in-the-loop approvals. The client experienced catastrophic token timeouts, high latency (>2400ms), and user drop-off due to static, non-streaming dashboards.",
    solutionArchitecture:
      "We architected an edge-first Next.js 15 front-end communicating with a Python 3.12 FastAPI microservice mesh over WebSockets. We introduced CRDT-based canvas state synchronization, streaming token pacing, and hybrid Pinecone/Qdrant vector graph retrieval, compressing end-to-end latency to sub-80ms.",
    keyFeatures: [
      "Visual Node-Based Agent Orchestration Canvas",
      "Streaming Sub-80ms LLM Token Pacing with Markdown Rendering",
      "Dynamic Vector Memory Graph Visualizer",
      "Automated Role-Based Evaluation Benchmarks",
      "SOC2-Compliant Token Privacy Gateway",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    featured: true,
    bentoSpan: "col-span-12 md:col-span-8 row-span-2",
    stats: {
      label: "Throughput",
      value: "45M req/day",
    },
    results: [
      { value: "45M+", label: "Daily Streaming Requests" },
      { value: "< 80ms", label: "Average Inference Latency" },
      { value: "99.98%", label: "System Reliability SLA" },
      { value: "-64%", label: "Cloud Compute Costs" },
    ],
    technologies: ["Next.js 15", "PyTorch", "Tailwind CSS", "FastAPI", "WebSockets", "Pinecone"],
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    accentColor: "#06b6d4",
    liveUrl: "https://neuroflow.webnify.io",
    year: "2025",
    testimonial: {
      quote: "Webnify built a platform that allows our enterprise customers to deploy complex autonomous agents in minutes instead of months.",
      author: "Marcus Chen",
      role: "CEO at NeuroFlow",
    },
  },
  {
    id: "synthex-finance",
    slug: "synthex-finance",
    title: "Synthex Capital",
    tagline: "Next-Gen Decentralized Trading Terminal",
    client: "Synthex Capital Inc.",
    description: "High-frequency institutional order book with glassmorphic depth charting and millisecond-level telemetry.",
    problemStatement:
      "Institutional traders required ultra-precise depth of market data and instant order execution. Existing web interfaces suffered from DOM rendering bottlenecks during high volatility spikes, causing missed trades and interface freezing.",
    solutionArchitecture:
      "We engineered a custom WebAssembly charting engine paired with GSAP 60 FPS transitions and React 19 concurrent mode. By offloading WebSocket binary feeds directly into off-screen canvas buffers, we achieved zero UI frame drops even under 100,000 price updates per second.",
    keyFeatures: [
      "Hardware-Accelerated WebAssembly Order Book",
      "Glassmorphic Depth-of-Market Spatial Visualization",
      "Sub-Millisecond Order Routing & Execution",
      "Multi-Monitor Workspace Windowing Architecture",
      "Institutional Audit Logging & Risk Controls",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    bentoSpan: "col-span-12 md:col-span-4 row-span-1",
    stats: {
      label: "Volume Handled",
      value: "$1.8B+",
    },
    results: [
      { value: "$1.8B+", label: "Quarterly Volume Handled" },
      { value: "60 FPS", label: "Zero-Drop Charting" },
      { value: "0.2ms", label: "DOM Render Tick" },
      { value: "4.9/5", label: "Trader Satisfaction Score" },
    ],
    technologies: ["React 19", "GSAP", "TypeScript", "Wasm", "Tailwind CSS"],
    gradient: "from-violet-600/20 via-purple-700/10 to-transparent",
    accentColor: "#8b5cf6",
    liveUrl: "https://synthex.webnify.io",
    year: "2025",
    testimonial: {
      quote: "The speed and fluid 60 FPS charts blew our board away. Webnify delivered institutional perfection.",
      author: "Elena Rostova",
      role: "VP of Product at Synthex",
    },
  },
  {
    id: "aura-commerce",
    slug: "aura-commerce",
    title: "AURA Luxury Commerce",
    tagline: "Immersive 3D Spatial E-Commerce",
    client: "AURA Maison Paris",
    description: "Photorealistic WebGL spatial showcase for high-end luxury fashion brands with 340% increase in checkout conversions.",
    problemStatement:
      "High-end luxury consumers hesitate to purchase $2,000+ couture online without experiencing true material textures, draping, and lighting reflections. Traditional flat photography resulted in 28% return rates.",
    solutionArchitecture:
      "We engineered an interactive WebGL and Three.js 3D showroom with physically-based rendering (PBR) shaders, sub-second 3D asset compression, and headless Shopify Plus integration for frictionless one-click Apple Pay checkouts.",
    keyFeatures: [
      "Real-Time PBR Material & Fabric Physics Visualizer",
      "Interactive 360-Degree Lighting Angle Configurator",
      "Headless Shopify Plus Cart & One-Click Checkout",
      "Dynamic AR Smartphone Mirror Integration",
      "Global Multi-Currency Localization",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    bentoSpan: "col-span-12 md:col-span-4 row-span-2",
    stats: {
      label: "Conversion Boost",
      value: "+340%",
    },
    results: [
      { value: "+340%", label: "Checkout Conversion Lift" },
      { value: "-45%", label: "Product Return Rate" },
      { value: "4.2 min", label: "Average Session Duration" },
      { value: "$4.2M", label: "Launch Month GMV" },
    ],
    technologies: ["Next.js", "Three.js", "Shopify Plus", "Framer Motion", "Tailwind CSS"],
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    accentColor: "#f59e0b",
    liveUrl: "https://aura.webnify.io",
    year: "2024",
    testimonial: {
      quote: "Our spatial showroom drove a 340% increase in conversion rates. The visual fidelity is unmatched.",
      author: "Sarah Lindqvist",
      role: "Head of Brand at AURA",
    },
  },
  {
    id: "hypercloud-infra",
    slug: "hypercloud-infra",
    title: "HyperCloud Edge",
    tagline: "Distributed Serverless Cloud Observability",
    client: "HyperCloud Infrastructure Inc.",
    description: "Global mesh dashboard providing zero-latency trace telemetry, predictive anomalies, and automated scale actions.",
    problemStatement:
      "DevOps engineers managing 15,000+ microservices struggled to isolate distributed network bottlenecks across 42 cloud regions due to fragmented monitoring tools and sluggish trace query latency.",
    solutionArchitecture:
      "We unified edge telemetry by pairing ClickHouse real-time columnar storage with Next.js 15 Server Components and dynamic WebGL graph rendering, providing instant interactive querying across billions of trace spans.",
    keyFeatures: [
      "Global Mesh Topology 3D Globe Visualizer",
      "Sub-Second ClickHouse Analytical Query Engine",
      "Predictive Machine Learning Anomaly Detection",
      "Instant Trace Flamegraph Deep-Dives",
      "Automated Edge Traffic Re-Routing Policies",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "Next.js SaaS",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    bentoSpan: "col-span-12 md:col-span-8 row-span-1",
    stats: {
      label: "Latency Reduction",
      value: "-72%",
    },
    results: [
      { value: "-72%", label: "Global Network Latency" },
      { value: "10x", label: "Trace Query Speedup" },
      { value: "15,000+", label: "Microservices Monitored" },
      { value: "0 min", label: "Unplanned Outages" },
    ],
    technologies: ["Next.js 15", "ClickHouse", "Tailwind CSS", "Go Engine", "TypeScript"],
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    accentColor: "#10b981",
    liveUrl: "https://hypercloud.webnify.io",
    year: "2025",
    testimonial: {
      quote: "Webnify gave our engineers X-ray vision into our global infrastructure with jaw-dropping speed.",
      author: "David Miller",
      role: "CTO at HyperCloud",
    },
  },
  {
    id: "zenith-health",
    slug: "zenith-health",
    title: "Zenith BioSync",
    tagline: "AI Predictive Health Diagnostics",
    client: "Zenith Health Systems",
    description: "Biometric sensor telemetry visualization platform delivering proactive personalized wellness models for healthcare providers.",
    problemStatement:
      "Healthcare practitioners were inundated with noisy, disparate patient biometric feeds that lacked actionable predictive context for chronic disease prevention.",
    solutionArchitecture:
      "We engineered a HIPAA-compliant biometric platform that streams continuous sensor data through PyTorch diagnostic models with intuitive glassmorphic risk gauges and patient trend timelines.",
    keyFeatures: [
      "Real-Time Biometric Stream Processing (FHIR Compatible)",
      "Neural Anomaly Detection with 99.4% Clinical Accuracy",
      "Patient Trend Trajectory Visualizer",
      "HIPAA & GDPR End-to-End Encryption",
      "Physician Alert Triage System",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "Mobile & Web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    bentoSpan: "col-span-12 md:col-span-6 row-span-1",
    stats: {
      label: "Clinical Accuracy",
      value: "99.4%",
    },
    results: [
      { value: "99.4%", label: "Clinical Diagnostic Accuracy" },
      { value: "240k+", label: "Active Patients Monitored" },
      { value: "3.5x", label: "Early Detection Velocity" },
      { value: "100%", label: "HIPAA Compliance Score" },
    ],
    technologies: ["React Native", "PyTorch", "Next.js", "FHIR API", "Tailwind CSS"],
    gradient: "from-rose-500/20 via-pink-600/10 to-transparent",
    accentColor: "#f43f5e",
    liveUrl: "https://zenith.webnify.io",
    year: "2024",
    testimonial: {
      quote: "Webnify is that rare agency that understands both state-of-the-art UI aesthetics and deep AI data science.",
      author: "Amara Okafor",
      role: "Head of Digital Strategy",
    },
  },
  {
    id: "orbit-collab",
    slug: "orbit-collab",
    title: "Orbit Workspace",
    tagline: "Collaborative Real-time Canvas",
    client: "Orbit Collective Inc.",
    description: "Vector infinite canvas for distributed engineering and design teams with audio spatial presence and CRDT syncing.",
    problemStatement:
      "Distributed technical teams were fragmented between whiteboard tools, chat apps, and issue trackers, creating communication drag and lost context during architecture planning.",
    solutionArchitecture:
      "We built a WebRTC and Rust/Wasm infinite spatial canvas that combines audio spatial proximity with instantaneous multi-cursor vector drafting and zero-latency CRDT state synchronization.",
    keyFeatures: [
      "Infinite 60 FPS Vector Zoom Canvas",
      "WebRTC Spatial Proximity Audio Presence",
      "Conflict-Free Replicated Data Type (CRDT) Syncing",
      "Interactive Architecture UML Generators",
      "GitHub & Jira Direct Bidirectional Sync",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "Next.js SaaS",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    bentoSpan: "col-span-12 md:col-span-6 row-span-1",
    stats: {
      label: "Active Teams",
      value: "12,000+",
    },
    results: [
      { value: "12,000+", label: "Active Engineering Teams" },
      { value: "60 FPS", label: "Infinite Vector Pan & Zoom" },
      { value: "< 25ms", label: "P2P State Propagation" },
      { value: "98%", label: "Team Retention Rate" },
    ],
    technologies: ["WebRTC", "Canvas API", "Rust/Wasm", "TypeScript", "Next.js 15"],
    gradient: "from-indigo-500/20 via-blue-600/10 to-transparent",
    accentColor: "#6366f1",
    liveUrl: "https://orbit.webnify.io",
    year: "2024",
    testimonial: {
      quote: "Orbit changed the way our distributed team brainstorms architectures. Fluid, gorgeous, and rock-solid.",
      author: "Julian Frost",
      role: "VP Engineering",
    },
  },
];
