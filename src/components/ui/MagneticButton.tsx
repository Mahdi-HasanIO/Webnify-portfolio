"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glow";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  triggerConfetti?: boolean;
  magneticStrength?: number;
}

export function MagneticButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  triggerConfetti = false,
  magneticStrength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const clientX = e.clientX - (left + width / 2);
    const clientY = e.clientY - (top + height / 2);

    x.set(clientX * magneticStrength);
    y.set(clientY * magneticStrength);
    setCoords({ x: e.clientX - left, y: e.clientY - top });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (triggerConfetti) {
      const rect = ref.current?.getBoundingClientRect();
      const originX = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
      const originY = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: originX, y: originY },
        colors: ["#38bdf8", "#818cf8", "#c084fc", "#34d399"],
      });
    }
    if (onClick) onClick(e);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.65)] border border-cyan-400/30",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white font-medium backdrop-blur-xl border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-white/40",
    outline:
      "bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white border border-zinc-700 hover:border-cyan-400/50 transition-colors",
    glow:
      "relative bg-zinc-950 text-white border border-cyan-500/40 shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(129,140,248,0.5)]",
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full cursor-pointer overflow-hidden transition-all duration-200 select-none group",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {/* Light follower glow on hover */}
      {isHovered && (
        <span
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white/20 rounded-full blur-xl transition-transform"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
          }}
        />
      )}

      {/* Subtle border shimmer line */}
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
