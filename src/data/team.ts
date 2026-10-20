export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Executive & Design" | "Engineering" | "AI & Research" | "Operations";
  bio: string;
  avatar: string;
  specialties: string[];
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "mahdi-hasan",
    name: "Mahdi Hasan",
    role: "Founder & Principal Architect",
    department: "Executive & Design",
    bio: "Pioneering creative engineering and interactive motion design. Passionate about 60 FPS spatial interfaces and scalable distributed cloud architectures.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    specialties: ["System Architecture", "Next.js 15", "WebGL & GSAP", "Brand Strategy"],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "alex-vance",
    name: "Alexandre Vance",
    role: "Head of AI & ML Engineering",
    department: "AI & Research",
    bio: "Ex-FAANG research engineer specializing in autonomous LLM agents, vector embeddings, and low-latency inference pipelines.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    specialties: ["PyTorch", "FastAPI", "RAG Architectures", "Autonomous Agents"],
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sophia-chen",
    name: "Sophia Chen",
    role: "Lead Creative Designer",
    department: "Executive & Design",
    bio: "Crafting futuristic design languages and Aceternity-grade spatial experiences for next-gen digital enterprises.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    specialties: ["Design Systems", "Kinetic Typography", "3D Modeling", "Figma Tokens"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "marcus-holloway",
    name: "Marcus Holloway",
    role: "Staff Front-End Engineer",
    department: "Engineering",
    bio: "Obsessed with browser rendering cycles, zero layout shifts, and microsecond-level component reactivity.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    specialties: ["React 19 Core", "WebSockets", "CSS Performance", "Turbopack"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "zara-al-mansoor",
    name: "Zara Al-Mansoor",
    role: "VP of Product Delivery",
    department: "Operations",
    bio: "Aligning deep technical sprints with high-impact founder milestones. 100% on-time delivery track record across 40+ client engagements.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    specialties: ["Agile Protocols", "Security Auditing", "Client Success", "Sprint Telemetry"],
    social: {
      linkedin: "https://linkedin.com",
    },
  },
];
