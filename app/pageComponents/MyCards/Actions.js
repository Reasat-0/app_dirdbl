"use client";

import React, { Fragment } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { myCards } from "../../Constants";
import { Box } from "@mui/material";

import { MainCard, DImage, SimpleCard, PageTitle } from "@/app/utils/imports";

const CardActions = ({ params }) => {
  const t = useTranslations("Index");
  const id = params?.id;

  console.log(params);

  const cardActions = [
    {
      slug: "request-e-statement",
      title: t("common.requestEStatement"),
      url: "/",
    },
    {
      slug: "check-limit",
      title: t("common.checkLimit"),
      url: "/",
    },
    {
      slug: "report-lost-stolen",
      title: t("common.reportLostOrStolen"),
      url: "/",
    },
    {
      slug: "temporary-lock",
      title: t("common.temporaryLock"),
      url: "/",
    },
  ];

  return (
    <>
      <PageTitle
        variant={"title"}
        text={t("myCards.pageTitle")}
        hasSubtitle={false}
      />

      <MainCard
        cardTitle={t("myCards.myCard")}
        buttonNavigation={() => navigateTo(`/my-cards`)}
      >
        <Box>
          <Fragment>
            <DImage
              source={myCards[0].image.fileUrl.src}
              alter={myCards[0].name}
            />
          </Fragment>
        </Box>
      </MainCard>

      {cardActions.map((action, idx) => (
        <Link
          href={{
            pathname: `/my-cards/${id}/${action.slug}`,
            query: { name: "test" },
          }}
          key={idx}
        >
          <SimpleCard data={action} />
        </Link>
      ))}
    </>
  );
};

export default CardActions;
