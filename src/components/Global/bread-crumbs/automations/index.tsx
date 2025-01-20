import { ChevronRight, PencilIcon } from "lucide-react";
import ActivateAutomationsButton from "../../activate-automations-button";

type Props = {
  id: string;
};

const AutomationBreadCrumbs = ({ id }: Props) => {
  //WIP: get the automations data

  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#989CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#989CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#989CA0] truncate">This is the Automation Name</p>
          <span
            className="cursor-pointer hover:opcacity-75 duration-100 transition flex-shrink-0 mr-4"
            // onClick={enableEdit}
          >
            <PencilIcon size={14} />
          </span>
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
