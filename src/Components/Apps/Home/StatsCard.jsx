import React from "react";

export default function StatsCard({ icon, value, label }) {
  return (
    <div className="bg-[#0c0b0e]/90 border border-white/4 rounded-2xl p-6 flex flex-col justify-between items-start min-h-42.5 shadow-[0_20px_45px_rgba(0,0,0,0.75)] backdrop-blur-md w-full">
      <div className="text-gray-400 opacity-80">{icon}</div>

      <div className="flex flex-col gap-1.5 mt-auto">
        <div className="text-3xl sm:text-[34px] font-normal tracking-tight text-white leading-none">
          {value}
        </div>
        <div className="text-xs text-gray-500 font-normal tracking-wide opacity-90">
          {label}
        </div>
      </div>
    </div>
  );
}
