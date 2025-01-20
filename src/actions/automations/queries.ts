"use server";

import { client } from "@/lib/prisma";

export const createAutomation = async (clerkId: string) => {
  return await client.user.update({
    where: {
      clerkId,
    },
    data: {
      automations: {
        create: {},
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
