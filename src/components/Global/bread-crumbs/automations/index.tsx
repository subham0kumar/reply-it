"use client";
import { ChevronRight, PencilIcon } from "lucide-react";
import ActivateAutomationsButton from "../../activate-automations-button";
import { useQueryAutomation } from "@/hooks/user-queries";
import { useEditAutomation } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutations";

type Props = {
  id: string;
};

const AutomationBreadCrumbs = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);

  const { isPending, edit, inputRef, enableEdit, disableEdit } =
    useEditAutomation(id);

  const { latestVariable } = useMutationDataState(["update-automation"]);

  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#989CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#989CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {edit ? (
            <input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable.variables : "Add a new Name"
              }
              className="bg-transparent h-auto outline-none border-b-[1px] border-white p-0 text-base"
            />
          ) : (
            <p className="text-[#989CA0] truncate">
              {latestVariable?.variables
                ? latestVariable?.variables.name
                : data?.data?.name}
            </p>
          )}
          {edit ? (
            <></>
          ) : (
            <span
              className="cursor-pointer hover:opcacity-75 duration-100 transition flex-shrink-0 mr-4"
              onClick={enableEdit}
            >
              <PencilIcon size={14} />
            </span>
          )}
        </span>
      </div>
      <div className="flex gap-x-5 ml-auto">
        <p className="hidden md:block truncate min-w-0 text-text-secondary/60 text-sm">
          All states are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
          {/* <p className="text-text-secondary text-sm truncate min-w-0">
            Undo | Redo
          </p> */}
        </div>
      </div>
      <ActivateAutomationsButton />
    </div>
  );
};

export default AutomationBreadCrumbs;
