import React from "react";

import { accounts } from "../../../Constants";
import { SingleAccount } from "@/app/utils/imports";

const AccountPage = async ({ params: { langParam, acc_id } }) => {
  const singleAccData = accounts.find((x) => x.id === parseInt(acc_id));
  return <SingleAccount accountData={{ paramId: acc_id, ...singleAccData }} />;
};

export default AccountPage;
