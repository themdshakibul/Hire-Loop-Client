import { getJobsById } from "@/lib/api/jobs";
import { getUseerSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUseerSession();

  if (!user) {
    redirect(`/sigin?redirect=/jobs/${id}/apply`);
  }

  if (user.role !== "seeker") {
    return (
      <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
        <p className="text-zinc-400 text-lg ">
          Only job Seeker can apply for positeions. Plese sign in width a seeker
          accout to procedd.
        </p>
      </div>
    );
  }

  const job = await getJobsById(id);

  return (
    <div>
      <JobApply applicant={user} job={job} />
    </div>
  );
};

export default ApplyPage;
