import { cn } from "@/lib/utils";
import { TeamMember } from "./data";
import { useState } from "react";
import Image from "next/image";

interface MemberCardProps {
  member: TeamMember;
  spotlight?: boolean;
  glowColor?: string;
  nameColor?: string;
}

export default function MemberCard({
  member,
  spotlight = false,
  glowColor,
  nameColor,
}: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group perspective-1000",
        spotlight ? "w-64 md:w-72" : "w-48 md:w-64"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "relative rounded-lg overflow-hidden transition-all duration-500 transform preserve-3d",
          isFlipped ? "rotate-y-180" : "",
          isHovered && !isFlipped ? "scale-105" : "",
          spotlight ? "h-80 md:h-96" : "h-64 md:h-[22rem]"
        )}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          {/* Glow effect */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-0",
              `bg-gradient-to-tr ${glowColor}`,
              "blur-xl"
            )}
          ></div>

          {/* Card content */}
          <div className="relative z-10 h-full transform transition-transform duration-500">
            <div className="h-full w-full overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${20}px) scale(${1.1}) translateX(${5}px) translateY(${5}px)`,
                }}
              />
            </div>

            {/* Comic-style nameplate */}
            {/* <div
              className={cn(
                "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4",
                "transform transition-transform duration-500",
                isHovered ? "translate-y-0" : "translate-y-0"
              )}
              style={{
                transformStyle: "preserve-3d",
                transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
              }}
            >
              <h3
                className={cn(
                  "font-extrabold text-lg md:text-xl tracking-tight leading-tight",
                  nameColor
                )}
                style={{
                  textShadow: "2px 2px 0 rgba(0,0,0,0.8)",
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                {member.name}
              </h3>
              <p className="text-sm text-gray-300 font-medium mt-1">
                {member.position}
              </p>
            </div> */}

            {/* Border effect */}
            <div
              className={cn(
                "absolute inset-0 border-2 rounded-lg transition-colors duration-300",
                isHovered
                  ? `border-${nameColor && nameColor.split("-")[1]}-500`
                  : "border-transparent"
              )}
            ></div>
          </div>
        </div>

        {/* Back of card (flipped) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 flex flex-col justify-center items-center">
          <h3 className={`text-xl font-bold mb-2 ${nameColor}`}>
            {member.name}
          </h3>
          <p className="text-sm text-gray-300 mb-4">{member.position}</p>
          <div className="text-xs text-center text-gray-400"></div>
        </div>
      </div>
    </div>
  );
}
