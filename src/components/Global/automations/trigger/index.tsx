"use client";
import { useQueryAutomation } from "@/hooks/user-queries";
import React from "react";
import ActiveTrigger from "./active";
import { Separator } from "@/components/ui/separator";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  // if (data?.data && data?.data?.trigger.length > 0) {
  return (
    <div className="flex flex-col gap-y-6">
      {/* TODO: add this for type data?.data.trigger[0].type  */}
      <ActiveTrigger
        type={"COMMENT"}
        keywords={[
          {
            id: "1",
            word: "hello",
            automationId: id,
          },
          {
            id: "2",
            word: "world",
            automationId: id,
          },
        ]}
      />
      {/*TODO: {data?.data?.trigger.length > 1 && <></>} */}

      <>
        <div className="relative w-full">
          <p className="absolute bg-background-90 transform px-4 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
            or
          </p>
          <Separator
            orientation="horizontal"
            className="border-muted border-[1px]"
          />
        </div>
        <ActiveTrigger
          type={"MESSAGE"}
          keywords={[
            {
              id: "1",
              word: "hello",
              automationId: id,
            },
            {
              id: "2",
              word: "world",
              automationId: id,
            },
          ]}
        />
      </>
    </div>
  );
  // }
};

export default Trigger;
