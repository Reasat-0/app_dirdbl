"use client";

import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import {
  ContentContainer,
  PageTitle,
  DButton,
  DDatePicker,
  AccountInfoCard,
  ErrorAlert,
  VerificationWithOTP,
} from "@/app/utils/imports";

const RequestEStatement = () => {
  const t = useTranslations("Index");

  const [showVerification, setShowVerification] = useState(false);

  const initialValues = { from: "", to: "" };

  const validationSchema = (values) =>
    Yup.object().shape({
      from: Yup.string().required(t("validations.errorFromDate")),
      to: Yup.object().nullable().required(t("validations.errorToDate")),
    });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setShowVerification(true);
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
            text={t("requestEStatement.pageTitle")}
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
            }) => (
              <form
                onSubmit={handleSubmit}
                style={{
                  marginTop: "24px",
                }}
              >
                <Box style={{ marginBottom: "24px" }}>
                  <DDatePicker
                    label={t("common.fieldDateFrom")}
                    value={values.from}
                    onBlur={handleBlur}
                    name="from"
                    handleChange={(value) => setFieldValue("from", value)}
                    placeholder={t("common.placeholderDateFrom")}
                  />
                  {errors.from && touched.from && (
                    <ErrorAlert title={errors.from} />
                  )}
                </Box>

                <Box>
                  <DDatePicker
                    label={t("common.fieldDateTo")}
                    value={values.to}
                    onBlur={handleBlur}
                    name="to"
                    handleChange={(value) => setFieldValue("to", value)}
                    placeholder={t("common.placeholderDateTo")}
                  />
                  {errors.to && touched.to && <ErrorAlert title={errors.to} />}
                </Box>
                <DButton
                  type="submit"
                  variant={"primary-gradient-btn"}
                  takeFullWidth={true}
                  style={{ marginTop: "40px" }}
                  label={t("button.continue")}
                />
              </form>
            )}
          </Formik>
        </>
      )}
    </ContentContainer>
  );
};

export default RequestEStatement;
