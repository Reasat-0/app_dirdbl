"use client";

import { primary } from "@/app/theme/colors";

import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import {
  PageTitle,
  DTypography,
  ContentContainer,
  MainCard,
  SimpleCard,
} from "@/app/utils/imports";

import { actions } from "../../Constants";
import { useTranslations } from "next-intl";

const SingleAccount = ({ langJson, accountData, params }) => {
  const t = useTranslations("Index");

  const accountActions = [
    {
      slug: "last5-transactions",
      title: t("common.last5transactions"),
      url: "/",
    },
    {
      slug: "request-chequebook",
      title: t("common.requestChequeBook"),
      url: "/",
    },
    {
      slug: "request-e-statement",
      title: t("common.requestEStatement"),
      url: "/",
    },
    {
      slug: "temporary-lock",
      title: t("common.temporaryLock"),
      url: "/",
    },
  ];

  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={accountData?.title}
        hasSubtitle={false}
        utilClasses={"text-center"}
      />
      {console.log(accountData)}
      <MainCard
        cardTitle={t("accounts.pageTitle")}
        hasViewAllBtn={false}
        noBorder={true}
        withHorizontalLine={true}
        innerCardStyle={{
          background: primary[50],
          padding: "20px",
        }}
      >
        <Box>
          <Grid container alignItems={"center"}>
            <Grid item xs>
              <DTypography
                variant={"medium2Bolder"}
                textAccent={"dark"}
                text={`${accountData.title}`}
                style={{
                  marginBottom: "24px",
                }}
              />
              <DTypography
                variant={"medium2Normal"}
                textAccent={"dark"}
                text={accountData.accountNumber}
              />
            </Grid>
            <Grid item xs="auto">
              <DTypography
                variant={"largeBolder"}
                textAccent={"gradient"}
                text={`${t("common.unit")} ${accountData.balance}`}
              />
            </Grid>
          </Grid>
        </Box>
      </MainCard>

      <Box>
        {accountActions.map((action, idx) => (
          <Link
            href={{
              pathname: `/accounts/${accountData?.paramId}/${action.slug}`,
              // query: { action: item.action },
            }}
            key={idx}
          >
            <SimpleCard data={action} />
          </Link>
        ))}
      </Box>
    </ContentContainer>
  );
};

export default SingleAccount;
