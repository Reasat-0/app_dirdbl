"use client";

import React, { useState } from "react";

import { billPaymentOrganizations } from "../../Constants";
import { upcommingBills } from "../../Constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";

import { Box } from "@mui/material";

import { Formik } from "formik";

import {
  ContentContainer,
  PageTitle,
  VerificationWithOTP,
  DButton,
  ErrorAlert,
  DInputField,
  ImageCard,
} from "@/app/utils/imports";

import { RightArrow } from "@/app/utils/iconImports";
import { useTranslations } from "next-intl";

const PayAction = ({ langJson }) => {
  const t = useTranslations("Index");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const id = searchParams.get("orgId");
  const showPaymentForm = searchParams.get("showPaymentForm");

  const [showVerification, setShowVerification] = useState(false);

  //   lang things

  const initialValues = { meterNo: "", ref: "", contactNo: "" };

  const validationSchema = () =>
    Yup.object().shape({
      meterNo: Yup.string().required(t("validations.general")),
      ref: Yup.string().required(t("validations.general")),
      contactNo: Yup.string().required(t("validations.general")),
      //   ref: Yup.object().nullable().required(validationsLocale?.general),
      //   contactNo: Yup.object().nullable().required(validationsLocale?.general),
    });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setShowVerification(true);
    // router.push("/verification");
  };

  return (
    <ContentContainer>
      {!showPaymentForm ? (
        <>
          <PageTitle
            variant={"title"}
            text={`${
              billPaymentOrganizations.find(
                (x) => parseInt(x.id) === parseInt(id)
              ).title
            } ${t("billPayment.pageTitle")}`}
            hasSubtitle={false}
            utilClasses={"text-center"}
          />

          <Box>
            {upcommingBills.map((item, idx) => (
              <Box key={idx}>
                <ImageCard
                  cardData={item}
                  navigateIcon={<RightArrow />}
                  onNavigation={() =>
                    router.push(`${pathName}?showPaymentForm=true`)
                  }
                />
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <>
          {showVerification ? (
            <VerificationWithOTP />
          ) : (
            <Box>
              <PageTitle
                variant={"title"}
                text={`${t("billPayment.pageTitle")}`}
                hasSubtitle={false}
                utilClasses={"text-center"}
              />

              <ImageCard cardData={upcommingBills[0]} />
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
                      marginTop: "1.5rem",
                    }}
                  >
                    <Box style={{ marginBottom: "1.5rem" }}>
                      <DInputField
                        type="text"
                        label={"Meter No."}
                        onBlur={handleBlur}
                        value={values.meterNo}
                        handleChange={handleChange}
                        name="meterNo"
                        placeholder={"Enter Meter No."}
                      />
                      {errors.meterNo && touched.meterNo && (
                        <ErrorAlert title={errors.meterNo} />
                      )}
                    </Box>

                    <Box style={{ marginBottom: "1.5rem" }}>
                      <DInputField
                        type="text"
                        label={"Ref. Name"}
                        onBlur={handleBlur}
                        value={values.ref}
                        handleChange={handleChange}
                        name="ref"
                        placeholder={"Enter Ref. Name"}
                      />
                      {errors.ref && touched.ref && (
                        <ErrorAlert title={errors.ref} />
                      )}
                    </Box>

                    <Box>
                      <DInputField
                        type="text"
                        label={"Contact"}
                        onBlur={handleBlur}
                        value={values.contactNo}
                        handleChange={handleChange}
                        name="contactNo"
                        placeholder={"Please provide contact no"}
                      />
                      {errors.contactNo && touched.contactNo && (
                        <ErrorAlert title={errors.contactNo} />
                      )}
                    </Box>

                    <DButton
                      type="submit"
                      variant={"primary-gradient-btn"}
                      takeFullWidth={true}
                      style={{ marginTop: "2.5rem" }}
                      label={t("button.proceedToPay")}
                    />
                  </form>
                )}
              </Formik>
            </Box>
          )}
        </>
      )}
    </ContentContainer>
  );
};

export default PayAction;
