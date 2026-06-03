"use client";

import DashbordStats from "@/Components/Apps/Dashboard/Shared/DashbordStats";
import { useSession } from "@/lib/auth-client";
import {
  FileText,
  PersonMagnifier,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";

const RecruiterDashbordHomePage = () => {
  const { data, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  const user = data?.user;

  const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: FileText },
    { title: "Total Applicants", value: "1,284", icon: PersonMagnifier },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  return (
    <div>
      <h2 className="text-4xl font-semibold ">Wellcome back {user?.name}</h2>
      <DashbordStats StatsData={recruiterStats} />
    </div>
  );
};

export default RecruiterDashbordHomePage;
