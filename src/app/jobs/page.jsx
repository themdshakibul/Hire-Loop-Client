import JobListingContainer from "@/Components/Apps/Jobs/JobListingContainer";
import { getJobs } from "@/lib/api/jobs";

export default async function JobsPage() {
  // Fetch all jobs once on the server side
  const jobs = await getJobs();

  return (
    <div className="bg-black text-white p-6 md:p-12 min-h-screen">
      <div className="container px-2 mx-auto">
        <div className="pb-10 space-y-2">
          <h2 className="text-4xl font-semibold">Open Positions</h2>
          <p className="font-semibold text-zinc-400">
            Discover your next engineering challenge.
          </p>
        </div>

        {/* Pass the server data down to the client wrapper */}
        <JobListingContainer initialJobs={jobs || []} />
      </div>
    </div>
  );
}
