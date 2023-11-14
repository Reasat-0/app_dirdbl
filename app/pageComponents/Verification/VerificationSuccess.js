"use client";

import React from "react";

import Lock from "@/app/newComponetns/Icons/Lock";
import { useRouter } from "next/navigation";
import DButton from "@/app/newComponetns/DButton";
import { Box } from "@mui/material";
import DTypography from "@/app/newComponetns/DTypography/indedx";
import { home } from "@/app/utils/moduleDirectories";

const VerificationSuccess = ({ successLocale }) => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Lock />

        {/* <PageTitle
          variant={"sub-title"}
          text={
            successLocale
              ? successLocale
              : "Your card has been temporarily locked to avoid any kind of inconveniences. Please contact with the authority for further details."
          }
          hasSubtitle={true}
          utilClasses={"text-left"}
          style={{ marginBottom: "40px", marginTop: "40px" }}
        /> */}
        <DTypography
          variant={"medium2Bold"}
          textAccent={"lighter"}
          text={successLocale}
          className={"text-capitalize"}
          style={{ marginTop: "40px" }}
        />

        <DButton
          onClick={() => router.push(home)}
          variant={"primary-gradient-btn"}
          takeFullWidth={true}
          style={{ marginTop: "40px" }}
          label="Go Back To Home"
        />
      </Box>
    </>
  );
};

export default VerificationSuccess;
