'use client'
import { useQueryUser } from "@/hooks/user-queries";

type Props = {
  type: "Free" | "Pro";
  children: React.ReactNode;
};

export const SubscriptionPlan = ({ children, type }: Props) => {
  const { data } = useQueryUser();
  console.log(data?.data)

  return  type && children;
};
