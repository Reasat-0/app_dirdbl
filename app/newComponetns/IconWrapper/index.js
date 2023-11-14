import { Box } from "@mui/material";
import React from "react";

import colorPalette from "@/app/theme/colors";
import { secondary } from "@/app/theme/colors";

const IconWrapper = ({ children, useAsImage, variant, size }) => {
  // variant = primary, gray
  // size = large, medium, small
  return (
    <Box
      mx={"auto"}
      sx={{
        display: "flex",
        borderRadius: "5px",
        padding: size === "small" ? "5px" : "5px",
        justifyContent: "center",
        alignItems: "center",
        width: size === "small" ? "24px" : "48px",
        height: size === "small" ? "24px" : "48px",
        background:
          variant === "primary"
            ? colorPalette.palette.primaryGradient
            : secondary["150"],
      }}
    >
      {children}
    </Box>
  );
};

export default IconWrapper;
