"use client";

import IconImageWrapper from "@/app/newComponetns/IconImageWrapper";

import React from "react";
import DTypography from "../../DTypography/indedx";
import { Card, Grid } from "@mui/material";

const ImageCard = ({
  cardData,
  navigateIcon,
  style,
  lastItem,
  onNavigation,
  size,
}) => {
  return (
    <Card
      variant="child-card"
      sx={{
        marginBottom: lastItem ? "0" : "24px",
        padding: size === "small" ? "12px" : "24px",
        ...style,
      }}
      onClick={onNavigation || null}
    >
      <Grid container alignItems={"center"} columnSpacing={20}>
        <Grid item xxs="auto">
          <IconImageWrapper
            source={cardData?.imgSrc}
            alt={cardData?.title}
            smallContent={true}
          />
        </Grid>
        <Grid item xxs>
          <DTypography
            variant={"mediumBolder"}
            textAccent={"dark"}
            text={cardData.title}
            style={{ marginBottom: cardData.subTitle ? "4px" : "0" }}
          />
          {cardData.subTitle && (
            <DTypography
              variant={"smallNormal"}
              textAccent={"ligher"}
              text={cardData.subTitle}
            />
          )}
        </Grid>

        {navigateIcon && (
          <Grid item xxs="auto">
            {navigateIcon}
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default ImageCard;
