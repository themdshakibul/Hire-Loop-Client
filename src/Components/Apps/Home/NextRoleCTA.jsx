import React from "react";

export default function NextRoleCTA() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans relative overflow-hidden px-6 py-20">
      {/* Background Grid with Blue Glow - Bottom to Top Animation */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat pointer-events-none z-0 opacity-80 animate-bg-move"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-t from-transparent via-blue-600/10 to-transparent z-0" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square bg-blue-600/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          maskImage:
            "linear-gradient(to top, transparent 0%, white 15%, white 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, white 15%, white 75%, transparent 100%)",
        }}
      />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center z-10 relative">
        <h2 className="text-5xl sm:text-6xl md:text-[68px] font-medium tracking-tighter leading-[1.1] mb-6">
          Your next role is <br />
          already looking for you
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-md mb-10">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-4 rounded-2xl transition-all duration-200 active:scale-95 text-sm tracking-wide shadow-xl shadow-white/20">
            Create a free account
          </button>

          <button className="bg-white/10 hover:bg-white/20 border border-white/20 font-medium px-8 py-4 rounded-2xl transition-all duration-200 active:scale-95 text-sm tracking-wide backdrop-blur-md">
            View pricing
          </button>
        </div>
      </div>
    </div>
  );
}
