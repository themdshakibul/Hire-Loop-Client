import { requreRole } from "@/lib/core/session";

const RecruiterLayout = async ({ children }) => {
  await requreRole("recruiter");

  return children;
};

export default RecruiterLayout;
