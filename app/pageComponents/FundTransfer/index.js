"use client";

import BankToBankIcon from "@/app/newComponetns/Icons/BankToBankIcon";

import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { Box, Grid } from "@mui/material";

import bkash from "../../../public/images/mobile-banking/bkash.svg";
import rocket from "../../../public/images/mobile-banking/rocket.svg";
import nagad from "../../../public/images/mobile-banking/nagad.svg";
import upay from "../../../public/images/mobile-banking/upay.svg";

// import SimpleCard from "@/newComponents/Cards/SimpleCard";

import {
  DTypography,
  SimpleCard,
  IconWrapper,
  IconImageWrapper,
  PageTitle,
  ContentContainer,
} from "@/app/utils/imports";
import {
  beneficiaryManagementDir,
  favouriteTransfer,
  fundTransferDir,
} from "@/app/utils/moduleDirectories";

const FundTransfer = ({ langParam }) => {
  const t = useTranslations("Index");
  const bankTransferOptions = [
    {
      id: 0,
      title: t("fundTransfer.transferToOwnAccount"),
      image: <BankToBankIcon />,
      slug: "own-account",
    },
    {
      id: 1,
      title: t("fundTransfer.transferToOtherDBLAccount"),
      image: <BankToBankIcon />,
      slug: "other-bank",
    },
    {
      id: 2,
      title: t("fundTransfer.eftnToOtherBankAccount"),
      image: <BankToBankIcon />,
      slug: "eftn-to-other",
    },
    {
      id: 3,
      title: t("fundTransfer.eftnToOtherBankAccountNSPB"),
      image: <BankToBankIcon />,
      slug: "eftn-via-npsb",
    },
  ];

  const mblTransferOptions = [
    {
      id: 0,
      title: t("mblBanking.bkash"),
      image: bkash.src,
      slug: "bkash",
    },
    {
      id: 1,
      title: t("mblBanking.rocket"),
      image: rocket.src,
      slug: "rocket",
    },
    {
      id: 2,
      title: t("mblBanking.nagad"),
      image: nagad.src,
      slug: "nagad",
    },
    {
      id: 3,
      title: t("mblBanking.upay"),
      image: upay.src,
      slug: "upay",
    },
  ];

  return (
    <>
      <PageTitle variant={"title"} text={t("fundTransfer.pageTitle")} />
      <Box>
        <DTypography
          variant={"largeBolder"}
          textAccent={"darker"}
          text={t("fundTransfer.transferFunds")}
        />
        <Grid
          container
          columnSpacing={20}
          justifyContent={"center"}
          sx={{ marginTop: "40px" }}
        >
          {bankTransferOptions.map((item, idx) => (
            <Grid
              item
              xxs={6}
              xs
              key={idx}
              sx={{
                marginBottom: {
                  xxs: "10px",
                },
              }}
            >
              <IconWrapper variant={"primary"}>{item.image}</IconWrapper>
              <Link href={`${fundTransferDir}/${item.slug}`}>
                <DTypography
                  variant={"smallerBolder"}
                  textAccent={"dark"}
                  text={item.title}
                  style={{ marginTop: "8px", textAlign: "center" }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ marginTop: "40px" }}>
        <DTypography
          variant={"largeBolder"}
          textAccent={"darker"}
          text={t("fundTransfer.transferToMobileWallets")}
        />
        <Grid
          container
          // rowSpacing={30}
          columnSpacing={20}
          justifyContent={"center"}
          sx={{ marginTop: "40px" }}
        >
          {mblTransferOptions.map((item, idx) => (
            <Grid
              item
              xxs={6}
              xs
              key={idx}
              sx={{
                marginBottom: {
                  xxs: "10px",
                },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconImageWrapper
                variant={"secondary"}
                source={item.image}
                style={{
                  padding: "25px",
                }}
              />
              <Link href={`${fundTransferDir}/${item.slug}`}>
                <DTypography
                  variant={"smallerBolder"}
                  textAccent={"dark"}
                  text={item.title}
                  style={{ marginTop: "8px", textAlign: "left" }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <ContentContainer>
          <Link
            href={{
              pathname: `${beneficiaryManagementDir}`,
              query: { name: "test" },
            }}
          >
            <SimpleCard data={{ title: t("beneficiary.pageTitle") }} />
          </Link>
          <Link
            href={{
              pathname: `${favouriteTransfer}`,
              query: { name: "test" },
            }}
          >
            <SimpleCard data={{ title: t("favouriteTransfers.pageTitle") }} />
          </Link>
        </ContentContainer>
      </Box>
    </>
  );
};

export default FundTransfer;
