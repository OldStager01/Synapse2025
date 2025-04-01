"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
  carouselId: string;
}

export default function TeamCarousel({
  members,
  carouselId,
}: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isMobile = useMobile();

  const itemsPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(members.length / itemsPerView);

  // Auto-scroll functionality
  useEffect(() => {
    if (carouselRef.current) {
      controls.set({
        x: `${-currentIndex * 100}%`,
      });
    }
  }, [currentIndex, controls]);

  // Update carousel position when index changes
  useEffect(() => {
    controls.start({
      x: `${-currentIndex * 100}%`,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  }, [currentIndex, controls]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={carouselRef}
    >
      <motion.div
        className="flex"
        animate={controls}
        drag="x"
        dragConstraints={{
          left:
            -(
              carouselRef.current?.scrollWidth -
              carouselRef.current?.offsetWidth
            ) || 0,
          right: 0,
        }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(_, info) => {
          setIsDragging(false);
          if (Math.abs(info.offset.x) > 100) {
            if (info.offset.x > 0) {
              handlePrev();
            } else {
              handleNext();
            }
          }
        }}
        style={{ width: `${totalSlides * 100}%` }}
      >
        {members.map((member, index) => (
          <div
            key={`${carouselId}-${index}`}
            className="px-2 md:px-4"
            style={{ width: `${100 / (itemsPerView * totalSlides)}%` }}
          >
            <TeamMemberCard member={member} index={index} />
          </div>
        ))}
      </motion.div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 z-10 shadow-lg"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 z-10 shadow-lg"
        onClick={handleNext}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={`dot-${index}`}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-red-500 w-6" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-80 rounded-lg overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 20,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"
        style={{ transform: "translateZ(0)" }}
      />
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
        style={{ transform: "translateZ(-10px)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-extrabold text-white mb-1">
            {member.name}
          </h3>
          <div className="flex items-center">
            <div className="h-1 w-6 bg-red-500 mr-2"></div>
            <p className="text-sm text-red-300 font-bold">{member.position}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
