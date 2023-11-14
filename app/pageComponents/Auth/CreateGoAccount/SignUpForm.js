import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ContentContainer,
  DButton,
  DInputField,
  DTypography,
  ErrorAlert,
  PageTitle,
  VerificationWithOTP,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";

const SignUpForm = ({ signInVia }) => {
  const t = useTranslations("Index");
  const [showVerification, setShowVerification] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setShowVerification(true);
  };

  const validationSchema = (values) =>
    Yup.object().shape({
      accountNumber: Yup.string().required(t("validations.accountNumber")),
      //   password: Yup.string().nullable().required(t("validations.password")),
    });
  return (
    <ContentContainer>
      {!showVerification && (
        <>
          <PageTitle
            variant={"title"}
            text={
              signInVia === "accountt"
                ? t("auth.haveADBLAcc")
                : t("auth.haveADBLCard")
            }
            hasSubtitle={true}
            style={{ textAlign: { xxs: "center", md: "center" } }}
          />
          <PageTitle
            variant={"sub-title"}
            text={t("auth.justNeedToVerify")}
            hasSubtitle={true}
            style={{ textAlign: { xxs: "center", md: "center" } }}
          />

          <Formik
            initialValues={{ accountNumber: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
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
              <form
                onSubmit={handleSubmit}
                style={{
                  marginTop: "48px",
                }}
              >
                <Box style={{ marginBottom: "24px" }}>
                  <DInputField
                    type="text"
                    name="accountNumber"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    value={values.accountNumber}
                    label={
                      signInVia === "account"
                        ? t("common.fieldAccNumber")
                        : t("common.fieldCardNumber")
                    }
                    placeholder={
                      signInVia === "account"
                        ? t("common.placeholderAccNumber")
                        : t("common.placeholderCardNumber")
                    }
                  />

                  {errors.accountNumber && touched.accountNumber && (
                    <ErrorAlert title={errors.accountNumber} />
                  )}
                </Box>

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

      {showVerification && (
        <VerificationWithOTP
          willShowSuccess={false}
          successMessage={"Submitted,,,"}
          navigateTo={"/sign-up/set-profile"}
        />
      )}
    </ContentContainer>
  );
};

export default SignUpForm;
