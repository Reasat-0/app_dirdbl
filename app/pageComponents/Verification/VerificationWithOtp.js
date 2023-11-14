"use client";

import { Formik } from "formik";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

import {
  PageTitle,
  DTypography,
  DButton,
  ErrorAlert,
  VerificationSuccess,
  DInputField,
  ContentContainer,
} from "@/app/utils/imports";

const VerificationWithOTP = ({
  willShowSuccess,
  successMessage,
  noStepToggler,
  navigateTo,
  stepToggler,
}) => {
  const router = useRouter();

  const t = useTranslations("Index");

  // const searchParams = useSearchParams();
  // const showSuccess = searchParams.get("showSuccess");
  const [showSuccess, setShowSucces] = useState(false);

  const [otp, setOtp] = React.useState("");

  const handleOTPChange = (newValue, setFieldValue) => {
    setFieldValue("otp", newValue);
    setOtp(newValue);
  };

  const validationSchema = Yup.object().shape({
    otp: Yup.string().required(t("validations.otpValidation")),
  });

  return (
    <ContentContainer>
      {!showSuccess && (
        <>
          <PageTitle
            variant={"title"}
            text={t("common.verificationTitle")}
            hasSubtitle={true}
          />
          <PageTitle
            variant={"sub-title"}
            text={t("common.verificationSubtitle")}
          />
          <Formik
            initialValues={{ otp: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              if (willShowSuccess) {
                setShowSucces(true);
                // router.push("/verification/success");
              } else if (stepToggler) {
                stepToggler();
              } else {
                noStepToggler
                  ? router.push(home)
                  : navigateTo
                  ? router.push(navigateTo)
                  : "";
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <DInputField
                  type="number"
                  // name="otp"
                  handleChange={(newValue) =>
                    handleOTPChange(newValue, setFieldValue)
                  }
                  onBlur={handleBlur}
                  value={otp}
                  label={"OTP"}
                  useAsOtp={true}
                  style={{ marginBottom: "40px" }}
                  setOtp={setFieldValue}
                />
                {errors.otp && touched.otp && (
                  <ErrorAlert
                    title={errors.otp}
                    alignTextHorizontal="center"
                    style={{ textAlign: "center" }}
                  />
                )}

                <Stack
                  direction={"row"}
                  style={{
                    marginTop: "24px",
                  }}
                  justifyContent={"center"}
                >
                  <DTypography
                    variant={"mediumRegular"}
                    textAccent={"lighter"}
                    text={t("common.dintGetCode")}
                  />
                  <DTypography
                    variant={"mediumBolder"}
                    textAccent={"gradient"}
                    text={t("button.btnResend")}
                    style={{
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Stack>

                <DButton
                  type="submit"
                  variant={"primary-gradient-btn"}
                  takeFullWidth={true}
                  style={{ marginTop: "40px" }}
                  label={t("button.btnVerify")}
                />
              </form>
            )}
          </Formik>
        </>
      )}

      {showSuccess && <VerificationSuccess successLocale={successMessage} />}
    </ContentContainer>
  );
};

export default VerificationWithOTP;
