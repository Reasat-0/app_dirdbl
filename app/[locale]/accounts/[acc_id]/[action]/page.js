import React from "react";

import {
  Last5Transactions,
  RequestAChequebook,
  RequestEStatement,
  TemporaryLock,
} from "@/app/utils/imports";

const CardPage = ({ params }) => {
  const actionType = params?.action;
  return (
    <>
      {actionType === "request-chequebook" && <RequestAChequebook />}
      {/* {actionType === "request-e-statement" && <RequestEStatement />} */}
      {actionType === "request-e-statement" && <RequestEStatement />}
      {actionType === "last5-transactions" && <Last5Transactions />}
      {actionType === "temporary-lock" && <TemporaryLock />}
    </>
  );
};

export default CardPage;
