import React from "react";

import { EftnTransfer, RegularTransfer } from "@/app/utils/imports";

const TransferOptionPage = ({ params }) => {
  const transferOption = params?.transferOption;
  return (
    <>
      {transferOption === "own-account" && (
        <RegularTransfer transferOption={transferOption} toOtherBank={false} />
      )}
      {transferOption === "other-bank" && (
        <RegularTransfer transferOption={transferOption} toOtherBank={true} />
      )}
      {transferOption === "eftn-to-other" && (
        <EftnTransfer transferOption={transferOption} viaNpsb={false} />
      )}
      {transferOption === "eftn-via-npsb" && (
        <EftnTransfer transferOption={transferOption} viaNpsb={true} />
      )}
    </>
  );
};

export default TransferOptionPage;
