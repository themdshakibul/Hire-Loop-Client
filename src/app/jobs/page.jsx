import JobListingContainer from "@/Components/Apps/Jobs/JobListingContainer";
import { getJobs } from "@/lib/api/jobs";

export default async function Page({ searchParams }) {
  // Fetched server-side on the initial request

  const filter = await searchParams;

  const filterObj = {
    ...filter,
    isRemote: filter.isRemote === "true" ? true : false,
  };

  const querySearch = new URLSearchParams(filterObj);
  const queryString = querySearch.toString();

  console.log("Search filer", filter, queryString);

  const jobs = await getJobs(queryString);

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="container mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">
          Discover your next engineering challenge.
        </p>
      </div>

      {/* Pass data to the Client Wrapper to handle filtering interactivity */}
      <JobListingContainer filter={filterObj} jobs={jobs || []} />
    </div>
  );
}
