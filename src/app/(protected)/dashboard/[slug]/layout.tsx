import Navbar from "@/components/Global/navbar";
import Sidebar from "@/components/Global/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

function Layout({ children, params }: Props) {
  return (
    <div className="p-3">
      {/* Sidebar  */}
      <Sidebar slug={params.slug} />
      {/* Navbar  */}
      <div className="flex flex-col lg:ml-[250px] lg:pl-10 lg:py-5 overflow-auto">
        <Navbar slug={params.slug} />
      </div>
    </div>
  );
}

export default Layout;
