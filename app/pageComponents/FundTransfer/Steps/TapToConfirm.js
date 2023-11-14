"use client";

import Link from "next/link";
import React, { useState } from "react";
// import Verification from "./Verification";

import * as Yup from "yup";

import { useRouter } from "next/navigation";

import successImg from "../../../../public/images/success.svg";

import {
  PageTitle,
  DButton,
  DTypography,
  ContentContainer,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Box, Grid } from "@mui/material";

const TapToConfirm = ({
  langJson,
  viaNpsb,
  toOtherBank,
  common,
  button,
  pageData,
  validations,
  stepToggler,
  from,
}) => {
  const router = useRouter();
  const t = useTranslations("Index");
  const [success, setSuccess] = useState(false);

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

  // const validationSchema = Yup.object().shape({
  //   accountNumber: Yup.string().required(t("validations?.accountNumber")),
  //   bankName: Yup.string().required(t("validations?.bankName")),
  //   branchName: Yup.string().required(t("validations?.branchName")),
  // });

  // function useLongPress(callback = () => {}, ms = 300) {
  //   const [startLongPress, setStartLongPress] = useState(false);

  //   useEffect(() => {
  //     let timerId;
  //     if (startLongPress) {
  //       timerId = setTimeout(callback, ms);
  //     } else {
  //       clearTimeout(timerId);
  //     }

  //     return () => {
  //       clearTimeout(timerId);
  //     };
  //   }, [startLongPress]);

  //   const start = useCallback(() => {
  //     setStartLongPress(true);
  //   }, []);
  //   const stop = useCallback(() => {
  //     setStartLongPress(false);
  //   }, []);

  //   return [
  //     startLongPress,
  //     {
  //       onMouseDown: start,
  //       onMouseUp: stop,
  //       onMouseLeave: stop,
  //       onTouchStart: start,
  //       onTouchEnd: stop,
  //     },
  //   ];
  // }

  return (
    <ContentContainer>
      {!success && (
        <PageTitle
          variant={"title"}
          text={
            from !== "eftn"
              ? toOtherBank
                ? t("fundTransfer.transferToOtherDBLAccount")
                : t("fundTransfer.transferToOwnAccount")
              : viaNpsb
              ? t("fundTransfer.eftnToOtherBankAccountNSPB")
              : t("fundTransfer.eftnToOtherBankAccount")
          }
        />
      )}

      <Box>
        {success && (
          <Box
            sx={{
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            <Box sx={{ marginBottom: "16px" }}>
              <img src={successImg.src} alt="success" />
            </Box>
            <Box>
              <DTypography
                variant={"medium2Regular"}
                textAccent={"dark"}
                text={t("common.transferSuccess")}
              />
            </Box>
          </Box>
        )}

        {/* Text row.... From */}
        <Grid container sx={{ marginBottom: "16px" }}>
          <Grid item className="col-md-auto">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={t("common.amount")}
            />
          </Grid>
          <Grid item className="col text-end">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"gradient"}
              text={`${t("common.unit")} 1000`}
            />
          </Grid>
        </Grid>

        <hr />

        {/* Text row.... From */}
        <Grid container sx={{ marginBottom: "16px" }}>
          <Grid item className="col-md-auto">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={t("common.from")}
            />
          </Grid>
          <Grid item className="col text-end">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={"Boman Irani"}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <DTypography
              variant={"medium2Regular"}
              textAccent={"dark"}
              text={t("common.savingsAccount")}
            />
          </Grid>
          <Grid item>
            <DTypography
              variant={"medium2Regular"}
              textAccent={"dark"}
              text={"2314354354"}
            />
          </Grid>
        </Grid>

        <hr />

        {/* Text row.... To */}
        <Grid container sx={{ marginBottom: "16px" }}>
          <Grid item xxs>
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={t("common.to")}
            />
          </Grid>
          <Grid item xxs="auto">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={"Boman Irani"}
            />
          </Grid>
        </Grid>

        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <DTypography
              variant={"medium2Regular"}
              textAccent={"dark"}
              text={t("common.savingsAccount")}
            />
          </Grid>
          <Grid item>
            <DTypography
              variant={"medium2Regular"}
              textAccent={"dark"}
              text={"2314354354"}
            />
          </Grid>
        </Grid>

        <hr />

        {/* Text row.... Bank details */}
        <Grid container sx={{ marginBottom: "16px" }}>
          <Grid item className="col-md-auto">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={t("common.bankDetails")}
            />
          </Grid>
          <Grid item className="col text-end">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={"Dhaka Bank"}
              style={{
                marginBottom: "16px",
              }}
            />
            <DTypography
              variant={"medium2Regular"}
              textAccent={"dark"}
              text={"2314354354"}
            />
          </Grid>
        </Grid>

        <hr />

        {/* Text row.... Bank details */}
        <Grid container sx={{ marginBottom: "16px" }}>
          <Grid item className="col-md-auto">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={t("common.date")}
            />
          </Grid>
          <Grid item className="col text-end">
            <DTypography
              variant={"medium2Bold"}
              textAccent={"dark"}
              text={"10 Nov 2022"}
              style={{
                marginBottom: "16px",
              }}
            />
            <DTypography
              variant={"medium2Regular"}
              textAccent={"dark"}
              text={"12:48 P.M"}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xxs={12}>
            {/* <div className="taphold-progress-bar"></div> */}

            {success ? (
              <Link href={"/"}>
                <DButton
                  variant={"primary-gradient-btn"}
                  takeFullWidth={true}
                  style={{ marginTop: "40px" }}
                  label={t("button.backToHome")}
                />
              </Link>
            ) : (
              <DButton
                variant={"primary-gradient-btn"}
                takeFullWidth={true}
                style={{ marginTop: "40px" }}
                label={t("button.tapToHold")}
                onClick={() => setSuccess(true)}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </ContentContainer>
  );
};

export default TapToConfirm;
