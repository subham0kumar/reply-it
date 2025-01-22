"use client";
import { Separator } from "@/components/ui/separator";
import { AUTOMATION_TRIGGERS } from "@/constants/automation";
import { useQueryAutomation } from "@/hooks/user-queries";
import ThenAction from "../then/then-action";
import TriggerButton from "../trigger-button";
import ActiveTrigger from "./active";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { onSetTrigger } = useTriggers(id);
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
    <TriggerButton label="Trigger">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
          ></div>
        ))}
      </div>
    </TriggerButton>
  );
};

export default Trigger;
