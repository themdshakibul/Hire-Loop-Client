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

  if (!user) {
    redirect("/sigin");
  }

  if (user?.role !== role) {
    redirect("/unauthorized");
  }
  return user;
};
