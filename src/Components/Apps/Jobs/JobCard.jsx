"use client";

import React from "react";
import { Card, Button, Avatar } from "@heroui/react";
import { MapPin, Briefcase, ArrowRight, CircleDollar } from "@gravity-ui/icons";

export default function JobCard({ job }) {
  // Graceful degradation handling if data hasn't loaded yet
  if (!job) return null;

  // Destructure all the required data from the prop
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

  // Format currency display nicely (e.g., USD -> $, EUR -> €)
  const currencySymbol = currency === "USD" ? "$" : currency;

  // Format numbers to include commas (e.g., 130000 -> 130,000)
  const formatSalary = (val) => Number(val).toLocaleString();

  return (
    <Card className="w-full max-w-100 p-6 bg-[#121212] text-[#ededed] border border-neutral-800 rounded-3xl shadow-xl">
      {/* Header Section: Logo, Title, and Description */}
      <Card.Header className="flex flex-col items-start gap-4 p-0">
        <div className="flex items-center gap-3">
          {companyLogo && (
            <Avatar
              src={companyLogo}
              alt={companyName}
              className="w-10 h-10 bg-white p-1 rounded-xl"
              radius="md"
            />
          )}
          <span className="text-sm font-medium text-neutral-400">
            {companyName}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Card.Title className="text-2xl font-semibold tracking-tight text-white">
            {jobTitle}
          </Card.Title>
          <Card.Description className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
            {responsibilities}
          </Card.Description>
        </div>
      </Card.Header>

      {/* Content Section: Dynamic Badges/Tags matching the image design */}
      <Card.Content className="flex flex-wrap gap-2 mt-6 p-0">
        {/* Location Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300">
          <MapPin className="text-purple-400 w-3.5 h-3.5" />
          <span>{isRemote ? "Remote" : "Hybrid"}</span>
        </div>

        {/* Job Type Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300 capitalize">
          <Briefcase className="text-purple-400 w-3.5 h-3.5" />
          <span>{jobType}</span>
        </div>

        {/* Salary Range Badge */}
        {minSalary && maxSalary && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300">
            <CircleDollar className="text-purple-400 w-3.5 h-3.5" />
            <span>
              {currencySymbol}
              {formatSalary(minSalary)}–{currencySymbol}
              {formatSalary(maxSalary)}/year
            </span>
          </div>
        )}
      </Card.Content>

      {/* Footer Section: Link to Apply */}
      <Card.Footer className="flex justify-between items-center mt-8 p-0">
        <Button
          variant="light"
          className="text-white hover:text-purple-400 font-medium text-sm gap-2 px-0 bg-transparent min-w-0 transition-colors duration-200"
          endContent={<ArrowRight className="w-4 h-4" />}
          onClick={() => window.open(`#/apply/${job.companyId}`, "_blank")}
        >
          Apply Now
        </Button>
      </Card.Footer>
    </Card>
  );
}
