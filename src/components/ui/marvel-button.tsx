"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MarvelButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex items-center justify-center rounded-lg">
      <button
        className={cn(
          "relative overflow-hidden px-6 py-3 rounded-md font-bold text-xl uppercase tracking-wider transition-all duration-300",
          "bg-gradient-to-r from-red-600 to-red-700 text-white border-2 border-yellow-500",
          "shadow-[0_0_15px_rgba(234,179,8,0.5)]",
          isHovering && "shadow-[0_0_25px_rgba(234,179,8,0.8)] scale-105"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Comic-style text with metallic effect */}
        <span className="relative z-10 text-shadow-marvel">{children}</span>

        {/* Energy glow effect on hover */}
        <span
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 opacity-0 transition-opacity duration-300",
            isHovering && "opacity-100"
          )}
        />

        {/* Decorative corner accents */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400" />
      </button>

      {/* Custom text shadow style for the Marvel look */}
      <style jsx global>{`
        .text-shadow-marvel {
          text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5),
            -1px -1px 0 rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(0, 0, 0, 0.5),
            -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5),
            0 0 8px rgba(255, 215, 0, 0.7);
        }
      `}</style>
    </div>
  );
}
