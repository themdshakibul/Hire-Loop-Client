"use client";

import React, { useState, useMemo, useEffect } from "react";
import JobFilters from "./JobsFilters";
import JobCard from "./JobCard";
import { useRouter } from "next/navigation";
import { Pagination } from "@heroui/react";

export default function JobListingContainer({ filter, jobs }) {
  const [searchQuery, setSearchQuery] = useState(filter.search);
  const [selectedType, setSelectedType] = useState(filter.filter || "all");
  const [selectedCategory, setSelectedCategory] = useState(
    filter.jobCategory || "all",
  );
  const [isRemoteOnly, setIsRemoteOnly] = useState(filter.isRemote || false);

  const router = useRouter();

  const totalItems = total;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);  

  useEffect(() => {
    const sp = new URLSearchParams();

    if (searchQuery) {
      sp.set("search", searchQuery);
    }

    if (selectedType !== "all") {
      sp.set("jobType", selectedType);
    }

    if (selectedCategory !== "all") {
      sp.set("jobCategory", selectedCategory);
    }

    if (isRemoteOnly) {
      sp.set("isRemote", true);
    }

    const path = `?${sp.toString()}`;
    router.push(path);
  }, [searchQuery, selectedType, router, selectedCategory, isRemoteOnly]);

  return (
    <>
      <JobFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isRemoteOnly={isRemoteOnly}
        setIsRemoteOnly={setIsRemoteOnly}
      />

      <div className="container mx-auto mb-6 text-sm text-zinc-500">
        Showing {jobs.length} position{jobs.length !== 1 && "s"}
      </div>

      {jobs.length > 0 ? (
        <>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {jobs.map((jobItem) => (
              <JobCard key={jobItem._id?.$oid || jobItem._id} job={jobItem} />
            ))}
          </div>
          <Pagination className="w-full">
            <Pagination.Summary>
              Showing {startItem}-{endItem} of {totalItems} results
            </Pagination.Summary>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={page === 1}
                  onPress={() => setPage((p) => p - 1)}
                >
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>
              {getPageNumbers().map((p, i) =>
                p === "ellipsis" ? (
                  <Pagination.Item key={`ellipsis-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={p}>
                    <Pagination.Link
                      isActive={p === page}
                      onPress={() => setPage(p)}
                    >
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                ),
              )}
              <Pagination.Item>
                <Pagination.Next
                  isDisabled={page === totalPages}
                  onPress={() => setPage((p) => p + 1)}
                >
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </>
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-[32px] max-w-7xl mx-auto">
          <p className="text-zinc-500 text-lg">
            No positions match your search criteria.
          </p>
        </div>
      )}
    </>
  );
}
