import RightArrow from "@/app/newComponetns/Icons/RightArrow";

import React from "react";
import { Card, Grid } from "@mui/material";
import DTypography from "../../DTypography/indedx";

// This card is used for just text with icon bearing cards...
const SimpleCard = ({ data }) => {
  return (
    <>
      <Card
        sx={{
          my: "24px",
        }}
        variant="child-card"
      >
        <Grid container alignItems={"center"}>
          <Grid item xxs>
            <DTypography
              variant={"medium2Bold"}
              textAccent="darker"
              text={data.title}
              style={{
                textAlign: "left",
              }}
            />
            {data?.subTitle && (
              <DTypography
                variant={"smallNormal"}
                textAccent="light"
                text={data.subTitle}
                style={{
                  textAlign: "left",
                  marginTop: "8px",
                  letterSpacing: "0",
                }}
              />
            )}
          </Grid>
          <Grid item xxs="auto">
            <RightArrow />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SimpleCard;
