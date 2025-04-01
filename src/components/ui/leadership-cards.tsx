"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadershipCards() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      <LeaderCard
        name="Nick Fury"
        position="President"
        image="/placeholder.svg?height=500&width=400"
        index={0}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <LeaderCard
        name="Maria Hill"
        position="Vice President"
        image="/placeholder.svg?height=500&width=400"
        index={1}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
    </div>
  );
}

interface LeaderCardProps {
  name: string;
  position: string;
  image: string;
  index: number;
  isHovered: number | null;
  setIsHovered: (index: number | null) => void;
}

function LeaderCard({
  name,
  position,
  image,
  index,
  isHovered,
  setIsHovered,
}: LeaderCardProps) {
  return (
    <motion.div
      className="relative w-full max-w-xs h-[450px] rounded-lg overflow-hidden shadow-xl"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
      onHoverStart={() => setIsHovered(index)}
      onHoverEnd={() => setIsHovered(null)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"
        style={{
          transform: "translateZ(0)",
        }}
      />
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        animate={{
          scale: isHovered === index ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
        style={{
          transform: "translateZ(-10px)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-extrabold text-white mb-1 font-marvel">
            {name}
          </h3>
          <div className="flex items-center">
            <div className="h-1 w-10 bg-red-500 mr-3"></div>
            <p className="text-lg text-red-400 font-bold">{position}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
