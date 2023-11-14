import React from "react";
import { FundTransfer } from "@/app/utils/imports";

const FundTransferPages = ({ params }) => {
  return <FundTransfer langParam={params?.locale} />;
};

export default FundTransferPages;
