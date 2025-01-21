"use server";

import { client } from "@/lib/prisma";

export const createAutomation = async (clerkId: string, id?: string) => {
  return await client.user.update({
    where: {
      clerkId,
    },
    data: {
      automations: {
        create: {
          ...(id && { id }),
        },
      },
    },
  });
};

export const getAllAutomation = async (clerkId: string) => {
  return await client.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      automations: {
        orderBy: {
          createAt: "asc",
        },
        include: {
          keyword: true,
          listener: true,
        },
      },
    },
  });
};

export const findAutomation = async (id: string) => {
  return await client.automation.findUnique({
    where: {
      id,
    },
    include: {
      keyword: true,
      listener: true,
      posts: true,
      trigger: true,
      User: {
        select: {
          subscription: true,
          integrations: true,
        },
      },
    },
  });
};
