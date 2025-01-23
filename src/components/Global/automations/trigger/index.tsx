"use client";
import { Separator } from "@/components/ui/separator";
import { AUTOMATION_TRIGGERS } from "@/constants/automation";
import { useQueryAutomation } from "@/hooks/user-queries";
import ThenAction from "../then/then-action";
import TriggerButton from "../trigger-button";
import ActiveTrigger from "./active";
import { useTriggers } from "@/hooks/use-automations";
import { cn } from "@/lib/utils";
import Keywords from "./keywords";
import { Button } from "@/components/ui/button";
import Loader from "../../Loader";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { types, onSaveTrigger, isPending, onSetTrigger } = useTriggers(id);
  console.log(types?.length);
  if (data?.data && data?.data?.trigger.length > 0) {
    return (
      <div className="flex flex-col gap-y-6">
        <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keyword}
        />
        {data?.data?.trigger.length > 1 && (
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
              type={data.data.trigger[0].type}
              keywords={data.data.keyword}
            />
          </>
        )}
        {!data.data.listener && <ThenAction id={id} />}
      </div>
    );
  }
  return (
    <TriggerButton label="Add Trigger">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
            className={cn(
              "hover:opacity-80 text-white rounded-xl flex cursor-pointer flex-col p-3 gap-y-2",
              !types?.find((t) => t === trigger.type)
                ? "bg-background-80"
                : "bg-gradient-to-br from-[#3352CC] font-medium to-[#1C2D70]"
            )}
          >
            <div className="flex gap-x-2 items-center">
              {trigger.icon}
              <p className="font-bold">{trigger.label}</p>
            </div>
            <p className="text-sm font-light">{trigger.description}</p>
          </div>
        ))}
        <Keywords id={id} />
        <Button
          onClick={onSaveTrigger}
          disabled={types?.length === 0}
          className="bg-gradient-to-br text-white rounded-full from-[#3352cc] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100 ease-in-out"
        >
          <Loader state={isPending}>Creata Trigger</Loader>
        </Button>
      </div>
    </TriggerButton>
  );
};

export default Trigger;
