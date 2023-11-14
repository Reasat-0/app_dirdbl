"use client";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ContentContainer,
  DButton,
  DInputField,
  ErrorAlert,
  PageTitle,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";

import { VisibilityIcon } from "@/app/utils/iconImports";
import { useRouter } from "next/navigation";
import { home } from "@/app/utils/moduleDirectories";
import { useDispatch } from "react-redux";
import { setUpProfile } from "@/app/Redux/features/authSlice";

const SetUpProfile = ({ signInVia }) => {
  const t = useTranslations("Index");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    router.push(`${home}?showModal=true`);
    dispatch(
      setUpProfile({
        ...values,
      })
    );
  };

  const validationSchema = (values) =>
    Yup.object().shape({
      userName: Yup.string().required(t("validations.userName")),
      password: Yup.string().required(t("validations.password")),
    });
  return (
    <ContentContainer>
      <>
        <PageTitle
          variant={"title"}
          text={t("auth.setProfile")}
          hasSubtitle={true}
          style={{ textAlign: { xxs: "center", md: "center" } }}
        />
        <PageTitle
          variant={"sub-title"}
          text={t("auth.setProfileSubtitle")}
          hasSubtitle={true}
          style={{ textAlign: { xxs: "center", md: "center" } }}
        />

        <Formik
          initialValues={{ userName: "", password: "" }}
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
                  name="userName"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  label={t("common.fieldUserName")}
                  placeholder={t("common.placeholderUserNamePattern")}
                />

                {errors.userName && touched.userName && (
                  <ErrorAlert title={errors.userName} />
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
              <DButton
                type="submit"
                variant={"primary-gradient-btn"}
                takeFullWidth={true}
                style={{ marginTop: "40px" }}
                label={t("button.btnRegister")}
              />
            </form>
          )}
        </Formik>
      </>
    </ContentContainer>
  );
};

export default SetUpProfile;
