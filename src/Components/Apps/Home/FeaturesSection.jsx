"use client";

import {
  Bookmark,
  ChartLineArrowUp,
  Display,
  Magnifier,
  ShieldCheck,
} from "@gravity-ui/icons";
import React from "react";
import { GiTopHat } from "react-icons/gi";
import { HiCursorArrowRays } from "react-icons/hi2";
import { TbBrandUpwork } from "react-icons/tb";

const FeaturesSection = () => {
  // Features Data Array
  const featuresData = [
    {
      id: 1,
      icon: <Magnifier className="w-5 h-5 text-[#D4A5FF]" />,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
    },
    {
      id: 2,
      icon: <ChartLineArrowUp className="w-5 h-5 text-[#D4A5FF]" />,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
    },
    {
      id: 3,
      icon: <GiTopHat className="w-5 h-5 text-[#D4A5FF]" />,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
    },
    {
      id: 4,
      icon: <Bookmark className="w-5 h-5 text-[#D4A5FF]" />,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
    },
    {
      id: 5,
      icon: <HiCursorArrowRays className="w-5 h-5 text-[#D4A5FF]" />,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
    },
    {
      id: 6,
      icon: <Display className="w-5 h-5 text-[#D4A5FF]" />,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
    },
    {
      id: 7,
      icon: <ShieldCheck className="w-5 h-5 text-[#D4A5FF]" />,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
    },
    {
      id: 8,
      icon: <TbBrandUpwork className="w-5 h-5 text-[#D4A5FF]" />,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-white py-24 select-none">
      <div className="container mx-auto px-2">
        {/* Top Mini Badge & Heading */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-none transform rotate-45 inline-block"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              FEATURES JOB
            </span>
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-none transform rotate-45 inline-block"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight max-w-2xl leading-tight">
            Everything you need <br /> to succeed
          </h2>
        </div>

        {/* Features Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 container mx-auto px-2">
          {featuresData.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4 group">
              {/* Dark Styled Icon Wrapper */}
              <div className="shrink-0 w-14 h-14 bg-[#121212] border border-neutral-800/60 rounded-xl flex items-center justify-center shadow-inner transition-all duration-300 group-hover:border-neutral-700/80 group-hover:bg-[#161616]">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col pt-1">
                <h3 className="text-base font-medium text-neutral-100 tracking-wide transition-colors duration-200 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-1.5 leading-relaxed font-light tracking-wide max-w-52.5">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
