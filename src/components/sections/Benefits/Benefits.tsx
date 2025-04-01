"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { Shield, Award, Globe, Users, Medal } from "lucide-react";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const benefits = document.querySelectorAll(".benefit-card");
    benefits.forEach((benefit) => {
      observer.observe(benefit);
    });

    return () => {
      benefits.forEach((benefit) => {
        observer.unobserve(benefit);
      });
    };
  }, []);

  const benefits = [
    {
      id: 1,
      title: "INFINITY CERTIFICATION",
      description:
        "Like wielding an Infinity Stone, earn a prestigious certificate to power up your portfolio.",
      icon: <Award className="h-10 w-10 text-amber-500" />,
      color: "amber",
    },
    {
      id: 2,
      title: "HEROIC EXPERIENCE",
      description:
        "Step into the battlefield of knowledge and gain real-world skills.",
      icon: <Shield className="h-10 w-10 text-red-500" />,
      color: "red",
    },
    {
      id: 3,
      title: "MULTIVERSE EXPOSURE",
      description:
        "Make your mark across universes (or industries!) with top-tier visibility.",
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      color: "blue",
    },
    {
      id: 4,
      title: "POWERFUL NETWORKING",
      description:
        "Build your own superhero squad with experts and fellow participants.",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      color: "purple",
    },
    {
      id: 5,
      title: "ULTIMATE RECOGNITION",
      description:
        "Become a legend with exclusive prizes and awards worthy of an Avenger.",
      icon: <Medal className="h-10 w-10 text-amber-500" />,
      color: "amber",
    },
  ];

  return (
    <section
      className="relative w-full py-16 overflow-hidden text-white mt-20"
      ref={benefitsRef}
    >
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,')]"></div>
      {/* Decorative elements
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div> */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 uppercase relative inline-block">
            <span className="relative z-10">Superhero Benefits</span>
            <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 opacity-70 blur-sm"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Heroes in action, rewards in motion – unlock your SYNAPSE 2K25
            perks!
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <BenefitCard
                benefit={benefit}
                className="flex flex-col h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
