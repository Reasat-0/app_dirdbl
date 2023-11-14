"use client";

import React from "react";
import Link from "next/link";

import { Formik } from "formik";
import * as Yup from "yup";
import SignInImage from "../../../public/images/auth/signIn.png";

import { logIn, logOut } from "@/app/Redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  DButton,
  DTypography,
  PageTitle,
  AuthFooter,
  DInputField,
  ErrorAlert,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Box, Grid, Stack } from "@mui/material";
import { VisibilityIcon } from "@/app/utils/iconImports";
import { useRouter } from "next/navigation";
import {
  branchAtmLocationDir,
  home,
  partnersDir,
  productsDir,
} from "@/app/utils/moduleDirectories";

const SignIn = ({ langParam }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const t = useTranslations("Index");
  const footerMenu = [
    {
      id: 0,
      title: t("auth.authFooterProduct"),
      url: productsDir,
    },
    {
      id: 1,
      title: t("auth.authFooterPartner"),
      url: partnersDir,
    },
    {
      id: 2,
      title: t("auth.authFooterBranchAtmLocations"),
      url: branchAtmLocationDir,
    },
    {
      id: 3,
      title: t("auth.authFooterHowToRegister"),
    },
    {
      id: 4,
      title: t("auth.authContacts"),
    },
    {
      id: 5,
      title: t("auth.authFaq"),
      url: "/faq",
    },
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      logIn({
        ...values,
      })
    );

    router.push(home);
    // setShowVerification(true);
  };

  const validationSchema = (values) =>
    Yup.object().shape({
      phoneNumber: Yup.string().required(t("validations.phoneNumber")),
      password: Yup.string().nullable().required(t("validations.password")),
    });

  return (
    <>
      <Grid
        container
        justifyContent={{ sm: "center", md: "flex-start" }}
        alignItems={"center"}
      >
        <Grid item md={6}>
          <PageTitle
            variant={"title"}
            text={t("auth.welcomeMsg")}
            hasSubtitle={true}
            style={{ textAlign: { xxs: "center", md: "left" } }}
          />
          <PageTitle
            variant={"sub-title"}
            text={t("auth.loginToContinue")}
            hasSubtitle={true}
            style={{ textAlign: { xxs: "center", md: "left" } }}
          />

          <Formik
            initialValues={{ phoneNumber: "", password: "" }}
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
                    name="phoneNumber"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    label={t("common.fieldPhoneNumber")}
                    placeholder={t("common.placeholderPhoneNumber")}
                  />

                  {errors.phoneNumber && touched.phoneNumber && (
                    <ErrorAlert title={errors.phoneNumber} />
                  )}
                </Box>

                <Box style={{ marginBottom: "24px" }}>
                  <DInputField
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    label={t("common.fieldPassword")}
                    placeholder={t("common.placeholderPassword")}
                    handleIconClick={() => alert("Hola..")}
                    icon={<VisibilityIcon />}
                  />

                  {errors.password && touched.password && (
                    <ErrorAlert title={errors.password} />
                  )}
                </Box>
                <Box className="text-right">
                  <Link href="/forget-pass">
                    <DTypography
                      textAccent={"gradient"}
                      variant={"smallBolder"}
                      text={t("button.forgetPassword")}
                      style={{ textAlign: "right", marginBottom: "40px" }}
                    />
                  </Link>
                </Box>

                <Stack
                  direction={"row"}
                  spacing={"20"}
                  justifyContent={{ xxs: "center", md: "flex-end" }}
                >
                  <DTypography
                    textAccent={"normal"}
                    variant={"mediumBolder"}
                    text={t("auth.dontHaveAccount")}
                    style={{ marginRight: "10px", textAlign: "right" }}
                  />
                  <Link href={"sign-up"}>
                    <DTypography
                      textAccent={"gradient"}
                      variant={"mediumBolder"}
                      text={t("button.btnsignUp")}
                      style={{ textAlign: "right" }}
                    />
                  </Link>
                </Stack>

                <DButton
                  type="submit"
                  variant={"primary-gradient-btn"}
                  takeFullWidth={true}
                  style={{ marginTop: "40px" }}
                  label={t("button.btnLogin")}
                />
              </form>
            )}
          </Formik>
        </Grid>
        <Grid
          item
          md={6}
          // cmd={5}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 10px",
            display: {
              xxs: "none",
              md: "flex",
            },
          }}
        >
          <img
            style={{ width: "100%", maxWidth: "100%" }}
            src={SignInImage.src}
            alt="Picture of the author"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} style={{ marginTop: "145px" }}>
        <Grid item md={12}>
          <AuthFooter footerData={footerMenu} langParam={langParam} />
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
