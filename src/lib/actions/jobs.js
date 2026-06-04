"use server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createJobs = async (newJobsData) => {
  const res = await fetch(`${baseUrl}/api/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newJobsData),
  });
  return res.json();
};
