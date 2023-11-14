"use client";

import React from "react";
import Link from "next/link";

import {
  ContentContainer,
  CustomContainer,
  PageTitle,
  IconCard,
} from "../../utils/imports";

import { RightArrow } from "@/app/utils/iconImports";

import { useTranslations } from "next-intl";
import { partnerType } from "@/app/Constants";

const Partners = () => {
  const t = useTranslations("Index");
  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={t("partners.pageTitle")}
        hasSubtitle={true}
        utilClasses={"text-center"}
      />
      <PageTitle
        variant={"sub-title"}
        text={t("partners.pageSubTitle")}
        hasSubtitle={true}
        utilClasses={"text-left"}
      />
      {partnerType.map((partner, idx) => (
        <Link
          href={{
            pathname: `/partners/${partner.slug}`,
          }}
          key={idx}
          style={{
            textDecoration: "none",
          }}
        >
          <IconCard
            size={"large"}
            cardData={partner}
            navigateIcon={<RightArrow />}
          />
        </Link>
      ))}
    </ContentContainer>
  );
};

export default Partners;
