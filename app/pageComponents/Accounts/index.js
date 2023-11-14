"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";

import { accounts } from "../../Constants";
import { RightArrow } from "@/app/utils/iconImports";
import {
  IconCard,
  ContentContainer,
  PageTitle,
  CustomTab,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { accountsDir } from "@/app/utils/moduleDirectories";
const Accounts = ({ accountData, langParam }) => {
  const t = useTranslations("Index");
  const [showContent, setShowContent] = useState(true);
  const tabData = [
    {
      id: 1,
      tabTitle: "Accounts",
      tabContent: accounts?.map((acc, idx) => (
        <Link
          href={`${accountsDir}/${acc.id}`}
          style={{ textDecoration: "none" }}
          key={idx}
        >
          <IconCard
            cardData={{ ...acc, subTitle: acc.accountNumber }}
            includeAmount={true}
            navigateIcon={<RightArrow />}
            size={"large"}
          />
        </Link>
      )),
    },

    {
      id: 2,
      tabTitle: "Create New",
      tabContent: accounts?.map((partner, idx) => (
        <Link
          href={`/partners/discount-partners/${partner.id}`}
          style={{ textDecoration: "none" }}
          key={idx}
        >
          <IconCard
            cardData={partner}
            navigateIcon={<RightArrow />}
            // style={{ padding: "24px" }}
          />
        </Link>
      )),
    },
  ];
  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={t("accounts.pageTitle")}
        utilClasses={"text-center"}
      />

      {/* {accounts.map((item, idx) => (
        <Link href={`/accounts/${item.id}`} key={idx}>
          <IconCard
            cardData={{
              ...item,
              title: item.title,
              subTitle: item.accountNumber,
            }}
            navigateIcon={<RightArrow />}
            includeAmount={true}
            commonLocale={commonLocale}
            cardStyle={{
              padding: "24px",
            }}
          />
        </Link>
      ))} */}

      {showContent && <CustomTab data={tabData} scrollable={false} />}
    </ContentContainer>
  );
};

export default Accounts;
