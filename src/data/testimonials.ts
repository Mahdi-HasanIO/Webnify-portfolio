export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  highlight: string;
  projectTag: string;
  stat: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "alex-vance",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Synthex Financial",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    highlight: "Delivered 3 weeks ahead of schedule",
    content:
      "Webnify transformed our institutional trading terminal into a work of art. The 60 FPS charts, GSAP interactions, and sub-100ms latency blew our board away. They are not just developers; they are digital craftsmen.",
    projectTag: "FinTech Trading Terminal",
    stat: "+340% User Engagement",
  },
  {
    id: "marcus-chen",
    author: "Marcus Chen",
    role: "Founder & CEO",
    company: "NeuroFlow Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    highlight: "Redefined our AI platform UX",
    content:
      "Integrating complex LLM agent pipelines into an intuitive UI was a nightmare before Webnify. Their team created a fluid node-based workspace that our customers constantly rave about. Exceptional engineering.",
    projectTag: "AI Agent Workspace",
    stat: "45M Daily Queries",
  },
  {
    id: "sarah-lindqvist",
    author: "Sarah Lindqvist",
    role: "Global Head of Brand",
    company: "AURA Spatial Goods",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    highlight: "Triple-digit revenue increase",
    content:
      "Our luxury spatial commerce storefront built by Webnify drove a 340% increase in conversion rates. The 3D product visualizer is silky smooth even on mid-range smartphones. They exceeded all our benchmarks.",
    projectTag: "Spatial 3D E-Commerce",
    stat: "+340% Checkout Lift",
  },
  {
    id: "david-miller",
    author: "David Miller",
    role: "Chief Technology Officer",
    company: "HyperCloud Edge",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    highlight: "Unmatched technical execution",
    content:
      "Working with Webnify was like collaborating with an elite internal strike team. Clean TypeScript, perfect Next.js 15 server component optimization, and impeccable communication throughout the 8-week cycle.",
    projectTag: "Distributed Telemetry SaaS",
    stat: "-72% Global Latency",
  },
  {
    id: "amara-okafor",
    author: "Amara Okafor",
    role: "Head of Digital Strategy",
    company: "Zenith BioSync",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    highlight: "A true design & engineering synergy",
    content:
      "Finding an agency that masters both jaw-dropping Aceternity-level visual aesthetics and robust backend architecture is nearly impossible. Webnify is that rare unicorn. Would hire them again in a heartbeat.",
    projectTag: "Health Telemetry App",
    stat: "99.4% User Approval",
  },
];
