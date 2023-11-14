import React, { Fragment } from "react";

import { Card, Grid } from "@mui/material";
import { DTypography, IconWrapper } from "@/app/utils/imports";

import { PhoneIcon, InactiveLocation } from "@/app/utils/iconImports";
const BranchCard = ({ cardData }) => {
  return (
    <Card variant="child-card" sx={{ border: "none" }}>
      <DTypography
        variant={"largeBolder"}
        text={cardData.name}
        style={{ marginBottom: "16px" }}
      />

      <Grid container spacing={20} mb={20}>
        <Grid item xxs="auto">
          <IconWrapper useAsImage={false} variant={"secondary"} size="small">
            <InactiveLocation />
          </IconWrapper>
        </Grid>

        <Grid item xxs>
          <DTypography
            variant={"mediumBold"}
            text={cardData.address}
            textAccent={"dark"}
          />
        </Grid>
      </Grid>

      <Grid container spacing={20}>
        <Grid item xxs="auto">
          <IconWrapper useAsImage={false} variant={"secondary"} size="small">
            <PhoneIcon />
          </IconWrapper>
        </Grid>

        <Grid item xxs>
          {cardData?.contacts.map((contact, idx) => (
            <Fragment key={idx}>
              <DTypography
                variant={"mediumBold"}
                text={`${contact.type}: ${contact.value}`}
                textAccent={"dark"}
                style={{
                  marginTop: "-2px",
                }}
              />
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default BranchCard;
