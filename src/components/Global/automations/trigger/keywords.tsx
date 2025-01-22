import { Input } from "@/components/ui/input";
import { useKeywords } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutations";
import { useQueryAutomation } from "@/hooks/user-queries";
import { X } from "lucide-react";
import React from "react";

type Props = {
  id: string;
};

const Keywords = ({ id }: Props) => {
  const { onValueChange, onKeyPress, deleteMutation, keyword } =
    useKeywords(id);

  const { latestVariable } = useMutationDataState(["add-keyword"]);

  const { data } = useQueryAutomation(id);

  return (
    <div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
      <p className="text-sm text-text-secondary">
        Add keywords to trigger your automation.
      </p>
      <div className="flex justify-start items-center gap-2 flex-wrap">
        {data?.data?.keyword &&
          data?.data?.keyword?.length > 0 &&
          data?.data?.keyword?.map(
            (word) =>
              word.id !== latestVariable.variables.id && (
                <div
                  key={word.id}
                  className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-xl"
                >
                  <p>{word.word}</p>
                  <X size={20} onClick={() => deleteMutation(word.id)} />
                </div>
              )
          )}
        {latestVariable && latestVariable.status === "pending" && (
          <div className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-xl">
            {latestVariable.variables.keyword}
          </div>
        )}

        <Input
          placeholder="Add Keyword..."
          style={{
            width: Math.min(Math.max(keyword.length || 10, 2), 50) + "ch",
          }}
          value={keyword}
          className="p-0 bg-transparent ring-0 border-none outline-none"
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Keywords;
