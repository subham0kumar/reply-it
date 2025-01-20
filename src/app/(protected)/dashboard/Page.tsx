import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = {};

type UserData = {
  firstname: string;
  lastname: string;
};

const Page = async (props: Props) => {
  const user = await onBoardUser() as { status: number; data?: UserData };
  if (user.status === 200 || user.status === 201) {
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`);
  }

  return redirect("/sign-in");
};

export default Page;
