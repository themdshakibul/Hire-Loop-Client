import { getApplicationsByApplicant } from "@/lib/api/applications";
import { getUseerSession } from "@/lib/core/session";
import React from "react";
import ApplicationsTable from "./ApplicationsTable";

const AppliactionsPage = async () => {
  const user = await getUseerSession();
  const jobs = await getApplicationsByApplicant(user.id);

  return (
    <div>
      <ApplicationsTable jobs={jobs} />
    </div>
  );
};

export default AppliactionsPage;
