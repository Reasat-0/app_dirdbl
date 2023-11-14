import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

import * as Yup from "yup";

import { favouriteTransfers } from "../../../Constants";

import { useTranslations } from "next-intl";

import {
  DButton,
  PageTitle,
  MainCard,
  ImageCard,
  DRadioBtn,
  ErrorAlert,
  ContentContainer,
} from "@/app/utils/imports";
import { Box, Grid } from "@mui/material";

const TransferTypeSelection = ({
  stepToggler,
  button,
  pageData,
  validations,
  favouriteTransferLang,
  beneficiaryPageLang,
  viaNpsb,
}) => {
  const router = useRouter();

  const checkBoxOptions = [
    {
      id: 1,
      title: "One Time Transfer",
      subTitle: "Transfer Funds",
      value: "one_time_transfer",
    },
    {
      id: 2,
      title: "Transfer To Beneficiary",
      subTitle: "Transfer Funds",
      value: "as_beneficiary",
    },
  ];

  const t = useTranslations("Index");
  const [showOneTimeTransfer, setShowOneTimeTransfer] = useState(null);

  const handleSubmit = (values) => {
    stepToggler();
  };
  const validationSchema = Yup.object().shape({
    transferType: Yup.string().required(t("validations.transferTypeSelection")),
  });

  return (
    <>
      <PageTitle
        variant={"title"}
        text={
          viaNpsb
            ? t("fundTransfer.eftnToOtherBankAccountNSPB")
            : t("fundTransfer.eftnToOtherBankAccount")
        }
      />
      <Formik
        initialValues={{ transferType: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          // router.push({ pathname: "/verification", query: { from: "eftn" } });
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
          <form onSubmit={handleSubmit}>
            <Box>
              <DRadioBtn
                name="transferType"
                value={values?.transferType}
                // checked={values.selection === item.value}
                onChange={(e) => {
                  setFieldValue("transferType", e.target.value);
                  setShowOneTimeTransfer(e.target.value);
                }}
                // onChange={() => setFieldValue("selection", item.value)}
                radioOptions={checkBoxOptions}
                variant={"card-radio"}
              />
              {errors.transferType && touched.transferType && (
                <ErrorAlert
                  title={errors.transferType}
                  alignTextHorizontal="text-center"
                  style={{
                    marginTop: ".3125rem",
                  }}
                />
              )}

              {values?.transferType === "as_beneficiary" && (
                <Box sx={{ marginTop: "40px" }}>
                  <Grid container spacing={10}>
                    <Grid item md={6}>
                      {/* Beneficiary Transfers */}
                      <MainCard
                        cardTitle={t("beneficiary.pageTitle")}
                        noBorder={true}
                      >
                        {favouriteTransfers.map((bill, idx) => (
                          <Fragment key={idx}>
                            <ImageCard
                              size={"small"}
                              cardData={bill}
                              key={idx}
                            />
                          </Fragment>
                        ))}
                      </MainCard>
                    </Grid>
                    <Grid item md={6}>
                      {/* Favorite Transfers */}
                      <MainCard
                        cardTitle={t("favouriteTransfers.pageTitle")}
                        noBorder={true}
                      >
                        {favouriteTransfers.map((bill, idx) => (
                          <Fragment key={idx}>
                            <ImageCard
                              size={"small"}
                              cardData={bill}
                              key={idx}
                            />
                          </Fragment>
                        ))}
                      </MainCard>
                    </Grid>
                    {/* <div className="row">
                    <div className="col-sm-12 col-md-6">
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <MainCard
                        cardTitle={t("favouriteTransfers.pageTitle")}
                        noBorder={true}
                      >
                        {favouriteTransfers.map((bill, idx) => (
                          <Fragment key={idx}>
                            <ImageCard cardData={bill} key={idx} />
                          </Fragment>
                        ))}
                      </MainCard>
                    </div>
                  </div> */}
                  </Grid>
                </Box>
              )}

              {showOneTimeTransfer === false && console.log("---------")}

              <Grid container justifyContent={"center"}>
                <Grid item xxs={9} lg={6}>
                  <DButton
                    type={"submit"}
                    variant={"primary-gradient-btn"}
                    takeFullWidth={true}
                    style={{ marginTop: "40px" }}
                    label={t("button.next")}
                  />
                </Grid>
              </Grid>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default TransferTypeSelection;
