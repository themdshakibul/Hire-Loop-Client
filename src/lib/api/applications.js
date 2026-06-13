import { proctedFetch } from "../core/server";

export const getApplicationsByApplicant = async (applicantId) => {
  return proctedFetch(`/api/applications?applicantId=${applicantId}`);
};
