"use server";

import { on } from "events";
import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import {
  addKeyword,
  addListener,
  addPosts,
  addTrigger,
  createAutomation,
  deleteKeywordQuery,
  findAutomation,
  getAllAutomation,
  updateAutomation,
} from "./queries";

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

    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);
    if (update) {
      return {
        status: 200,
        data: "Automation Updated",
      };
    }
    return {
      status: 404,
      data: "Oops! count not update automation",
    };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal Server Error" };
  }
};

export const saveListener = async (
  automationId: string,
  listener: "MESSAGE" | "SMART_AI",
  prompt: string,
  reply?: string
) => {
  await onCurrentUser();
  try {
    const create = await addListener(automationId, listener, prompt, reply);
    if (create) return { status: 200, data: "Listener created" };
    return { status: 404, data: "Can't save the Listener" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser();
  try {
    const create = await addTrigger(automationId, trigger);
    if (create) return { status: 200, data: "Trigger created" };
    return { status: 404, data: "Can't save the Trigger" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const saveKeyword = async (automationId: string, keyword: string) => {
  await onCurrentUser();
  try {
    const create = await addKeyword(automationId, keyword);
    if (create) return { status: 200, data: "Trigger created" };
    return { status: 404, data: "Can't save the Trigger" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};
export const deleteKeyword = async (id: string) => {
  await onCurrentUser();
  try {
    const deleted = await deleteKeywordQuery(id);
    if (deleted) return { status: 200, data: "Trigger created" };
    return { status: 404, data: "Can't save the Trigger" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const getProfilePosts = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    const posts = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
    );
    const parsed = await posts.json();
    if (parsed) return { status: 200, data: parsed };
    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const savePosts = async (
  automationId: string,
  posts: {
    postid: string;
    caption?: string;
    media: string;
    mediaType: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM";
  }[]
) => {
  await onCurrentUser();
  try {
    const create = await addPosts(automationId, posts);
    if (create) return { status: 200, data: "Posts created" };
    return { status: 404, data: "Can't save the Posts" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const activateAutomation = async (id: string, state: boolean) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(id, { active: state });
    if (update)
      return {
        status: 200,
        data: `Automation ${state ? "Activated" : "Deactivated"}`,
      };
    return { status: 404, data: "Oops! Automation not found" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal Server Error" };
  }
};
