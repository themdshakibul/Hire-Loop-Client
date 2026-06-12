import { getApplicationsByApplicant } from "@/lib/api/applications";
import { getUseerSession } from "@/lib/core/session";
import React from "react";

const AppliactionsPage = async () => {
  const user = await getUseerSession();
  const jobs = await getApplicationsByApplicant(user.id);

  return (
    <div>
      <h2>Applications Page {jobs.length}</h2>
    </div>
  );
};

export default AppliactionsPage;
