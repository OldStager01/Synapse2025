"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";
import ParticleBackground from "@/components/ParticleBackground";
import Benefits from "@/components/sections/Benefits/Benefits";
import Events from "@/components/sections/Events/Events";
import FAQ from "@/components/sections/FAQ/FAQ";
import Footer from "@/components/sections/Footer/page";
import Gallery from "@/components/sections/Gallery/Gallery";
import Header from "@/components/sections/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import TeamMarquee from "@/components/sections/Team/TeamMarquee";
import Preloader from "@/components/Preloader/Preloader"; // Import your Preloader component

export default function LandingContent() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure user starts at top of page on load
    window.scrollTo(0, 0);

    // Show preloader while theme transitions
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // Match transition duration
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <>
      {loading && <Preloader onComplete={() => {}} />}{" "}
      {/* Show Preloader while transitioning */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen flex flex-col overflow-x-hidden"
          onAnimationComplete={() => setLoading(false)} // Hide Preloader
        >
          <Header />
          <ParticleBackground />
          <Hero id="home" />
          <Events id="events" />
          <Benefits id="benefits" />
          <TeamMarquee id="team" />
          <FAQ id="faq" />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
