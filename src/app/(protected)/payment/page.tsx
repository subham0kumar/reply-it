import React from "react";

type Props = {
  searchParams: {
    session_id?: string;
    cancel?: boolean;
  };
};

const Page = async ({ searchParams: { cancel, session_id } }: Props) => {
  if (session_id) {
    const customer = await onSubscribe(session_id);
  }
  return <div>Page</div>;
};

export default Page;
