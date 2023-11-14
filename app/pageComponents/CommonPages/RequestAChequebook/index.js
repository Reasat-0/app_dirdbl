"use client";

// import { error } from 'console';
import { Formik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Box } from "@mui/material";

import {
  ContentContainer,
  PageTitle,
  VerificationWithOTP,
  ErrorAlert,
  DInputField,
  DButton,
  DAutoComplete,
  BankCard,
  AccountInfoCard,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";

const RequestAChequebook = ({
  buttonLocale,
  commonLocale,
  validationLocale,
}) => {
  const router = useRouter();
  const t = useTranslations("Index");

  const [showVerification, setShowVerification] = useState(false);

  const initialValues = { leaves: "", branch: "" };

  const validationSchema = (values) =>
    Yup.object().shape({
      leaves: Yup.string().required(t("validations.errorLeavesDate")),
      // district: Yup.string().required("District is required"),
      branch: Yup.object().nullable().required(t("validations.branchName")),
    });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setShowVerification(true);
    // router.push("/verification");
  };
  return (
    <ContentContainer>
      {showVerification && (
        <VerificationWithOTP
          willShowSuccess={true}
          noStepToggler={true}
          successMessage={"Submitted,,,"}
        />
      )}

      {!showVerification && (
        <>
          <PageTitle
            variant={"title"}
            text={t("requestAChequebook.pageTitle")}
            hasSubtitle={false}
            utilClasses={"text-center"}
          />

          <AccountInfoCard variant="small" />

          <Formik
            initialValues={initialValues}
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
                  marginTop: "24px",
                }}
              >
                <Box style={{ marginBottom: "24px" }}>
                  <DInputField
                    type="text"
                    label={t("common.fieldLeave")}
                    onBlur={handleBlur}
                    value={values.leaves}
                    handleChange={handleChange}
                    name="leaves"
                    placeholder={t("common.placeholderLeave")}
                  />
                  {errors.leaves && touched.leaves && (
                    <ErrorAlert title={errors.leaves} />
                  )}
                </Box>

                <Box>
                  <DAutoComplete
                    value={values?.branch}
                    name="branch"
                    options={[
                      { id: 1, title: "Branch 1" },
                      { id: 2, title: "Branch 2" },
                      { id: 3, title: "Branch 3" },
                      { id: 4, title: "Branch 4" },
                    ]}
                    handleChange={(event, value) =>
                      setFieldValue("branch", value)
                    }
                    placeholder={t("common.placeholderBranchName")}
                    label={t("common.fieldBranchName")}
                  />
                  {errors.branch && touched.branch && (
                    <ErrorAlert title={errors.branch} />
                  )}
                </Box>

                <DButton
                  type="submit"
                  variant={"primary-gradient-btn"}
                  takeFullWidth={true}
                  style={{ marginTop: "40px" }}
                  label={t("button.btnRequestChequebook")}
                />
              </form>
            )}
          </Formik>
        </>
      )}
    </ContentContainer>
  );
};

export default RequestAChequebook;
