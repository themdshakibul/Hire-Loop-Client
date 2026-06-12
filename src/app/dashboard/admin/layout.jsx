import { requreRole } from "@/lib/core/session";

const AdminDashboardLayout = async ({ children }) => {
  await requreRole("admin");
  return children;
};

export default AdminDashboardLayout;
