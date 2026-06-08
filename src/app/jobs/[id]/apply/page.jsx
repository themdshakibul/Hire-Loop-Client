import { getUseerSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUseerSession();

  if (!user) {
    redirect(`/sigin?redirect=/jobs/${id}/apply`);
  }

  return (
    <div>
      <h2>Apply for this Jobs</h2>
    </div>
  );
};

export default ApplyPage;
