"use client";

import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import { billPaymentOrganizations } from "../../Constants";
import { upcommingBills } from "../../Constants";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  DAutoComplete,
  PageTitle,
  SimpleCard,
  ImageCard,
  DTypography,
  IconWrapper,
  MainCard,
  ContentContainer,
} from "@/app/utils/imports";
import { billPaymentDir, upcomingBillDir } from "@/app/utils/moduleDirectories";

const BillPayment = () => {
  const t = useTranslations("Index");
  const router = useRouter();

  const billPaymentOptions = [
    {
      id: 1,
      title: t("billPayment.allOrganizations"),
      subTitle: t("billPayment.allOrganizationsSubTitle"),
    },
    {
      id: 2,
      title: t("billPayment.billPaymentHistory"),
      subTitle: t("billPayment.billPaymentHistorySubTitle"),
    },
  ];

  return (
    <>
      <ContentContainer>
        <PageTitle
          variant={"title"}
          text={t("billPayment.pageTitle")}
          hasSubtitle={false}
          utilClasses={"text-center"}
        />

        <Box
          style={{
            marginBottom: "1.5rem",
          }}
        >
          <DAutoComplete
            name="branch"
            options={billPaymentOrganizations}
            handleChange={(event, value) => alert("Ehhhh....")}
            label={""}
            placeholder={t("common.placeholderOrganizationType")}
          />
          {/* {errors.branch && touched.branch && (
            <ErrorAlert title={errors.branch} />
          )} */}
        </Box>

        <Grid container columnSpacing={20} justifyContent={"start"}>
          {billPaymentOrganizations.map((org, idx) => (
            <Grid
              item
              xxs={6}
              md={3}
              xs
              key={idx}
              sx={{
                marginBottom: {
                  xxs: "1.5rem",
                },
              }}
            >
              <Link
                href={{
                  pathname: `${billPaymentDir}/pay-action`,
                  query: { orgId: org?.id },
                }}
              >
                <IconWrapper variant={"primary"}>{org.image}</IconWrapper>
                <DTypography
                  variant={"smallerBolder"}
                  textAccent={"dark"}
                  text={org.title}
                  style={{ marginTop: ".5rem", textAlign: "center" }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginTop: "2.5rem" }}>
          <MainCard
            cardTitle={t("billPayment.upcomingPayment")}
            hasViewAllBtn={true}
            buttonLabel={t("button.viewAllBtn")}
            buttonNavigation={() => router.push(`${upcomingBillDir}`)}
            noBorder={true}
            innerCardStyle={{
              padding: 0,
            }}
          >
            {upcommingBills.map((item, idx) => (
              <Link
                href={{
                  pathname: "/",
                  // query: { name: "test" },
                }}
                key={idx}
              >
                <ImageCard
                  size={"small"}
                  cardData={item}
                  lastItem={idx === upcommingBills.length - 1}
                />
              </Link>
            ))}
          </MainCard>
        </Box>

        <Box sx={{ marginTop: "2.5rem" }}>
          {billPaymentOptions.map((opt, idx) => (
            <Box key={idx}>
              <SimpleCard data={opt} />
            </Box>
          ))}
        </Box>
      </ContentContainer>
    </>
  );
};

export default BillPayment;
