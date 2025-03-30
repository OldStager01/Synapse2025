"use client";
import ParticleBackground from "@/components/ParticleBackground";
import Benefits from "@/components/sections/Benefits/Benefits";
import Events from "@/components/sections/Events/Events";
import FAQ from "@/components/sections/FAQ/FAQ";
import Gallery from "@/components/sections/Gallery/gallery";
import MarvelCarousel from "@/components/sections/Gallery/marvel-carousel";
import Hero from "@/components/sections/Hero/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useTheme } from "@/lib/theme";
// Import framer-motion
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function LandingContent() {
  const { theme } = useTheme();

  useEffect(() => {
    // Ensure user starts at top of page on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen flex flex-col overflow-x-hidden"
      >
        {/* Particle Background */}
        <ParticleBackground />
        {/* <Header /> */}
        <Hero id="home" />
        <Events id="events" />
        <Benefits />
        <MarvelCarousel />
        <FAQ id="faq" />
      </motion.div>
    </AnimatePresence>
  );
}
