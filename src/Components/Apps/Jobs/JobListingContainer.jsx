"use client";

import React, { useState } from "react";
import JobsFilters from "./JobsFilters";
import JobCard from "./JobCard";

export default function JobListingContainer({ initialJobs }) {
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);

  const handleFilterChange = ({ search, category, jobType, workMode }) => {
    let updatedJobs = [...initialJobs];

    // 1. Text Search Filter (Title or Company)
    if (search) {
      const query = search.toLowerCase();
      updatedJobs = updatedJobs.filter(
        (job) =>
          job.jobTitle?.toLowerCase().includes(query) ||
          job.companyName?.toLowerCase().includes(query),
      );
    }

    // 2. Category Filter
    if (category) {
      updatedJobs = updatedJobs.filter((job) => job.jobCategory === category);
    }

    // 3. Job Type Filter
    if (jobType) {
      updatedJobs = updatedJobs.filter((job) => job.jobType === jobType);
    }

    // 4. Work Mode Filter (Maps true/false from your schema's isRemote)
    if (workMode) {
      const targetRemoteStatus = workMode === "remote";
      updatedJobs = updatedJobs.filter(
        (job) => job.isRemote === targetRemoteStatus,
      );
    }

    setFilteredJobs(updatedJobs);
  };

  return (
    <div className="space-y-10">
      {/* Filter inputs panel */}
      <JobsFilters onFilterChange={handleFilterChange} />

      {/* Grid displaying the client-filtered results */}
      {filteredJobs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {filteredJobs.map((job) => (
            <JobCard key={job._id?.$oid || job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
          No positions match your selected criteria.
        </div>
      )}
    </div>
  );
}
