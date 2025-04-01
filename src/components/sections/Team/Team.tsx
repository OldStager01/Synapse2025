"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  president,
  vicePresident,
  seniorCommittee,
  juniorCommittee,
  TeamMember,
} from "./data";
// Define types for team members

// Team member data

export default function TeamMembers() {
  return (
    <div className="w-full text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 uppercase relative inline-block">
              <span className="relative z-10 text-yellow-400">Our Team</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 opacity-70 blur-sm"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join our event and unlock powers that will transform your college
              experience and future career!
            </p>
          </div>
        </div>

        {/* Leadership Spotlight */}
        <HeroSpotlight president={president} vicePresident={vicePresident} />

        {/* Senior Committee */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-marvel-blue to-blue-300">
              Senior Committee
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-marvel-blue"></div>
          </h3>
          <TeamCarousel members={seniorCommittee} />
        </div>

        {/* Junior Committee */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-marvel-gold to-yellow-300">
              Junior Committee
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-marvel-gold"></div>
          </h3>
          <TeamCarousel members={juniorCommittee} />
        </div>
      </div>
    </div>
  );
}

function HeroSpotlight({
  president,
  vicePresident,
}: {
  president: TeamMember;
  vicePresident: TeamMember;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-16">
      <MemberCard
        member={president}
        spotlight={true}
        glowColor="from-marvel-red to-red-400"
        nameColor="text-marvel-red"
      />
      <MemberCard
        member={vicePresident}
        spotlight={true}
        glowColor="from-marvel-blue to-blue-400"
        nameColor="text-marvel-blue"
      />
    </div>
  );
}

function TeamCarousel({ members }: { members: TeamMember[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [showNavButtons, setShowNavButtons] = useState(false);

  // Track window width and touch capability
  useEffect(() => {
    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Tracks window width and touch capability.
     * - Sets windowWidth state to current window.innerWidth
     * - Sets showNavButtons state to true if window width is less than 768px or if the device is touch-capable
     * - Sets isPaused state to false
     */
    /******  14c4309a-ea53-4283-8b84-5b58bdbfffb5  *******/
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setShowNavButtons(width < 768 || "ontouchstart" in window);
      setIsPaused(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced marquee effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = windowWidth < 768 ? 1.5 : 0.8;
    let direction = 1;

    const scroll = () => {
      if (scrollContainer && !isPaused && !isDragging) {
        scrollContainer.scrollLeft += speed * direction;

        // Reverse direction at boundaries
        if (scrollContainer.scrollLeft <= 0) {
          direction = 1;
        } else if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth - 1
        ) {
          direction = -1;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDragging, windowWidth]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollPosition(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollPosition - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 500);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollPosition(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current || e.touches.length !== 1) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    scrollRef.current.scrollLeft = scrollPosition - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 300);
  };

  // Navigation functions
  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const scrollAmount = Math.min(scrollRef.current.clientWidth * 0.8, 300);
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const scrollAmount = Math.min(scrollRef.current.clientWidth * 0.8, 300);
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <div className="relative w-full group">
      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        className={`
          absolute left-2 top-1/2 -translate-y-1/2 z-20
          bg-black/90 hover:bg-black text-white rounded-full p-2
          h-12 w-12 flex items-center justify-center
          shadow-lg border-2 border-white/30
          ${
            showNavButtons
              ? "opacity-100"
              : "md:opacity-0 md:group-hover:opacity-100"
          }
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-white
          active:scale-95
        `}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={scrollRight}
        className={`
          absolute right-2 top-1/2 -translate-y-1/2 z-20
          bg-black/90 hover:bg-black text-white rounded-full p-2
          h-12 w-12 flex items-center justify-center
          shadow-lg border-2 border-white/30
          ${
            showNavButtons
              ? "opacity-100"
              : "md:opacity-0 md:group-hover:opacity-100"
          }
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-white
          active:scale-95
        `}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scroll Container */}
      <div className="overflow-hidden px-14 md:px-16">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          <div className="flex space-x-4 md:space-x-6 py-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 px-1"
                style={{ scrollSnapAlign: "center" }}
              >
                <MemberCard member={member} />
              </div>
            ))}
            {/* Loop items */}
            {members.slice(0, 3).map((member, index) => (
              <div
                key={`loop-${index}`}
                className="snap-center flex-shrink-0 px-1"
                style={{ scrollSnapAlign: "center" }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/70 to-transparent z-10 pointer-events-none" />
    </div>
  );
}

interface MemberCardProps {
  member: TeamMember;
  spotlight?: boolean;
  glowColor?: string;
  nameColor?: string;
}

function MemberCard({
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
        spotlight ? "w-64 md:w-72" : "w-48 md:w-56"
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
          spotlight ? "h-80 md:h-96" : "h-64 md:h-72"
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
                  transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
                }}
              />
            </div>

            {/* Comic-style nameplate */}
            <div
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
            </div>

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
          <div className="text-xs text-center text-gray-400">
            <p className="mb-2">Tap card to flip back</p>
            <p>Member bio and details would go here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
