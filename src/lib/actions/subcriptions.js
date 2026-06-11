"use server";

import { serverMutation } from "../core/server";

export const createSubCriptions = async (subInfo) => {
  return serverMutation("/api/subcriptions", subInfo);
};
