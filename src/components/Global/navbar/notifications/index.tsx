import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const Notifications = () => {
  return (
    <Button className="bg-white rounded-full py-6 text-[#3352cc] hover:text-white">
      <Bell fill="#3352cc"/>
    </Button>
  );
};
