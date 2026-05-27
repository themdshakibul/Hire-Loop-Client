"use client";

import { Briefcase, Persons, Star } from "@gravity-ui/icons";
import React from "react";
import { DiGoogleAnalytics } from "react-icons/di";
import { motion } from "motion/react";

const StartsSections = () => {
  const statsData = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <DiGoogleAnalytics className="w-6 h-6" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Persons className="w-6 h-6" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="w-6 h-6" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative bg-[#030303] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-162.5 flex flex-col justify-end items-center select-none">
      {/* 1. Globe Background Image Layer */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: "url('/images/globe.png')",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 85%)",
        }}
      />

      {/* 2. Blue Atmospheric Glow (গ্লো ইফেক্ট) */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-137.5 h-70 bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />

      {/* 3. Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center">
        {/* Title / Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-300 leading-snug tracking-tight">
            Assisting over{" "}
            <span className="font-semibold text-white">15,000 job seekers</span>{" "}
            <br className="hidden sm:inline" />
            find their dream positions.
          </h2>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-neutral-400 mt-4"
          >
            Remot Jobs
          </motion.p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full px-2">
          {statsData.map((card) => (
            <div
              key={card.id}
              className="bg-[#0A0A0A]/70 border border-neutral-800/50 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-47.5 w-full transition-all duration-300 hover:border-neutral-700/80 hover:bg-[#0F0F0F]/80 group"
            >
              {/* Icon */}
              <div className="text-neutral-400 group-hover:text-white transition-colors duration-300 w-fit">
                {card.icon}
              </div>

              {/* Card Content */}
              <div className="mt-8">
                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  {card.value}
                </h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 text-xs md:text-sm mt-2 font-medium tracking-wide transition-colors duration-300">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartsSections;
