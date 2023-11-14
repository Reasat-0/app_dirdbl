import { Box } from "@mui/material";
import React from "react";

const IconImageWrapper = ({
  source,
  alt,
  variant,
  size,
  smallContent,
  style,
}) => {
  return (
    <Box
      sx={{
        width: size === "small" ? "24px" : "48px",
        height: size === "small" ? "24px" : "48px",
        padding: smallContent ? "8px" : "",
        background:
          variant === "secondary" ? "#F6F2F3" : smallContent ? "#F6F2F3" : "",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {/* <Image src={source} alt={alt} width={100} height={100}
      /> */}
      <img src={source} alt={alt} />
    </Box>
  );
};

export default IconImageWrapper;
