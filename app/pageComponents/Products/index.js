"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  ContentContainer,
  PageTitle,
  IconCard,
  ImageCard,
  CustomTab,
} from "../../utils/imports";

import { RightArrow } from "@/app/utils/iconImports";

import { useTranslations } from "next-intl";
import { productsType } from "@/app/Constants";

const Products = () => {
  const t = useTranslations("Index");
  const [showContent, setShowContent] = useState(false);
  useEffect(() => setShowContent(true), []);

  const tabData = [
    {
      id: 1,
      tabTitle: "All",
      tabContent: productsType.map((type, idx) => (
        <Link
          href={{
            pathname: `/products/${type.id}`,
          }}
          key={idx}
          style={{
            textDecoration: "none",
          }}
        >
          <IconCard
            size={"large"}
            cardData={type}
            navigateIcon={<RightArrow />}
          />
        </Link>
      )),
    },
    {
      id: 2,
      tabTitle: "Corporate",
      tabContent: "hello...",
    },
    {
      id: 3,
      tabTitle: "Islamic",
      tabContent: "hello...",
    },
    {
      id: 4,
      tabTitle: "Personal",
      tabContent: "hello...",
    },
  ];

  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={t("products.pageTitle")}
        hasSubtitle={true}
        utilClasses={"text-center"}
      />
      <PageTitle
        variant={"sub-title"}
        text={t("products.pageSubTitle")}
        hasSubtitle={true}
        utilClasses={"text-left"}
      />
      {showContent && <CustomTab data={tabData} scrollable={true} />}
    </ContentContainer>
  );
};

export default Products;
