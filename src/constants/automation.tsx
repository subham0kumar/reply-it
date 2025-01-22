import { PlaneBlue, SmartAi, TinyInstagram } from "@/icons";
import { v4 } from "uuid";

export type AutomationListenerProps = {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  type: "MESSAGE" | "SMART_AI";
};

export type AutomationsTriggerProps = {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  type: "COMMENT" | "DM";
};

export const AUTOMATION_TRIGGERS: AutomationsTriggerProps[] = [
  {
    id: v4(),
    label: "User comments on my posts",
    icon: <TinyInstagram />,
    description: "Select if you want to automate comments on your posts.",
    type: "COMMENT",
  },
  {
    id: v4(),
    label: "Send me a DM with a keyword",
    icon: <TinyInstagram />,
    description: "Select if you want to automate DMs on your profile.",
    type: "DM",
  },
];

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    id: v4(),
    label: "Send the user a message",
    icon: <PlaneBlue />,
    description: "Enter the message that you want to  send the user.",
    type: "MESSAGE",
  },
  {
    id: v4(),
    label: "Let Smart AI take over",
    icon: <SmartAi />,
    description: "Tell AI about your project. (Upgrade to use this feature)",
    type: "SMART_AI",
  },
];
