import { getJobsById } from "@/lib/api/jobs";
import { getUseerSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";
import { getApplicationsByApplicant } from "@/lib/api/applications";
import Link from "next/link";

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

  const applications = await getApplicationsByApplicant(user?.id);
  const plan = {
    name: "Free",
    maxApplicationsPerMonth: 3,
  };

  const job = await getJobsById(id);

  return (
    <div>
      <h2>
        Your have applied so far: {applications.length} Out of{" "}
        {plan.maxApplicationsPerMonth} this month
      </h2>
      <p>Perches plan to apply to More position</p>
      <Link href={"/plans"}>View plans</Link>
      {applications.length < plan.maxApplicationsPerMonth && (
        <JobApply applicant={user} job={job} />
      )}
    </div>
  );
};

export default ApplyPage;
