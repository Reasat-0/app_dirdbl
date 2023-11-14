"use client";

import { Box } from "@mui/material";
import { Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";
import React, { useState } from "react";

import { mblBankingOptions } from "../../Constants";

import {
  VerificationWithOTP,
  DSelect,
  ErrorAlert,
  PageTitle,
  DButton,
  DInputField,
  ContentContainer,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { beneficiaryManagementDir } from "@/app/utils/moduleDirectories";

const AddBeneficiary = ({ langJson }) => {
  const t = useTranslations("Index");
  const router = useRouter();

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [showVerification, setShowVerification] = useState(false);

  const validationSchema = Yup.object().shape({
    accountType: Yup.string().required(t("validations.accountType")),
    name: Yup.string().required(t("validations.name")),
    number: Yup.number().required(t("validations.number")),
  });

  return (
    <ContentContainer>
      {!showVerification ? (
        <>
          <PageTitle
            variant={"title"}
            text={t("beneficiary.pageTitle")}
            hasSubtitle={true}
            utilClasses={"text-center"}
          />
          <PageTitle
            variant={"sub-title"}
            text={
              type === "mobile"
                ? t("beneficiary.transferToMobileWallets")
                : t("beneficiary.transferToAccounts")
            }
          />
          <Formik
            initialValues={{ accountType: "", name: "", number: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // router.push({ pathname: "/verification", query: { from: "eftn" } });

              // router.push({
              //   pathname: "verification",
              //   query: { showSuccess: "true" },
              // });

              setShowVerification(!showVerification);
              // console.log(usePathname());
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
              <form
                onSubmit={handleSubmit}
                // style={{
                //   marginTop: "3rem",
                // }}
              >
                <Box sx={{ marginBottom: "1.5rem" }}>
                  <DSelect
                    options={mblBankingOptions}
                    handleChange={handleChange}
                    withImage={true}
                    label={t("common.selectAccountType")}
                    placeholder={t("common.placeholderSelectAccountType")}
                    value={values?.accountType}
                    name={"accountType"}
                  />
                  {errors.accountType && touched.accountType && (
                    <ErrorAlert title={errors.accountType} />
                  )}
                </Box>

                <Box sx={{ marginBottom: "1.5rem" }}>
                  <DInputField
                    type="text"
                    name="name"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    label={t("common.fieldName")}
                    placeholder={t("common.placeholderName")}
                  />
                  {errors.name && touched.name && (
                    <ErrorAlert title={errors.name} />
                  )}
                </Box>

                <Box>
                  <DInputField
                    type="number"
                    name="number"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                    label={t("common.fieldNumber")}
                    placeholder={t("common.placeholderNumber")}
                  />
                  {errors.number && touched.number && (
                    <ErrorAlert title={errors.number} />
                  )}
                </Box>

                <DButton
                  // className={className}
                  type={"submit"}
                  variant={"primary-gradient-btn"}
                  takeFullWidth={true}
                  style={{ marginTop: "2.5rem" }}
                  label={t("button.next")}
                />
              </form>
            )}
          </Formik>
        </>
      ) : (
        <VerificationWithOTP
          willShowSuccess={false}
          successMessage={"Submitted,,,"}
          navigateTo={`${beneficiaryManagementDir}`}
        />
      )}
    </ContentContainer>
  );
};

export default AddBeneficiary;
