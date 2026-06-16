// "use client";

// import React from "react";
// import { Card, Button } from "@heroui/react";
// import { MapPin, Briefcase, ArrowRight, CircleDollar } from "@gravity-ui/icons";

// export default function JobCard({ job }) {
//   // Graceful degradation handling if data hasn't loaded yet
//   if (!job) return null;

//   // Destructure all the required data from the prop
//   const {
//     jobTitle,
//     jobType,
//     minSalary,
//     maxSalary,
//     currency,
//     isRemote,
//     companyName,
//     companyLogo,
//     responsibilities,
//   } = job;

//   // Format currency display nicely (e.g., USD -> $, EUR -> €)
//   const currencySymbol = currency === "USD" ? "$" : currency;

//   // Format numbers to include commas (e.g., 130000 -> 130,000)
//   const formatSalary = (val) => Number(val).toLocaleString();

//   return (
//     <Card className="w-full p-6 bg-[#121212] text-[#ededed] border border-neutral-800 rounded-3xl shadow-xl overflow-visible">
//       {/* Header Section: Logo, Title, and Description */}
//       <Card.Header className="flex flex-col items-start gap-4 p-0 bg-transparent">
//         <div className="flex items-center gap-3">
//           {companyLogo ? (
//             <div className="w-10 h-10 bg-white flex items-center justify-center rounded-xl p-1 shrink-0 shadow-sm">
//               <img
//                 src={companyLogo}
//                 alt={companyName}
//                 className="w-full h-full object-contain rounded-lg"
//                 onError={(e) => {
//                   // ইমেজ লোড ফেল করলে অল্টারনেটিভ হিসেবে ভাঙা ইমেজের বদলে একটা মিনিমাল প্লেসহোল্ডার দেখাবে
//                   e.target.style.display = "none";
//                 }}
//               />
//             </div>
//           ) : null}
//           <span className="text-sm font-medium text-neutral-400">
//             {companyName}
//           </span>
//         </div>

//         <div className="flex flex-col gap-2 w-full">
//           <Card.Title className="text-2xl font-semibold tracking-tight text-white m-0">
//             {jobTitle}
//           </Card.Title>
//           <Card.Description className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
//             {responsibilities}
//           </Card.Description>
//         </div>
//       </Card.Header>

//       {/* Content Section: Dynamic Badges/Tags matching the image design */}
//       <Card.Content className="flex flex-wrap gap-2 mt-6 p-0 bg-transparent">
//         {/* Location Badge */}
//         <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300">
//           <MapPin className="text-purple-400 w-3.5 h-3.5" />
//           <span>{isRemote ? "Remote" : "Hybrid"}</span>
//         </div>

//         {/* Job Type Badge */}
//         <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300 capitalize">
//           <Briefcase className="text-purple-400 w-3.5 h-3.5" />
//           <span>{jobType}</span>
//         </div>

//         {/* Salary Range Badge */}
//         {minSalary && maxSalary && (
//           <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300">
//             <CircleDollar className="text-purple-400 w-3.5 h-3.5" />
//             <span>
//               {currencySymbol}
//               {formatSalary(minSalary)}–{currencySymbol}
//               {formatSalary(maxSalary)}/year
//             </span>
//           </div>
//         )}
//       </Card.Content>

//       {/* Footer Section: Link to Apply */}
//       <Card.Footer className="flex justify-between items-center mt-8 p-0 bg-transparent">
//         <Button
//           variant="light"
//           className="text-white hover:text-purple-400 font-medium text-sm gap-2 px-0 bg-transparent min-w-0 transition-colors duration-200"
//           endContent={<ArrowRight className="w-4 h-4" />}
//           onClick={() => window.open(`#/apply/${job.companyId}`, "_blank")}
//         >
//           Apply Now
//         </Button>
//       </Card.Footer>
//     </Card>
//   );
// }

"use client";

import React from "react";
import { Card, Button } from "@heroui/react";
import { MapPin, Briefcase, ArrowRight, CircleDollar } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function JobCard({ job }) {
  if (!job) return null;

  const {
    jobTitle,
    jobType,
    minSalary,
    maxSalary,
    currency,
    isRemote,
    companyName,
    companyLogo,
    responsibilities,
  } = job;

  const currencySymbol = currency === "USD" ? "$" : currency;
  const formatSalary = (val) => Number(val).toLocaleString();

  return (
    <Card className="w-full p-6 bg-linear-to-b from-[#18181b] to-[#09090b] text-[#ededed] border border-neutral-800/80 rounded-[24px] shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-[0_12px_30px_-10px_rgba(168,85,247,0.15)] group overflow-visible">
      {/* Top Meta: Logo & Company Info */}
      <Card.Header className="flex flex-col items-start gap-4 p-0 bg-transparent">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {companyLogo ? (
              <div className="w-11 h-11 bg-white flex items-center justify-center rounded-2xl p-1.5 shrink-0 shadow-[0_4px_12px_rgba(255,255,255,0.08)]">
                <Image
                  width={300}
                  height={300}
                  src={companyLogo}
                  alt={companyName}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            ) : null}
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white tracking-wide">
                {companyName}
              </span>
              <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-medium">
                Verified Hiring
              </span>
            </div>
          </div>

          {/* Subtle Live Indicator */}
          <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-wider">
              Actively Recruiting
            </span>
          </div>
        </div>

        {/* Title & Short Details */}
        <div className="flex flex-col gap-2.5 w-full mt-2">
          <Card.Title className="text-xl font-bold tracking-tight text-neutral-100 group-hover:text-white transition-colors duration-200 m-0 leading-snug">
            {jobTitle}
          </Card.Title>
          <Card.Description className="text-[13px] text-neutral-400/90 leading-relaxed line-clamp-2 font-normal">
            {responsibilities}
          </Card.Description>
        </div>
      </Card.Header>

      {/* Badges Layout */}
      <Card.Content className="flex flex-wrap gap-2 mt-6 p-0 bg-transparent">
        {/* Location */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/60 rounded-xl text-xs font-medium text-neutral-300">
          <MapPin className="text-purple-400 w-3.5 h-3.5" />
          <span>{isRemote ? "Remote" : "Hybrid"}</span>
        </div>

        {/* Job Type */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/60 rounded-xl text-xs font-medium text-neutral-300 capitalize">
          <Briefcase className="text-purple-400 w-3.5 h-3.5" />
          <span>{jobType}</span>
        </div>

        {/* Salary */}
        {minSalary && maxSalary && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/60 rounded-xl text-xs font-medium text-neutral-300">
            <CircleDollar className="text-purple-400 w-3.5 h-3.5" />
            <span>
              {currencySymbol}
              {formatSalary(minSalary)} – {currencySymbol}
              {formatSalary(maxSalary)}
            </span>
          </div>
        )}
      </Card.Content>

      {/* Interactive Footer CTA */}
      <Card.Footer className="flex justify-between items-center mt-6 pt-4 border-t border-neutral-800/50 bg-transparent">
        <span className="text-[11px] text-neutral-500 font-medium">
          Posted 1 day ago
        </span>
        <Link
          href={`/jobs/${job._id}`}
          variant="light"
          className="text-neutral-200 group-hover:text-purple-400 font-semibold text-sm gap-2 px-0 bg-transparent min-w-0 transition-all duration-200"
          endContent={
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          }
        >
          Apply Now
        </Link>
      </Card.Footer>
    </Card>
  );
}
