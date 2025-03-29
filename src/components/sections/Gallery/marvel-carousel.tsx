"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample event data - replace with your actual data
const events = [
  {
    id: 1,
    title: "Avengers: Endgame Premiere",
    image: undefined,
    date: "April 2019",
  },
  {
    id: 2,
    title: "Black Widow Launch Event",
    image: undefined,
    date: "July 2021",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home Panel",
    image: undefined,
    date: "December 2021",
  },
  {
    id: 4,
    title: "Thor: Love and Thunder Showcase",
    image: undefined,
    date: "July 2022",
  },
  {
    id: 5,
    title: "Doctor Strange: Multiverse of Madness",
    image: undefined,
    date: "May 2022",
  },
];

export default function MarvelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(events.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleDragEnd = (_: any, info: any) => {
    setDragging(false);
    const threshold = 100;

    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -threshold && currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black py-12 px-4 overflow-hidden">
      <div className="relative w-full max-w-5xl">
        {/* Marvel-themed header */}
        <div className="text-center mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 uppercase relative inline-block">
              <span className="relative z-10 text-yellow-400">EVENTS</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 opacity-70 blur-sm"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join our event and unlock powers that will transform your college
              experience and future career!
            </p>
          </div>
        </div>

        {/* Carousel container with Marvel-themed border */}
        <div
          ref={containerRef}
          className="relative h-[500px] w-full overflow-hidden rounded-lg"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23771818' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
            boxShadow:
              "0 0 20px rgba(220, 38, 38, 0.6), inset 0 0 10px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Metallic corner accents */}
          <div
            className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-gray-300 opacity-70"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          ></div>
          <div
            className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-gray-300 opacity-70"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-gray-300 opacity-70"
            style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-gray-300 opacity-70"
            style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
          ></div>

          {/* Carousel content */}
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            onDragStart={() => setDragging(true)}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 flex items-center justify-center"
          >
            <AnimatePresence initial={false}>
              {events.map((event, index) => {
                // Calculate position relative to current index
                const position = index - currentIndex;

                return (
                  <motion.div
                    key={event.id}
                    className="absolute flex flex-col items-center justify-center"
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                      rotateY: position < 0 ? 45 : position > 0 ? -45 : 0,
                      x: position * 300,
                    }}
                    animate={{
                      scale: position === 0 ? 1 : 0.8,
                      opacity: Math.abs(position) <= 1 ? 1 : 0.3,
                      rotateY: position < 0 ? 45 : position > 0 ? -45 : 0,
                      x: position * 300,
                      zIndex: events.length - Math.abs(position),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: 1000,
                    }}
                  >
                    {/* Card with Marvel styling */}
                    <div
                      className={`relative w-[280px] h-[400px] rounded-lg overflow-hidden
                        ${
                          position === 0
                            ? "ring-4 ring-red-500 shadow-[0_0_20px_rgba(220,38,38,0.7)]"
                            : "shadow-lg"
                        }
                      `}
                      style={{
                        transformStyle: "preserve-3d",
                        transform: `${
                          position === 0 ? "translateZ(50px)" : "translateZ(0)"
                        }`,
                        transition: "transform 0.5s ease",
                      }}
                    >
                      {/* Image */}
                      <div className="w-full h-full relative">
                        <img
                          src={
                            event.image ||
                            "https://media.istockphoto.com/id/1463404970/photo/high-school-students-e-learning-over-computers-in-the-classroom.jpg?s=612x612&w=0&k=20&c=UULwYdTItF65RcKzKgP6xQL-5-pxs2JXXjCdw_fJFqk="
                          }
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-xl font-bold mb-1">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-300">{event.date}</p>
                        </div>

                        {/* Marvel corner badge */}
                        <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-xs font-bold transform -skew-x-12">
                          {"Synapse"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-red-600 w-6"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
