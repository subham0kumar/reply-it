import { useListener } from "@/hooks/use-automations";
import React from "react";
import TriggerButton from "../trigger-button";
import { AUTOMATION_LISTENERS } from "@/constants/automation";
import { SubscriptionPlan } from "../../subscription-plan";

type Props = {
  id: string;
};

const ThenAction = ({ id }: Props) => {
  const {
    onFormSubmit,
    onSetListener,
    register,
    isPending,
    listener: Listerner,
  } = useListener(id);
  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_LISTENERS.map((listener) =>
          listener.type === "SMART_AI" ? (
            <SubscriptionPlan key={listener.type} type="Pro" />
          ) : (
            ""
          )
        )}
      </div>
    </TriggerButton>
  );
};

export default ThenAction;
