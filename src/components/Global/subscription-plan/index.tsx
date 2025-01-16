type Props = {
  type: "Free" | "Pro";
  children: React.ReactNode;
};

export const SubscriptionPlan = ({ children, type }: Props) => {
  return children;
};
