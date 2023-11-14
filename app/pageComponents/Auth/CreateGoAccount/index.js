"use client";

import React, { useState } from "react";

import Link from "next/link";

import { RightArrow, Account } from "@/app/utils/iconImports";

import { ContentContainer, IconCard, PageTitle } from "@/app/utils/imports";
import { useTranslations } from "next-intl";

const CreateGoAccount = () => {
  const t = useTranslations("Index");

  const accountVia = [
    {
      title: t("auth.haveADBLAcc"),
      subTitle: t("auth.customer"),
      icon: <Account />,
      signInVia: "account",
    },
    {
      title: t("auth.haveADBLCard"),
      subTitle: t("auth.customer"),
      icon: <Account />,
      signInVia: "card",
    },
  ];

  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={t("auth.createNewAcc")}
        hasSubtitle={true}
        style={{ textAlign: { xxs: "center", md: "center" } }}
      />
      <PageTitle
        variant={"sub-title"}
        text={t("auth.justNeedToVerify")}
        hasSubtitle={true}
        style={{ textAlign: { xxs: "center", md: "center" } }}
      />
      {accountVia.map((opt, idx) => (
        <Link
          href={{
            pathname: `/sign-up/create/${opt.signInVia}`,
          }}
          key={idx}
          replace
        >
          <IconCard
            cardData={opt}
            navigateIcon={<RightArrow />}
            size={"large"}
          />
        </Link>
      ))}
    </ContentContainer>
  );
};

export default CreateGoAccount;
