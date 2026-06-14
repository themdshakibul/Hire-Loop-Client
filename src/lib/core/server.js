import { redirect } from "next/navigation";
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const authHeder = async () => {
  const token = await getUserToken();
  const header = token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};

  return header;
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  // hendel 401, 404, 403
  return hadelStatusCode(res);
};

export const proctedFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: await authHeder(),
  });

  return hadelStatusCode(res);
};

export const serverMutation = async (path, data, method = "POST") => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",

      ...(await authHeder()),
    },
    body: JSON.stringify(data),
  });

  return hadelStatusCode(res);
};

const hadelStatusCode = (res) => {
  if (res.status === 401) {
    redirect("/unauthorized");
  } else if (res.status === 403) {
    redirect("/unauthorized");
  }

  return res.json();
};
