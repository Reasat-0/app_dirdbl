import React from "react";

import { AddBeneficiary } from "@/app/utils/imports";

// export const dynamic = "force-dynamic";
const BeneficiaryAddPage = ({ params }) => {
  return <AddBeneficiary langParam={params.locale} />;
};

export default BeneficiaryAddPage;
