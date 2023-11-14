"use client"

import { useTranslations } from 'next-intl'

import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Box, Stack } from "@mui/material";
import fileComplainImg from "@/public/images/complain.svg"

import {PageTitle, ContentContainer, DButton, ErrorAlert, DAutoComplete, DInputField, DTypography} from "@/app/utils/imports"
import Link from 'next/link';
import { home } from '@/app/utils/moduleDirectories';

const FileComplaint = () => {
    const t = useTranslations("Index")
    const [showSuccess, setShowSuccess] = useState(false);

    const initialValues = { complaintSubject: "", description: "" };
  
    const validationSchema = (values) =>
      Yup.object().shape({
        complaintSubject: Yup.object().nullable().required(t("validations.complaintSubject")),
      });
    const handleSubmit = (values, { setSubmitting }) => {
        setShowSuccess(true)
        console.log(values);
    };
    const complainSubjectData = [
        {
          id: 1,
          title: "Compalin 1111",
          value: "complain-1",
        },
        {
          id: 2,
          title: "Compalin 222",
          value: "complain-1",
        },
        {
          id: 3,
          title: "Compalin 3333",
          value: "complain-1",
        },
      ];
    return (
      <ContentContainer>
        {showSuccess && (
            <Box
                sx={{
                    textAlign: 'center'
                }}
            >
                <Box>
                    <img src={fileComplainImg.src} alt="file Complain" />
                </Box>

                <DTypography
                variant={"medium2Normal"}
                textAccent={"light"}
                text={t("fileAComplaint.complaintSuccess")}
                style={{marginBottom: "24px" }}
                />
                
                <Link href={home} >
                    <DButton
                        variant={"primary-gradient-btn"}
                        takeFullWidth={true}
                        style={{ marginTop: "40px" }}
                        label={t("button.backToHome")}
                    />

                </Link>

            </Box>
        )}


        {
            !showSuccess
            &&
            <>
                <PageTitle
                variant={"title"}
                text={t("fileAComplaint.pageTitle")}
                hasSubtitle={true}
                utilClasses={"text-center"}
                />

                <PageTitle
                variant={"sub-title"}
                text={t("fileAComplaint.pageSubTitle")}
                hasSubtitle={false}
                utilClasses={"text-center"}
                />
    
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

                    <Box
                        sx={{
                        marginBottom: "24px",
                        }}
                    >
                    <DAutoComplete
                    value={values?.complaintSubject}
                    name="branchName"
                    options={complainSubjectData}
                    handleChange={(event, value) =>
                        setFieldValue("complaintSubject", value)
                    }
                    placeholder={t("common.placeholderComplaintSubject")}
                    label={t("common.fieldComplaintSubject")}
                    />
                    {errors.complaintSubject && touched.complaintSubject && (
                    <ErrorAlert title={errors.complaintSubject} />
                    )}
                    </Box>

                    <Box
                    sx={{
                    marginBottom: "24px",
                    }}
                >
                    <DInputField
                    type="number"
                    name="description"
                    handleChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    label={t("common.fieldDescription")}
                    placeholder={t("common.placeholderDescription")}
                    multiline={true}
                    rows={5}
                    />
                    {/* {errors.description && touched.description && (
                    <ErrorAlert title={errors.description} />
                    )} */}
                </Box>

                <Stack direction="row" spacing={10} style={{ marginTop: "40px" }}>

                    <DButton
                        type="submit"
                        variant={"primary-gradient-btn"}
                        label={t("button.continue")}
                        style={{padding: '12px 49px'}}
                    />

                    <DButton
                        variant={'no-outline-btn'}
                        label={t("button.btnCancel")}
                        style={{padding: '12px 29px'}}

                    />

                </Stack>


    
                    </form>
                )}
                </Formik>
            
            
            
            </>
        }

          
      </ContentContainer>
    );
}

export default FileComplaint