"use client";

import React from "react";

import { favouriteTransfers } from "../../Constants";

import Link from "next/link";

import {
  PageTitle,
  MainCard,
  ContentContainer,
  ImageCard,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";

const FavouriteTransfers = () => {
  const t = useTranslations("Index");
  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        text={t("favouriteTransfers.pageTitle")}
        hasSubtitle={false}
        utilClasses={"text-center"}
      />
      <MainCard
        cardTitle={t("favouriteTransfers.pageTitle")}
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

export default FavouriteTransfers;
