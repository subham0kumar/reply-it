import { getAutomationInfo } from "@/actions/automations";
import PostNode from "@/components/Global/automations/post/node";
import ThenNode from "@/components/Global/automations/then/node";
import Trigger from "@/components/Global/automations/trigger";
import AutomationBreadCrumbs from "@/components/Global/bread-crumbs/automations";
import { Warning } from "@/icons";
import { PrefetchUserAutomation } from "@/react-query/prefetch";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetaData({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id);
  return {
    title: info.data?.name,
  };
}

const Page = async ({ params }: Props) => {
  const query = new QueryClient();
  await PrefetchUserAutomation(query, params.id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-20">
        <AutomationBreadCrumbs id={params.id} />
        <div className="w-full lg:w-10/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3">
          <div className="flex gap-x-2">
            <Warning />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
        <ThenNode id={params.id} />
        <PostNode id={params.id} />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
