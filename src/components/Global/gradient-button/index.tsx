import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "Button" | "Link";
  href?: string;
  className?: string;
};

const GradientButton = ({ children, type, href, className }: Props) => {
  const gradients =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]";

  switch (type) {
    case "Button":
      return (
        <div className={gradients}>
          <Button className={cn(className, "rounded-xl")}>{children}</Button>
        </div>
      );
    case "Link":
      return (
        <div className={gradients}>
          <Link href={href!} className={cn(className, "rounded-xl")}>
            {children}
          </Link>
        </div>
      );
    default:
      return null;
  }
};

export default GradientButton;
