import { requreRole } from "@/lib/core/session";

const SeekerLayout = async ({ children }) => {
  await requreRole("seeker");

  return children;
};

export default SeekerLayout;
