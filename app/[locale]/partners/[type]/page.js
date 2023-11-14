"use client";

// import CustomTab from "@/components/Tab";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

// import CustomTab from "@/app/newComponetns/CustomTab";
// import RightArrow from "@/app/newComponetns/Icons/RightArrow";

import { RightArrow } from "@/app/utils/iconImports";

import {
  ContentContainer,
  PageTitle,
  ImageCard,
  CustomTab,
} from "@/app/utils/imports";

import { discountPartners } from "@/app/Constants";

const DiscountPartners = ({ params }) => {
  const t = useTranslations("Index");
  const [showContent, setShowContent] = useState(false);

  const type = params?.type;

  const tabData = [
    {
      id: 1,
      tabTitle: "All",
      tabContent: discountPartners?.map((partner, idx) => (
        <Fragment key={idx}>
          <Link
            href={`/partners/discount-partners/${partner.id}`}
            style={{ textDecoration: "none" }}
          >
            <ImageCard
              cardData={discountPartners[idx]}
              navigateIcon={<RightArrow />}
              // style={{ padding: "24px" }}
            />
          </Link>
        </Fragment>
      )),
    },

    {
      id: 2,
      tabTitle: "Air Aliance",
      tabContent: discountPartners.map((partner, idx) => (
        <Fragment key={idx}>
          <Link
            href={`/partners/discount-partners/${partner.id}`}
            style={{ textDecoration: "none" }}
          >
            <ImageCard
              cardData={discountPartners[idx]}
              navigateIcon={<RightArrow />}
              // style={{ padding: "24px" }}
            />
          </Link>
        </Fragment>
      )),
    },
    {
      id: 3,
      tabTitle: "Bogo",
      tabContent: discountPartners.map((partner, idx) => (
        <Fragment key={idx}>
          <Link
            href={`/partners/discount-partners/${partner.id}`}
            style={{ textDecoration: "none" }}
          >
            <ImageCard
              cardData={discountPartners[idx]}
              navigateIcon={<RightArrow />}
              // style={{ padding: "24px" }}
            />
          </Link>
        </Fragment>
      )),
    },
    {
      id: 4,
      tabTitle: "Furniture",
      tabContent: discountPartners.map((partner, idx) => (
        <Fragment key={idx}>
          <Link
            href={`/partners/discount-partners/${partner.id}`}
            style={{ textDecoration: "none" }}
          >
            <ImageCard
              cardData={discountPartners[idx]}
              navigateIcon={<RightArrow />}
              // style={{ padding: "24px" }}
            />
          </Link>
        </Fragment>
      )),
    },
  ];

  useEffect(() => setShowContent(true), []);
  return (
    <ContentContainer>
      {console.log(type)}
      <PageTitle
        variant={"title"}
        text={t(`partners.${type}_Partners`)}
        hasSubtitle={true}
        utilClasses={"text-center"}
      />
      <PageTitle
        variant={"sub-title"}
        text={t(`partners.${type}_PartnersSubTitle`)}
      />

      {/* <PageTitle
        variant={"sub-title"}
        text={t(`partners.discountPartnersSubTitle`)}
      /> */}
      {showContent && <CustomTab data={tabData} scrollable={true} />}
    </ContentContainer>
  );
};

export default DiscountPartners;
