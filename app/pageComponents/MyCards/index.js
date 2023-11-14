"use client";

import React from "react";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { myCards } from "@/app/Constants";
import { DImage, MainCard, PageTitle } from "@/app/utils/imports";
import { Box, Grid } from "@mui/material";

const MyCards = () => {
  const t = useTranslations("Index");

  return (
    <div className="main-content-container my-card-content-container">
      <PageTitle
        variant={"title"}
        text={t("myCards.pageTitle")}
        hasSubtitle={false}
      />

      <MainCard
        withHorizontalLine={true}
        noBorder={true}
        cardTitle={t("myCards.allCards")}
      >
        <Grid container spacing={"20"}>
          {myCards.map((card, idx) => (
            <Grid item md={6} xxs={12} key={idx}>
              <Box>
                <Link
                  href={{
                    pathname: `/my-cards/${card.id}`,
                    query: { name: "test" },
                  }}
                >
                  <DImage source={card.image.fileUrl.src} alter={card.id} />
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </MainCard>
    </div>
  );
};

export default MyCards;
