import React from "react";
import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 flex flex-col items-center justify-center p-6 overflow-hidden selection:bg-cyan-500 selection:text-black">
      {/* Interactive 3D Particle Error Canvas */}
      <ParticleCanvas particleCount={80} />

      {/* Atmospheric radial glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-rose-600/15 via-purple-600/15 to-cyan-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-950/20 text-xs font-mono text-rose-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span>Error 404 • Coordinate Drift</span>
        </div>

        {/* Big Glitch 404 Headline */}
        <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 mb-4 font-mono select-none">
          404
        </h1>

        {/* Kinetic Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Page Lost in <span className="text-gradient-cyan">Cyberspace</span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
          The quantum route you are attempting to traverse does not exist or has been shifted to
          another node on the Webnify edge mesh.
        </p>

        {/* Return to Safety Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton href="/" variant="primary" size="lg" triggerConfetti={true}>
            <Home className="w-4 h-4" />
            <span>Return to Safety</span>
          </MagneticButton>

          <Link
            href="/work"
            className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-zinc-300 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Explore Work Instead</span>
          </Link>
        </div>

        {/* Technical Coordinate Code Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] text-[11px] font-mono text-zinc-600">
          SYSTEM_ERR_CODE: ROUTE_NOT_FOUND // STATUS: TERMINAL_RESTORED
        </div>
      </div>
    </div>
  );
}
