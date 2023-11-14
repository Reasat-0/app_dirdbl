"use client";

import { Box } from "@mui/material";
import React from "react";
import { PercentageWithCurve } from "@/app/utils/iconImports";
import colorPalette from "@/app/theme/colors";

const DImage = ({
  usePlaceholder,
  width = "100%",
  height = "auto",
  source,
  alter,
  style,
  imageSmall,
}) => {
  return (
    <>
      {/* {usePlaceholder ? (
        <Box
          mx={"auto"}
          sx={{
            display: "flex",
            background: colorPalette.palette.accent.lighter,
            width: !imageSmall ? "100%" : "100px",
            height: !imageSmall ? "auto" : "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PercentageWithCurve />
        </Box>
      ) : ( */}
      <img
        src={source}
        alt={alter}
        style={{ width: width, height: height, ...style }}
      />
      {/* )} */}
    </>
  );
};

export default DImage;
