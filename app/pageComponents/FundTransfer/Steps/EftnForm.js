"use client";

import { Formik } from "formik";
import Link from "next/link";
import React from "react";

import * as Yup from "yup";
import { useRouter } from "next/navigation";

import {
  PageTitle,
  ContentContainer,
  DInputField,
  ErrorAlert,
  AccountInfoCard,
  DButton,
  DAutoComplete,
  DTypography,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Box, Card } from "@mui/material";

const EftnForm = ({
  langJson,
  viaNpsb,
  common,
  button,
  pageData,
  validations,
  stepToggler,
}) => {
  const router = useRouter();
  const t = useTranslations("Index");

  const branches = [
    {
      id: 1,
      title: "Branch 1",
      value: "branch1",
    },
    {
      id: 2,
      title: "Branch 1",
      value: "branch1",
    },
    {
      id: 3,
      title: "Branch 1",
      value: "branch1",
    },
  ];

  const banks = [
    {
      id: 1,
      title: "EBL",
      value: "ebl",
    },
    {
      id: 2,
      title: "DBBL",
      value: "dbbl",
    },
    {
      id: 3,
      title: "SBL",
      value: "sbl",
    },
  ];

  const validationSchema = Yup.object().shape({
    accountNumber: Yup.number().required(t("validations.accountNumber")),
    bankName: Yup.object().nullable().required(t("validations.bankName")),
    branchName: Yup.object().nullable().required(t("validations.branchName")),
    amount: Yup.string().required(t("validations.amount")),
  });

  return (
    <>
      <ContentContainer>
        <PageTitle
          variant={"title"}
          text={
            viaNpsb
              ? t("fundTransfer.eftnToOtherBankAccountNSPB")
              : t("fundTransfer.eftnToOtherBankAccount")
          }
          hasSubtitle={true}
          utilClasses={"text-center"}
          style={{ marginBottom: "48px" }}
        />
        <Formik
          initialValues={{ accountNumber: "", bankName: "", branchName: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // router.push({ pathname: "/verification", query: { from: "eftn" } });
            stepToggler();
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
              //   marginTop: "48px",
              // }}
            >
              <Box
                sx={{
                  marginBottom: "24px",
                }}
              >
                <DInputField
                  type="number"
                  name="accountNumber"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accountNumber}
                  label={t("common.fieldAccNumber")}
                  placeholder={t("common.placeholderAccNumber")}
                />
                {errors.accountNumber && touched.accountNumber && (
                  <ErrorAlert title={errors.accountNumber} />
                )}
              </Box>

              <Box
                sx={{
                  marginBottom: "24px",
                }}
              >
                <DAutoComplete
                  value={values?.bankName}
                  name="bankName"
                  options={banks}
                  handleChange={(event, value) =>
                    setFieldValue("bankName", value)
                  }
                  placeholder={t("common.placeholderBankName")}
                  label={t("common.fieldBankName")}
                />
                {errors.bankName && touched.bankName && (
                  <ErrorAlert title={errors.bankName} />
                )}
              </Box>

              <Box
                sx={{
                  marginBottom: "24px",
                }}
              >
                <DAutoComplete
                  value={values?.branchName}
                  name="branchName"
                  options={[
                    { id: 1, title: "Branch 1" },
                    { id: 2, title: "Branch 2" },
                    { id: 3, title: "Branch 3" },
                    { id: 4, title: "Branch 4" },
                  ]}
                  handleChange={(event, value) =>
                    setFieldValue("branchName", value)
                  }
                  placeholder={t("common.placeholderBranchName")}
                  label={t("common.fieldBranchName")}
                />
                {errors.branchName && touched.branchName && (
                  <ErrorAlert title={errors.branchName} />
                )}
              </Box>

              <Box
                sx={{
                  marginBottom: "24px",
                }}
              >
                <DInputField
                  type="number"
                  name="amount"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  label={t("common.amount")}
                  placeholder={t("common.amount")}
                />
                {errors.amount && touched.amount && (
                  <ErrorAlert title={errors.amount} />
                )}
              </Box>

              {/* <AccountInfoCard
                data={{
                  title: "#$3542353454",
                  subTitle: `${common?.availableBalance} : 1000000 ${common?.unit}`,
                }}
                cardSelection={true}
              /> */}

              <Card
                variant="child-card"
                sx={{
                  textAlign: "center",
                }}
              >
                <DTypography
                  variant={"medium2Bold"}
                  textAccent={"dark"}
                  text={t("common.amount")}
                />
                <DTypography
                  variant={"largeBolder"}
                  textAccent={"gradient"}
                  text={`${t("common.unit")} ${
                    !values?.amount ? "0.00" : `${values?.amount}.00`
                  } `}
                />
              </Card>

              {/* 
              <div className="add-as-beneficiary">
                <CustomCheckBox label={common?.addAsBeneficiary} />
                <CustomCheckBox label={common?.addToFavourite} />
              </div> */}

              <DButton
                type="submit"
                variant={"primary-gradient-btn"}
                takeFullWidth={true}
                style={{ marginTop: "40px" }}
                label={t("button.next")}
              />
            </form>
          )}
        </Formik>
      </ContentContainer>
    </>
  );
};

export default EftnForm;
