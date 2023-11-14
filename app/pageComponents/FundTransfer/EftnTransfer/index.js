"use client";

import React, { useState } from "react";
import TransferTypeSelection from "../Steps/TransferTypeSelection";
import EftnForm from "../Steps/EftnForm";
import TapToConfirm from "../Steps/TapToConfirm";

import Verification from "../Steps/Verification";
import { useTranslations } from "next-intl";

import { VerificationWithOTP } from "!@/app/utils/imports";

const EftnTransfer = ({ langJson, viaNpsb }) => {
  const t = useTranslations("Index");

  const [currentStep, setCurrentStep] = useState(0);
  const stepToggler = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const eftnToOtherBankSteps = [
    <TransferTypeSelection
      stepToggler={stepToggler}
      viaNpsb={viaNpsb}
      key={Math.random()}
    />,
    <EftnForm
      stepToggler={stepToggler}
      viaNpsb={viaNpsb}
      key={Math.random()}
    />,
    // <Verification stepToggler={stepToggler} viaNpsb={viaNpsb} />,
    <VerificationWithOTP
      willShowSuccess={false}
      successMessage={"Submitted,,,"}
      navigateTo={"/sign-up/set-profile"}
      viaNpsb={viaNpsb}
      stepToggler={stepToggler}
      key={Math.random()}
    />,
    <TapToConfirm
      stepToggler={stepToggler}
      viaNpsb={viaNpsb}
      from="eftn"
      key={Math.random()}
    />,
  ];
  return <>{eftnToOtherBankSteps[currentStep]}</>;
};

export default EftnTransfer;
