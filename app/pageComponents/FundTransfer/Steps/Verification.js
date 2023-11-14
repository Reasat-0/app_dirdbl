import VerificationWithOTP from "../../Verification/VerificationWithOtp";
import React from "react";

const Verification = ({ stepToggler, common }) => {
  return <VerificationWithOTP stepToggler={stepToggler} pageData={common} />;
};

export default Verification;
