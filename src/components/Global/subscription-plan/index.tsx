type Props = {
  type: "Free" | "Pro";
  children: React.ReactNode;
};

export const SubscriptionPlan = ({ children, type }: Props) => {
  
  const {} = useQueryUser();

  return children;
};
