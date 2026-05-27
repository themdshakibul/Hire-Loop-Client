"use client";

import React, { useState } from "react";
import { ChartLine, CrownDiamond, Plus } from "@gravity-ui/icons";
import { BiBoltCircle } from "react-icons/bi";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      price: "0",
      icon: <CrownDiamond className="text-pink-500 w-4 h-4" />,
      subtext: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      buttonText: "Choose This Plan",
      isPopular: false,
    },
    {
      name: "Growth",
      price: billingCycle === "monthly" ? "17" : "12",
      icon: <ChartLine className="text-purple-500 w-4 h-4" />,
      subtext: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      buttonText: "Choose This Plan",
      isPopular: true,
    },
    {
      name: "Premium",
      price: billingCycle === "monthly" ? "99" : "74",
      icon: <BiBoltCircle className="text-fuchsia-500 w-4 h-4" />,
      subtext: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      buttonText: "Choose This Plan",
      isPopular: false,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center font-sans px-6 py-20 relative overflow-hidden selection:bg-blue-600/30">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center z-10 mb-12">
        {/* Small Tag */}
        <div className="inline-flex items-center gap-1.5 mb-4">
          <span className="w-1 h-1 bg-blue-500 rotate-45 inline-block"></span>
          <span className="text-[10px] tracking-[0.2em] font-semibold text-gray-500 uppercase">
            Pricing
          </span>
          <span className="w-1 h-1 bg-blue-500 rotate-45 inline-block"></span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal tracking-tight text-white leading-tight max-w-xl mx-auto">
          Pay for the leverage, <br />
          <span className="text-gray-400">not the listings</span>
        </h2>
      </div>

      {/* ─── TOGGLE SWITCH (Monthly / Yearly) ─── */}
      <div className="z-10 mb-14 bg-[#121115] border border-white/5 rounded-full p-1 flex items-center gap-1 shadow-inner relative">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
            billingCycle === "monthly"
              ? "bg-white text-black shadow-md"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`px-5 py-1.5 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
            billingCycle === "yearly"
              ? "bg-white text-black shadow-md"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <span>Yearly</span>
          <span className="bg-[#ff00a0]/20 text-[#ff3bb4] text-[9px] px-1.5 py-0.5 rounded-full font-semibold">
            25%
          </span>
        </button>
      </div>

      {/* ─── PRICING CARDS GRID ─── */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#0c0b0e]/60 border border-white/5 rounded-[24px] p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative group hover:border-white/10 transition-all duration-300"
          >
            <div>
              {/* Header: Icon, Name & Price */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl">
                  {plan.icon}
                  <span className="text-sm font-medium text-gray-200">
                    {plan.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-medium tracking-tight text-white">
                    ${plan.price}
                  </span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">
                    /month
                  </span>
                </div>
              </div>

              {/* Subtext */}
              <p className="text-xs font-medium text-gray-400 mb-5">
                {plan.subtext}
              </p>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-gray-400"
                  >
                    <span className="p-0.5 bg-white/5 border border-white/5 rounded-md text-gray-500 shrink-0 mt-0.5 flex items-center justify-center">
                      <Plus size={10} />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <button
              className={`w-full py-3 px-4 rounded-xl text-xs font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 ${
                plan.isPopular
                  ? "bg-white text-black hover:bg-gray-100 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                  : "bg-[#201f24] text-gray-300 hover:bg-[#2a292f] border border-white/5"
              }`}
            >
              <span>{plan.buttonText}</span>
              <svg
                className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
