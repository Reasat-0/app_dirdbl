"use client";

import React, { useState, useTransition } from "react";
import { Card } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next-intl/client";

import {
  ContentContainer,
  DRadioBtn,
  DTypography,
  PageTitle,
} from "@/app/utils/imports";

const SettingsOption = ({ option }) => {
  const t = useTranslations("Index");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const pathname = usePathname();

  const [lang, setLang] = useState(locale);

  const langRadioData = [
    {
      id: 0,
      label: t("language.en"),
      value: "en",
    },
    {
      id: 0,
      label: t("language.bn"),
      value: "bn",
    },
  ];

  const enableDisableOption = [
    {
      id: 0,
      label: t("settings.enabled"),
      value: "en",
    },
    {
      id: 0,
      label: t("settings.disabled"),
      value: "bn",
    },
  ];

  // const handleLocale = () =>
  //   startTransition(() => {
  //     router.replace(`/${e.target.value}${pathname}`);
  //   });
  return (
    <ContentContainer>
      <PageTitle variant={"title"} text={t("settings.pageTitle")} />
      <Card variant="child-card">
        {option === "language" && (
          <>
            <DTypography
              variant={"medium2Bold"}
              text={t("settings.languageOptions")}
              textAccent={"dark"}
            />

            <DRadioBtn
              radioOptions={langRadioData}
              value={locale}
              onChange={(e) => {
                // setLang(e.target.value);
                startTransition(() => {
                  router.replace(`/${e.target.value}${pathname}`);
                });
              }}
            />
          </>
        )}

        {option === "touch" && (
          <>
            <DTypography
              variant={"medium2Bold"}
              text={t("settings.touchId")}
              textAccent={"dark"}
            />

            <DRadioBtn
              radioOptions={enableDisableOption}
              value={locale}
              onChange={(e) => {
                // setLang(e.target.value);
                startTransition(() => {
                  router.replace(`/${e.target.value}${pathname}`);
                });
              }}
            />
          </>
        )}

        {option === "fingerprint" && (
          <>
            <DTypography
              variant={"medium2Bold"}
              text={t("settings.fingerPrint")}
              textAccent={"dark"}
            />

            <DRadioBtn
              radioOptions={enableDisableOption}
              value={locale}
              onChange={(e) => {
                // setLang(e.target.value);
                startTransition(() => {
                  router.replace(`/${e.target.value}${pathname}`);
                });
              }}
            />
          </>
        )}
      </Card>
    </ContentContainer>
  );
};

export default SettingsOption;
