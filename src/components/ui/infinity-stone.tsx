"use client";

import { motion } from "framer-motion";

interface InfinityStoneProps {
  color?: string;
  size?: number;
}

export default function InfinityStone({
  color = "#f5d76e",
  size = 48,
}: InfinityStoneProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          backgroundColor: color,
          width: size * 1.8,
          height: size * 1.8,
          filter: `blur(10px)`,
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Stone holder - forged metal texture */}
      <div
        className="absolute rounded-full z-0"
        style={{
          width: size * 1.5,
          height: size * 1.5,
          background: `
            radial-gradient(circle at 30% 30%, 
              #e6c566 0%, 
              #c5a54b 30%, 
              #a08a3c 60%, 
              #7a6a2c 100%)
          `,
          boxShadow: `
            inset 0 2px 4px rgba(255, 255, 255, 0.5),
            inset 0 -2px 4px rgba(0, 0, 0, 0.5),
            0 2px 8px rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        {/* Subtle dents and imperfections */}
        <div className="absolute w-2 h-1 rounded-full bg-black/10 top-1/4 left-1/4 rotate-45"></div>
        <div className="absolute w-1 h-2 rounded-full bg-black/10 bottom-1/3 right-1/4 rotate-12"></div>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white/10 top-1/3 right-1/3"></div>
      </div>

      {/* Stone */}
      <motion.div
        className="relative rounded-full z-10"
        style={{
          width: size,
          height: size,
          background: `
            radial-gradient(circle at 30% 30%, 
              ${adjustColor(color, 40)} 0%, 
              ${color} 40%, 
              ${adjustColor(color, -30)} 80%, 
              ${adjustColor(color, -50)} 100%)
          `,
          boxShadow: `
            0 0 20px ${color}80, 
            inset 0 0 15px rgba(255, 255, 255, 0.7),
            inset 0 0 5px rgba(0, 0, 0, 0.5)
          `,
        }}
      >
        {/* Facet highlights */}
        <div
          className="absolute top-1/4 left-1/4 w-1/5 h-1/5 rounded-full opacity-90"
          style={{ backgroundColor: "white" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-1/6 h-1/6 rounded-full opacity-70"
          style={{ backgroundColor: "white" }}
        />

        {/* Additional facets for more realism */}
        <div
          className="absolute top-1/2 right-1/4 w-1/8 h-1/8 rounded-full opacity-50"
          style={{ backgroundColor: "white" }}
        />
      </motion.div>
    </div>
  );
}

// Helper function to adjust color brightness
function adjustColor(color: string, amount: number): string {
  // Simple implementation for hex colors
  if (color.startsWith("#")) {
    color = color.slice(1);
    const num = Number.parseInt(color, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00ff) + amount;
    let b = (num & 0x0000ff) + amount;

    r = Math.min(Math.max(0, r), 255);
    g = Math.min(Math.max(0, g), 255);
    b = Math.min(Math.max(0, b), 255);

    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
  }
  return color;
}
