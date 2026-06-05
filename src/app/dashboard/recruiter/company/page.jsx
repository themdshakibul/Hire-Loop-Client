import React from "react";
import CompanyProfile from "./CompanyProfile";
import { getUseerSession } from "@/lib/core/session";

const CompanyPage = async () => {
  const user = await getUseerSession();
  console.log("Use Session in Companys page", user);

  return (
    <div>
      <CompanyProfile recruiter={user} />
    </div>
  );
};

export default CompanyPage;
