import AdminUsersTable from "@/Components/Apps/Dashboard/Admin/AdminUsersTable";
import { getUsersList } from "@/lib/api/users";

const AdminUserPage = async () => {
  const data = await getUsersList();
  const users = data?.users || [];

  return (
    <div className="min-h-screen bg-[#121212] p-8 text-slate-200">
      <div className="container mx-auto space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-100">
          User Management ({users.length})
        </h2>

        <AdminUsersTable users={users} />
      </div>
    </div>
  );
};

export default AdminUserPage;
