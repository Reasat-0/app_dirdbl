import { Typography } from "@mui/material";
import React from "react";
import colorPalette from "@/app/theme/colors";

const DTypography = ({
  variant,
  textAccent,
  text,
  style,
  utilClasses,
  displayAs = "block",
}) => {
  const sxTypography = {
    display: displayAs,
    color:
      textAccent === "gradient"
        ? "#fff"
        : colorPalette.palette.accent[textAccent],
    background:
      textAccent === "gradient" ? colorPalette.palette.accent[textAccent] : "",
    backgroundClip: textAccent === "gradient" && "text",
    textFillColor: textAccent === "gradient" && "transparent",
    letterSpacing: style?.letterSpacing || "",
    ...style,
  };
  return (
    <Typography
      sx={{ ...sxTypography }}
      variant={variant}
      className={`${utilClasses}`}
    >
      {text}
    </Typography>
  );
};

export default DTypography;
