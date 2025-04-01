"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import InfinityStone from "./infinity-stone";
import { CalendarIcon } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  stoneColor?: string;
}

export default function EventCard({
  title = "Marvel Universe Event",
  date = "May 4, 2025",
  description = "Join us for an epic gathering of heroes and villains from across the multiverse.",
  imageUrl = "/placeholder.svg?height=300&width=500",
  stoneColor = "#f5d76e", // Default to yellow/gold (Reality Stone)
}: EventCardProps) {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative pt-8">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <InfinityStone color={stoneColor} />
        </div>

        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            boxShadow: `
              0 0 0 8px #000,
              0 0 0 9px #333,
              0 0 0 10px #000,
              0 0 0 12px #d4af37,
              0 5px 20px rgba(0, 0, 0, 0.7)
            `,
            background: `
              linear-gradient(135deg, #e6c566, #c5a54b, #a08a3c, #7a6a2c, #a08a3c)
            `,
            padding: "8px",
          }}
        >
          <div className="bg-gray-900 rounded-lg overflow-hidden relative">
            <div className="relative h-52 w-full overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] z-10" />
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900 to-black">
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-400 mb-2">
                  {title}
                </h3>
                <div className="flex items-center justify-center text-amber-100/80 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{date}</span>
                </div>
                <p className="text-gray-300 text-sm mb-5">{description}</p>
                <motion.button
                  className="px-6 py-2 text-white rounded-md font-medium text-sm"
                  style={{
                    background: `linear-gradient(135deg, #ff3131, #e62429, #a3141d)`,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255, 49, 49, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
