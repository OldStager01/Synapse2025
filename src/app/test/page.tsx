"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import InfinityStone from "@/components/ui/infinity-stone";
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
    <div className="">
      <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        style={{ transition: "all 0.3s ease" }}
      >
        {/* Card Container with Golden Frame */}
        <div className="relative pt-6">
          {/* Infinity Stone at top center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <InfinityStone color={stoneColor} size={48} />
          </div>

          {/* Metallic Golden Frame */}
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              boxShadow: `
              0 0 0 6px #d4af37,
              0 0 0 8px #aa8c2c,
              0 5px 15px rgba(0, 0, 0, 0.5)
            `,
            }}
          >
            {/* Shimmer effect overlay */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "200% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Card Content */}
            <div className="bg-gray-900 overflow-hidden">
              {/* Top Half - Image */}
              <div className="relative">
                <div className="relative h-52 w-full overflow-hidden">
                  <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] z-10" />
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Half - Content */}
              <div
                className="relative p-6 bg-gray-900"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23333' fillOpacity='0.4' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-amber-300 mb-2">
                    {title}
                  </h3>

                  <div className="flex items-center justify-center text-amber-100/80 mb-4">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{date}</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-5">{description}</p>

                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-md font-medium text-sm"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(245, 215, 110, 0.5)",
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
    </div>
  );
}
