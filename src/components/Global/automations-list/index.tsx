"use client";
import { usePaths } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";
import { useQueryAutomations } from "@/hooks/user-queries";

type Props = {};

const AutomationsList = (props: Props) => {
  const { data } = useQueryAutomations();

  const { pathname } = usePaths();

  if (data?.status !== 200) {
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-3"></div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/221144`}
        className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">Automation Name</h2>
          <p className="text-[#989CA0] text-sm font-light mb-2">
            This is from the comment.
          </p>
          <div className="flex gap-x-2 flex-wrap mt-3">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 &&
                  "bg-keyword-green/15 border-2 border-keyword-green",
                (1 + 1) % 2 == 0 &&
                  "bg-keyword-purple/15 border-2 border-keyword-purple",
                (2 + 1) % 3 == 0 &&
                  "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                (3 + 1) % 4 == 0 &&
                  "bg-keyword-red/15 border-2 border-keyword-red"
              )}
            >
              getStarted
            </div>
          </div>
          <div className="rounded-full border-2 border-dashed mt-3 border-white/60 px-3 py-1">
            <p className="text-sm text-[bfc0c3]">No Keywords</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-sm font-light text-[#9b9ca0] capitalize">
            Oct, 5th '24
          </p>
          <GradientButton
            type="Button"
            className="w-full bg-background-80 text-white hover:bg-background-80"
          >
            Smart AI
          </GradientButton>
          <Button className="bg-background-80 hover:bg-background-80 text-white">
            Standard
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationsList;
