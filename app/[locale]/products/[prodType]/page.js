"use client";

// import CustomTab from "@/components/Tab";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

// import CustomTab from "@/app/newComponetns/CustomTab";
// import RightArrow from "@/app/newComponetns/Icons/RightArrow";

import {
  PercentageIcon,
  PercentageWithCurve,
  RightArrow,
} from "@/app/utils/iconImports";

import {
  ContentContainer,
  PageTitle,
  ImageCard,
  CustomTab,
  IconCard,
} from "@/app/utils/imports";

import { discountPartners } from "@/app/Constants";

const DiscountPartners = ({ params }) => {
  const t = useTranslations("Index");
  //   const [showContent, setShowContent] = useState(false);

  const typeId = params?.prodType;

  const products = [
    {
      id: 1,
      title: "Bundle Savings",
      subTitle: "It is designed to meet up your business financial needs.",
      slug: "discount",
      icon: <PercentageIcon />,
    },
    {
      id: 2,
      title: "Joma Savings",
      subTitle: "It is designed to meet up your business financial needs.",
      slug: "swipeit",
      icon: <PercentageWithCurve />,
    },
  ];

  //   useEffect(() => setShowContent(true), []);
  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={"Bundle Savings"}
        hasSubtitle={true}
        utilClasses={"text-center"}
      />
      <PageTitle
        variant={"sub-title"}
        text={"Adfds sd fdsfsd dsfd fsdfdfdff "}
      />

      {products.map((product, idx) => (
        <Link
          href={{
            pathname: `/products/${typeId}/${product.id}`,
          }}
          key={idx}
          style={{
            textDecoration: "none",
          }}
        >
          <IconCard
            size={"large"}
            cardData={product}
            navigateIcon={<RightArrow />}
          />
        </Link>
      ))}
    </ContentContainer>
  );
};

export default DiscountPartners;
