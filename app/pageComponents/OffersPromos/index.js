"use client";

import React from "react";

import { PageTitle, DTypography } from "@/app/utils/imports";

import { useTranslations } from "next-intl";
import { Box } from "@mui/material";

import { OfferPromoSlider } from "@/app/utils/imports";
// import { GetAllOfferPromos } from "@/app/requests/offerPromos";

import { offersPromos } from "@/app/Constants";
// import makeApiCall from "@/app/utils/makeApiCall";

const OffersPromos = ({ data }) => {
  const t = useTranslations("Index");

  const allOffers = data?.filter((d) => d.type.toLowerCase() === "offer");
  const allPromos = data?.filter((d) => d.type.toLowerCase() === "promo");

  return (
    <>
      <PageTitle variant={"title"} text={t("offersPromos.pageTitle")} />
      <Box>
        <DTypography
          variant={"largeBolder"}
          text={t("offersPromos.offersTitle")}
          style={{ marginBottom: "24px" }}
        />
        <OfferPromoSlider data={allOffers} imageSmall={false} />
      </Box>

      <Box>
        <DTypography
          variant={"largeBolder"}
          text={t("offersPromos.promosTitle")}
          style={{ marginBottom: "24px" }}
        />
        <OfferPromoSlider data={allPromos} imageSmall={true} />
      </Box>
    </>
  );
};

export default OffersPromos;
