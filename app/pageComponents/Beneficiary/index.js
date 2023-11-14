"use client";
// import BeneficiaryCard from "@/newComponents/Cards/BeneficiaryCard";

import BeneficiaryCard from "@/app/newComponetns/Cards/BeneficiaryCard";
import AddIconWithNoBg from "@/app/newComponetns/Icons/AddIconWithNoBg";
import PageTitle from "@/app/newComponetns/PageTitle";
import DButton from "@/app/newComponetns/DButton";
import DTypography from "@/app/newComponetns/DTypography/indedx";
import json_parser from "../../utils/json_parser";
import { Card, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { beneficiaryManagementDir } from "@/app/utils/moduleDirectories";

const Beneficiary = () => {
  const t = useTranslations("Index");
  const accountsBeneficiary = [
    {
      id: 1,
      name: "Cameron Wiliamson",
      accountNumber: "334234234234",
      transferType: "EFTN To Other Bank",
    },
    {
      id: 2,
      name: "Cameron Wiliamson",
      accountNumber: "334234234234",
      transferType: "EFTN To Other Bank",
    },
  ];

  const mblBankingBeneficiary = [
    {
      id: 1,
      name: "Cameron Wiliamson",
      transferType: "Bkash",
    },
    {
      id: 2,
      name: "Cameron Wiliamson",
      transferType: "Nagad",
    },
  ];

  return (
    <>
      <PageTitle variant={"title"} text={t("beneficiary.pageTitle")} />

      <Card
        style={{
          marginBottom: "40px",
        }}
      >
        <Grid
          container
          sx={{
            marginBottom: "24px",
            justifyContent: { xxs: "center", md: "space-between" },
          }}
        >
          <Grid item xs={12} md={6}>
            <DTypography
              variant={"mediumBolder"}
              textAccent={"darker"}
              text={t("beneficiary.transferToAccounts")}
              style={{
                textAlign: {
                  xxs: "center",
                  md: "left",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Link
              href={{
                pathname: `${beneficiaryManagementDir}/add`,
                query: { type: "account" },
              }}
              style={{ textAlign: "right" }}
            >
              <DButton
                withStartIcon={true}
                iconOnLeft={<AddIconWithNoBg />}
                variant="primary-gradient-btn"
                label={t("button.addBeneficiary")}
                style={{
                  padding: "9px 17px",
                  margin: {
                    md: "0 0 0 auto",
                    xxs: "12px auto",
                  },
                }}
              />
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          {accountsBeneficiary.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <BeneficiaryCard
                cardData={item}
                deleteHandler={() => {
                  alert("delete", item.id);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>

      <Card>
        <Grid
          container
          // sx={{ marginBottom: "24px" }}
          sx={{
            marginBottom: "24px",
            justifyContent: { xxs: "center", md: "space-between" },
          }}
        >
          <Grid item xs={12} md={6}>
            <DTypography
              variant={"mediumBolder"}
              textAccent={"darker"}
              text={t("beneficiary.transferToAccounts")}
              style={{
                textAlign: {
                  xxs: "center",
                  md: "left",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Link
              href={{
                pathname: `${beneficiaryManagementDir}/add`,
                query: { type: "mobile" },
              }}
              style={{ textAlign: "right" }}
            >
              <DButton
                withStartIcon={true}
                iconOnLeft={<AddIconWithNoBg />}
                variant="primary-gradient-btn"
                label={t("button.addBeneficiary")}
                style={{
                  padding: "9px 17px",
                  margin: {
                    md: "0 0 0 auto",
                    xxs: "12px auto",
                  },
                }}
              />
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          {mblBankingBeneficiary.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <BeneficiaryCard
                cardData={item}
                deleteHandler={() => {
                  alert("delete", item.id);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default Beneficiary;
