"use client";

import React from "react";
import { DTypography } from "@/app/utils/imports";
import { Box } from "@mui/material";
import { DImage } from "@/app/utils/imports";
import { PercentageIcon } from "@/app/utils/iconImports";
import PercentageCurveImg from "@/public/images/PercentageCurve.svg";
import colorPalette, { primary, secondary } from "@/app/theme/colors";

const OfferPromoCard = ({ item, imageSmall }) => {
  const hasImg = item?.fileObject?.fileName || item?.fileObject !== null;
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          padding: imageSmall || !hasImg ? "4.375rem 3.75rem" : "",
          background: hasImg ? "white" : "#d4d4d430",
          height: "250px",
        }}
      >
        <DImage
          source={
            hasImg
              ? `${process.env.NEXT_PUBLIC_FILE_FETCH_URL}?name=${item?.fileObject?.fileName}`
              : PercentageCurveImg.src
          }
          alter={item?.title}
          width={"100%"}
          height={"100%"}
          imageSmall={imageSmall}
        />
      </Box>

      <Box
        sx={{
          padding: "1.5rem 0",
        }}
      >
        <DTypography
          variant={"medium2Bolder"}
          text={item.title}
          style={{ marginBottom: ".75rem" }}
        />

        <DTypography
          variant={"smallNormal"}
          text={item.shortDescription}
          style={{ marginBottom: ".75rem" }}
        />
      </Box>
    </>
  );
};

export default OfferPromoCard;
