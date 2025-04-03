"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import InfinityStone from "@/components/ui/infinity-stone";
import { CalendarIcon } from "lucide-react";
import MarvelButton from "./marvel-button";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  stoneColor?: string;
  registerUrl?: string;
}

export default function EventCard({
  title = "Marvel Universe Event",
  date = "May 4, 2025",
  description = "Join us for an epic gathering of heroes and villains from across the multiverse.",
  imageUrl = "/placeholder.svg?height=300&width=500",
  stoneColor = "#f5d76e", // Default to yellow/gold (Reality Stone)
  registerUrl = "#",
}: EventCardProps) {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Card Container */}
      <div className="relative pt-6">
        {/* Infinity Stone at the top center */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <InfinityStone color={stoneColor} size={48} />
        </div>

        {/* Metallic Golden Frame */}
        <div
          className="relative rounded-xl overflow-hidden shadow-lg"
          style={{
            boxShadow: `
              0 0 0 6px #d4af37,
              0 0 0 8px #aa8c2c,
              0 5px 15px rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          {/* Shimmer Effect Overlay */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Card Content */}
          <div className="bg-gray-900 overflow-hidden">
            {/* Top Half - Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] z-10" />
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Half - Content */}
            <div className="relative p-6 bg-gray-900">
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-300 mb-2">
                  {title}
                </h3>

                <div className="flex items-center justify-center text-amber-100/80 mb-4">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-5">{description}</p>

                {/* Register Button */}
                <Link href={registerUrl} target="_blank">
                  <MarvelButton>Register</MarvelButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
