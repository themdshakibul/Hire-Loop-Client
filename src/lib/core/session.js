import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const getUseerSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session?.user || null;
};

export const requreRole = async (role) => {
  const user = await getUseerSession();

  if (user?.role !== role) {
    return redirect("/unauthorized");
  }
};
