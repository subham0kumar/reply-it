import React from "react";
import PaymentCard from "./payment-card";
import { useQueryUser } from "@/hooks/user-queries";

type Props = {};

const Billing = (props: Props) => {
  const { data } = useQueryUser();
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <PaymentCard current={data?.data?.subscription?.plan!} label="Free" />
      <PaymentCard current={data?.data?.subscription?.plan!} label="Pro" />
    </div>
  );
};

export default Billing;
