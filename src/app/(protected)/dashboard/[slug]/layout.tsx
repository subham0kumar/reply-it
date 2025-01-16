import Sidebar from "@/components/Global/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

function Layout({ children, params }: Props) {
  return (
    <div className="p-3">
      <Sidebar slug={params.slug} />
    </div>
  );
}

export default Layout;