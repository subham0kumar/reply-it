"use client";
import Sheet from "@/components/Global/sheet";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import { Menu } from "lucide-react";
import React from "react";
import Items from "../sidebar/items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCard from "../sidebar/upgrade";
import { LogoSmall } from "@/svgs/logo-small";
import CreateAutomation from "../create-automation";
import Search from "../search";
import { Notifications } from "./notifications";
import MainBreadCrumb from "../bread-crumbs/main-bread-crumb";
import HamburgerMenu from "../hamburger";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="flex lg:hidden items-center flex-1 gap-x-2">
            <HamburgerMenu slug={slug} page={page} />
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
      </div>
    )
  );
};

export default Navbar;
