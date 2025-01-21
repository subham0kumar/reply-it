"use server";

import { onCurrentUser } from "../user";
import { createAutomation, findAutomation, getAllAutomation } from "./queries";

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create) return { status: 200, data: "Automation Created" };
    return { status: 404, data: "Oops! something went wrong" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal Server Error" };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const automations = await getAllAutomation(user.id);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 400, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();
  try {
    const automation = await findAutomation(id);
    if (automation) return { status: 200, data: automation };

    return { status: 404, data: "Automation not found" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};
