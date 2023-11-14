"use client";
import { Formik } from "formik";
import React from "react";

import * as Yup from "yup";

import { useRouter } from "next/navigation";

import {
  PageTitle,
  ContentContainer,
  AccountInfoCard,
  ErrorAlert,
  DSelect,
  DInputField,
  DTypography,
  DButton,
  DAutoComplete,
} from "@/app/utils/imports";
import { Box, Card } from "@mui/material";
import { useTranslations } from "next-intl";

const RegularTransferForm = ({ viaNpsb, stepToggler, toOtherBank }) => {
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

  // const parsed = json_parser(langJson?.locale?.value);
  // const pageData = parsed?.fundTransfer;
  // const button = parsed?.button;
  // const common = parsed?.common;
  // const validations = parsed?.validations;

  const validationSchema = Yup.object().shape({
    accountNumber: Yup.string().required(t("validations.accountNumber")),
    amount: Yup.string().required(t("validations.amount")),
    // branchName: Yup.string().required(t("validations.branchName")),

    branchName: Yup.object().nullable().required(t("validations.branchName")),
  });

  return (
    <>
      <ContentContainer>
        <PageTitle
          variant={"title"}
          text={
            toOtherBank
              ? t("fundTransfer.transferToOtherDBLAccount")
              : t("fundTransfer.transferToOwnAccount")
          }
        />
        <Formik
          initialValues={{ accountNumber: "", amount: "", branchName: "" }}
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
              {/* <AccountInfoCard
                data={{
                  title: "#$3542353454",
                  subTitle: `${t("common?.availableBalance")} : 1000000 ${t(
                    "common?.unit"
                  )}`,
                }}
                style={{ marginBottom: "24px" }}
                cardSelection={true}
              /> */}

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

export default RegularTransferForm;
