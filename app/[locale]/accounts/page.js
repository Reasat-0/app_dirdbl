import React from "react";
import { Accounts } from "@/app/utils/imports";

const AccountsPage = async ({ params }) => {
  return <Accounts langParam={params?.locale} />;
};

export default AccountsPage;
