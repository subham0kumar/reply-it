"use client";

import { Button } from "@/components/ui/button";
import { useCreateAutomation } from "@/hooks/use-automations";
import { AutomationDuoToneWhite } from "@/icons";
import { useMemo } from "react";
import { v4 } from "uuid";
import Loader from "../Loader";

type Props = {};

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), []);
  const { mutate, isPending } = useCreateAutomation(mutationId);

  return (
    <Button
      onClick={() =>
        mutate({ name: "Untitled", id: mutationId, createdAt: new Date() })
      }
      className="lg:px-10 py-6 bg-gradient-to-br from-[#3352CC] to-[#1C2D70] hover:opacity-80 text-white rounded-full font-medium"
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
