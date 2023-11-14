"use client";

import React, { Fragment } from "react";
import { useLocale, useTranslations } from "next-intl";

import { ContentContainer, DTypography, PageTitle } from "@/app/utils/imports";
import { Card, Grid } from "@mui/material";
import { RightArrow } from "@/app/utils/iconImports";
import Link from "next/link";
import { settingsDir } from "@/app/utils/moduleDirectories";

const Settings = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const settingsOption = [
    {
      id: 0,
      title: t("settings.pageTitle"),
      value: locale === "en" ? t("language.en") : t("language.bn"),
      query: "language",
    },
    {
      id: 1,
      title: t("settings.touchId"),
      value: locale === "en" ? t("settings.enabled") : t("settings.disabled"),
      query: "touch",
    },
    {
      id: 1,
      title: t("settings.fingerPrint"),
      value: locale === "en" ? t("settings.enabled") : t("settings.disabled"),
      query: "fingerprint",
    },
  ];
  return (
    <ContentContainer width="670px">
      <PageTitle variant="title" text={t("settings.pageTitle")} />

      <Card variant="child-card">
        <DTypography
          variant={"medium2Bolder"}
          textAccent={"darker"}
          text={t("settings.allSettings")}
        />

        {settingsOption.map((item, idx) => (
          <Fragment key={idx}>
            <hr />

            <Grid container>
              <Grid item xxs>
                <Link
                  href={{
                    pathname: `${settingsDir}/${item.query}`,
                    query: {
                      settingsOption: item.query,
                    },
                  }}
                >
                  <DTypography
                    variant={"medium2Bold"}
                    textAccent={"darker"}
                    text={item.title}
                  />
                  <DTypography
                    variant={"medium2Regular"}
                    textAccent={"light"}
                    text={item.value}
                    style={{
                      marginTop: "12px",
                    }}
                  />
                </Link>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RightArrow />
              </Grid>
            </Grid>
          </Fragment>
        ))}
      </Card>
    </ContentContainer>
  );
};

export default Settings;
