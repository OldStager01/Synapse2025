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
import Loader from "@/components/Loader";

export default function LandingContent() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true); // Set loading immediately
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <>
      {loading && <Loader />} {/* Show Preloader while transitioning */}
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
          <Gallery id="gallery" />
          <TeamMarquee id="team" />
          <FAQ id="faq" />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
