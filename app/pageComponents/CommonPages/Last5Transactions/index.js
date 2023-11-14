import { last5transactions } from "../../../Constants";

import { Box, Card, Grid, Stack } from "@mui/material";
import React from "react";
import { ContentContainer, DTypography, PageTitle } from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import colorPalette from "@/app/theme/colors";

const Last5Transactions = ({ pageLocale }) => {
  const t = useTranslations("Index");
  return (
    <ContentContainer width={"620px"}>
      <PageTitle
        variant={"title"}
        text={t("common.last5transactions")}
        hasSubtitle={false}
      />
      <Card>
        <Box>
          <DTypography
            variant={"medium2Bolder"}
            textAccent={"darker"}
            text={t("common.last5transactions")}
            style={{ marginBottom: "24px" }}
          />
          <hr style={{ background: colorPalette.palette.border.light }} />

          {last5transactions.map((item, idx) => (
            <Box key={idx}>
              <Grid container alignItems={"center"}>
                <Grid item xs>
                  <DTypography
                    variant={"mediumBolder"}
                    textAccent={"darker"}
                    text={item?.title}
                    style={{
                      marginBottom: "16px",
                    }}
                  />

                  <Stack direction={"row"} spacing={8}>
                    <DTypography
                      variant={"mediumRegular"}
                      textAccent={"darker"}
                      text={item?.date}
                    />
                    <DTypography
                      variant={"mediumRegular"}
                      textAccent={"darker"}
                      text={item?.time}
                    />
                  </Stack>
                </Grid>

                <Grid item xs="auto">
                  <DTypography
                    variant={"mediumBolder"}
                    textAccent={"gradient"}
                    text={`${item.type === "credit" ? "-" : "+"} ${t(
                      "common.unit"
                    )} ${item?.amount}`}
                  />
                </Grid>
              </Grid>

              {idx !== last5transactions.length - 1 && <hr />}
            </Box>
          ))}
        </Box>
      </Card>
    </ContentContainer>
  );
};

export default Last5Transactions;
