import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const IntegrationCard = ({ title, icon, description }: Props) => {
  return (
    <div className="border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl">{title}</h3>
        <p className="text-base text-[#9D9D9D] w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>
      <Button
        // onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className="bg-gradient-to-br text-white rounded-full from-[#3352cc] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100 ease-in-out"
      >
        Connect
      </Button>
    </div>
  );
};

export default IntegrationCard;
