import { activateAutomation } from "@/actions/automations";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutationData } from "@/hooks/use-mutations";
import { useQueryAutomation } from "@/hooks/user-queries";
import { ActiveAutomation } from "@/icons/active-automation";
import { InactiveAutomation } from "@/icons/inactive-automation";

type Props = {
  id: string;
};

const ActivateAutomationsButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ["activate"],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    "automation-info"
  );
  return (
    <Button
      disabled={isPending}
      onClick={() => mutate({ state: !data?.data?.active })}
      className={`lg:p-x-10 bg-gradient-to-br ${
        !data?.data?.active
          ? "from-[#3352CC] to-[#1C2D70]"
          : "from-[#cc3333] to-[#701c1c]"
      } font-medium ml-4 text-white rounded-full hover:opacity-80`}
    >
      {isPending ? (
        <Loader2 className="animate-spin" />
      ) : data?.data?.active ? (
        <InactiveAutomation />
      ) : (
        <ActiveAutomation />
      )}
      <p className="lg:inline hidden">
        {data?.data?.active ? "Inactive" : "Active"}
      </p>
    </Button>
  );
};

export default ActivateAutomationsButton;
