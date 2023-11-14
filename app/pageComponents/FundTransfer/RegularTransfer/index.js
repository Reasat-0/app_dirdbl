"use client";

import React, { useState } from "react";

import TapToConfirm from "../Steps/TapToConfirm";

import RegularTransferForm from "../Steps/RegularTransferForm";

import { VerificationWithOTP } from "@/app/utils/imports";

const RegularTransfer = ({ langJson, viaNpsb, toOtherBank }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepToggler = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const regularToOtherBankSteps = [
    <RegularTransferForm
      stepToggler={stepToggler}
      viaNpsb={viaNpsb}
      toOtherBank={toOtherBank}
      key={1}
    />,
    // <Verification stepToggler={stepToggler} viaNpsb={viaNpsb} />,
    <VerificationWithOTP
      willShowSuccess={false}
      successMessage={"Submitted,,,"}
      stepToggler={stepToggler}
      viaNpsb={viaNpsb}
      key={2}
    />,
    <TapToConfirm
      toOtherBank={toOtherBank}
      stepToggler={stepToggler}
      viaNpsb={viaNpsb}
      key={3}
    />,
  ];
  return <>{regularToOtherBankSteps[currentStep]}</>;
};
export default RegularTransfer;
