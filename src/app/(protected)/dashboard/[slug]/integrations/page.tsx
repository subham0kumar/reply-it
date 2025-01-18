import { INTEGRATIONS_CARDS } from "@/constants/integrations";
import React from "react";
import IntegrationCard from "./_components/integration-card/page";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {INTEGRATIONS_CARDS.map((card, index) => (
          <IntegrationCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page;
