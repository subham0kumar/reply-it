import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = ({ state, className, children, color }: Props) => {
  return state ? (
    <div className={cn(className)}>
      {/* <Spinner color={color} /> */}
    </div>
  ) : (
    ""
  );
};

export default Loader;
