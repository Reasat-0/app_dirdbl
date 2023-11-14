"use client";

import React from "react";
import {
  ContentContainer,
  PageTitle,
  DButton,
  IconCard,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import Link from "next/link";

import {
  ActiveLocation,
  InactiveLocation,
  RightArrow,
} from "@/app/utils/iconImports";
import { branchAtmLocationDir } from "@/app/utils/moduleDirectories";

const DblContact = () => {
  const t = useTranslations("Index");

  const data = [
    {
      title: t("branchAtmLocations.branchesTitle"),
      subTitle: t("branchAtmLocations.branchSubTitle"),
      icon: <ActiveLocation />,
    },
    {
      title: t("branchAtmLocations.atmsTitle"),
      subTitle: t("branchAtmLocations.atmsSubTitle"),
      icon: <InactiveLocation />,
    },
    {
      title: t("branchAtmLocations.atmsTitle"),
      subTitle: t("branchAtmLocations.atmsSubTitle"),
      icon: <InactiveLocation />,
    },
  ];
  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={t("contact.pageTitle")}
        hasSubtitle={true}
        utilClasses={"text-center"}
      />

      <PageTitle
        variant={"sub-title"}
        text={t("contact.pageSubTitle")}
        hasSubtitle={false}
        utilClasses={"text-center"}
      />

      {data.map((item, idx) => (
        <Link
          href={{
            pathname: `${branchAtmLocationDir}/branches-atm`,
            query: { type: idx === 0 ? "branches" : "atm" },
          }}
          passHref
          className="next-link"
          key={idx}
        >
          <IconCard
            size="large"
            cardData={item}
            navigateIcon={<RightArrow />}
          />
        </Link>
      ))}
    </ContentContainer>
  );
};

export default DblContact;
