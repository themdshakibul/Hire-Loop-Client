import { serverFetch } from "../core/server";
import { getUseerSession } from "../core/session";

export const getCompanies = async () => {
  return serverFetch(`/api/companies`);
};

export const getRecruiterCompany = async (recruiterId) => {
  return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
};

export const getLoggedInRecruiterCompany = async () => {
  const user = await getUseerSession();
  return getRecruiterCompany(user?.id);
};
