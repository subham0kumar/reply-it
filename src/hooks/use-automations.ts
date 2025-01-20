import { createAutomations } from "@/actions/automations";
import { useMutationData } from "./use-mutations";

export const useCreateAutomation = (id?: string) => {
  const { mutate, isPending } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  );
  return { isPending, mutate };
};
