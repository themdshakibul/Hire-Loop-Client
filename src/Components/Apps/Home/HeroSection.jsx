import React from "react";
import { Briefcase, Layers, Person, Star } from "@gravity-ui/icons";
import StatsCard from "./StatsCard";

export default function HeroSection() {
  const tags = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <div className="w-full min-h-screen bg-[#070709] text-white flex flex-col justify-between font-sans relative overflow-hidden selection:bg-blue-600/30">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat pointer-events-none opacity-90 z-0"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-white/2 to-transparent blur-3xl pointer-events-none z-0" />

      {/* ─── BOTTOM GLOW LIGHTING ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-96 bg-blue-600/20 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ─── MAIN HERO CONTENT (ওপরের অংশে সুন্দরভাবে এলাইন করা) ─── */}
      <main className="w-full max-w-4xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center z-10 relative">
        {/* Top Badge */}
        <div className="mb-8 relative w-full flex justify-center items-center">
          <div className="absolute left-1/3 right-1/3 h-px bg-linear-to-r from-transparent via-gray-800/40 to-transparent -z-10" />

          <div className="inline-flex items-center gap-2 bg-[#141318]/90 border border-white/6 rounded-full px-4 py-1.5 text-[11px] shadow-2xl backdrop-blur-md">
            <span className="text-sm">💼</span>
            <span className="text-white font-medium">50,000+</span>
            <span className="text-gray-500 tracking-wider font-medium ml-1">
              NEW JOBS THIS MONTH
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-normal tracking-tight mb-6 text-white leading-tight">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-xs sm:text-sm max-w-xl mb-10 leading-relaxed opacity-80 font-normal">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl bg-[#09080b]/90 border border-white/5 rounded-full p-2 flex items-center shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          {/* Job Title */}
          <div className="flex-1 flex items-center gap-3 pl-4 border-r border-white/5">
            <svg
              className="w-4 h-4 text-gray-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-xs text-gray-300 placeholder-gray-600 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div className="flex-1 flex items-center gap-3 pl-3">
            <svg
              className="w-4 h-4 text-gray-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-xs text-gray-300 placeholder-gray-600 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="bg-[#3841ff] hover:bg-[#2f37dd] active:scale-95 transition-all p-2.5 rounded-full text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(56,65,255,0.3)] cursor-pointer mx-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Trending Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-[11px]">
          <span className="text-gray-500 mr-1">Trending Position:</span>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-[#121115]/90 hover:bg-[#1a191f] border border-white/5 rounded-full px-3 py-1.5 transition-all text-gray-400 cursor-pointer shadow-sm backdrop-blur-xs"
            >
              {tag}
            </button>
          ))}
        </div>
      </main>

      {/* ─── BOTTOM STATS CONTENT (গ্লোব ও লাইটিং ইফেক্টের ঠিক ওপরে ভাসবে) ─── */}
      <div className="w-full pb-14 z-10 flex flex-col items-center mt-auto">
        {/* Earth Text */}
        <div className="text-center mb-10 px-6">
          <h2 className="text-lg sm:text-xl md:text-[24px] font-normal tracking-tight text-gray-300 leading-snug">
            Assisting over{" "}
            <span className="text-white font-medium">15,000 job seekers</span>{" "}
            find their dream positions.
          </h2>
        </div>

        {/* STATS CARDS GRID */}
        <div className="w-full container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            icon={<Briefcase size={16} />}
            value="50K"
            label="Active Jobs"
          />
          <StatsCard
            icon={<Layers size={16} />}
            value="12K"
            label="Companies"
          />
          <StatsCard
            icon={<Person size={16} />}
            value="2M"
            label="Job Seekers"
          />
          <StatsCard
            icon={<Star size={16} />}
            value="97%"
            label="Satisfaction Rate"
          />
        </div>
      </div>
    </div>
  );
}
