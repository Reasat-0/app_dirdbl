import React from "react";

import {
  CheckLimit,
  ContentContainer,
  RequestEStatement,
  TemporaryLock,
} from "@/app/utils/imports";
import ReportLostOrStolen from "@/app/pageComponents/CommonPages/ReportLostOrStolen";

const CardPage = ({ params }) => {
  const actionType = params?.actionType;
  return (
    <>
      {actionType === "request-e-statement" && <RequestEStatement />}
      {actionType === "check-limit" && <CheckLimit />}
      {actionType === "report-lost-stolen" && <ReportLostOrStolen />}
      {actionType === "temporary-lock" && <TemporaryLock />}
    </>
  );
};

export default CardPage;
