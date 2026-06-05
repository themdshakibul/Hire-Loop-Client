import React from "react";
import CompanyProfile from "./CompanyProfile";
import { getUseerSession } from "@/lib/core/session";
import { getRecruiterCompany } from "@/lib/api/companies";

const CompanyPage = async () => {
  const user = await getUseerSession();
  const company = await getRecruiterCompany(user?.id);

  return (
    <div>
      <CompanyProfile recruiter={user} recruiterCompany={company} />
    </div>
  );
};

export default CompanyPage;
