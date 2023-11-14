"use client";

import ImageCard from "@/app/newComponetns/Cards/ImageCard";
import React from "react";

import { favouriteTransfers } from "../../Constants";
import MainCard from "@/app/newComponetns/Cards/MainCard";
import ContentContainer from "@/app/newComponetns/ContentContainer";
import Link from "next/link";
import PageTitle from "@/app/newComponetns/PageTitle";
import json_parser from "../../utils/json_parser";
import { useTranslations } from "next-intl";

const UpcomingBills = ({ langJson }) => {
  const t = useTranslations("Index");

  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={t("upcommingBills.pageTitle")}
        hasSubtitle={false}
        utilClasses={"text-center"}
      />
      <MainCard
        cardTitle={t("upcommingBills.pageTitle")}
        hasViewAllBtn={false}
        noBorder={true}
        innerCardStyle={{ padding: 0 }}
      >
        {favouriteTransfers.map((item, idx) => (
          <Link
            href={{
              pathname: "/fund-transfer",
              query: { name: "test" },
            }}
            key={idx}
          >
            <ImageCard
              size={"small"}
              cardData={item}
              lastItem={idx === favouriteTransfers.length - 1}
            />
          </Link>
        ))}
      </MainCard>
    </ContentContainer>
  );
};

export default UpcomingBills;
