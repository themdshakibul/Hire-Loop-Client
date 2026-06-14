import { getUsersList } from "@/lib/api/users";

const AdminUsersPage = async () => {
  const data = await getUsersList();
  const users = data.users;

  return (
    <div>
      <h2>Admin Users {users.length}</h2>
    </div>
  );
};

export default AdminUsersPage;
