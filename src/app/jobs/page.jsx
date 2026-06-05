import JobCard from "@/Components/Apps/Jobs/JobCard";
import { getJobs } from "@/lib/api/jobs";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="min-h-screen bg-black p-8 flex justify-center items-center">
      <JobCard job={jobs[1]} />
    </div>
  );
}
