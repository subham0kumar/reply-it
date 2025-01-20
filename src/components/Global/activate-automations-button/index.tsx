import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../Loader";
import { ActiveAutomation } from "@/icons/active-automation";

type Props = {};

const ActivateAutomationsButton = (props: Props) => {
  return (
    <Button className="lg:p-x-10 gradient-to-br from-[#3352Cc] to-[#1C2D70] font-medium ml-4 text-white rounded-full hover:opacity-80">
      <Loader state={false}>
        <ActiveAutomation />
        <p className="lg;inline hidden">Activate</p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationsButton;
