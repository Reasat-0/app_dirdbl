import IconWrapper from "@/app/newComponetns/IconWrapper";

import React from "react";
import { Card, Grid } from "@mui/material";
import DTypography from "@/app/newComponetns/DTypography/indedx";
import { useTranslations } from "next-intl";

const IconCard = ({
  cardData,
  cardStyle,
  navigateIcon,
  includeAmount,
  size,
}) => {
  const t = useTranslations("Index");
  return (
    <Card
      variant="child-card"
      sx={{
        marginBottom: "20px",
        padding: size === "large" ? "24px" : "16px",
        ...cardStyle,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={20}
      >
        <Grid item>
          <IconWrapper variant={"primary"}>{cardData?.icon}</IconWrapper>
        </Grid>
        <Grid item className="ps-3" xs>
          <DTypography
            variant={"medium2Bolder"}
            textAccent={"darker"}
            text={cardData.title}
            style={{
              marginBottom: "4px",
              textAlign: { xxs: "center", sm: "left" },
            }}
          />
          <DTypography
            variant={"smallNormal"}
            textAccent={"lighter"}
            text={cardData.subTitle}
            style={{
              textAlign: { xxs: "center", sm: "left" },
            }}
            // style={{ marginBottom: "4px" }}
          />
        </Grid>

        {includeAmount && (
          <Grid item mx={20}>
            <DTypography
              variant={"mediumBold"}
              textAccent={"darker"}
              text={`${t("common.unit")} ${cardData?.balance}`}
            />
          </Grid>
        )}

        {navigateIcon && (
          <Grid item xs={"auto"}>
            {navigateIcon}
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default IconCard;
