import { getAllAutomations } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { client } from "@/lib/prisma";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
};

export const PrefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, onUserInfo, "user-profile");
};

export const PrefetchUserAutomation = async (client: QueryClient) => {
    return await prefetch(client, getAllAutomations , 'user-automations')
}

