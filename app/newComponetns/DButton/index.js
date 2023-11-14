import React from "react";
import Button from "@mui/material/Button";

import { primaryBtnSx } from "@/app/theme/styles";
import { IconButton, Typography } from "@mui/material";

const DButton = ({
  onClick,
  variant = "",
  withStartIcon,
  withEndIcon,
  iconOnLeft,
  iconOnRight,
  type,
  style,
  takeFullWidth,
  label,
  onlyIcon,
  className,
  ariaControls,
  ariaHasPopUp,
  ariaExpanded,
}) => {
  // const primaryBtnSx = {
  //   background: `linear-gradient(270deg, ${primary[400]} 0%, #f55e36 100%)`,
  //   fontWeight: "700",
  //   fontSize: "14px",
  //   lineHeight: "24px",
  //   letterSpacing: "1.5px",
  // };
  const btnSxObj = {
    primaryGradient: primaryBtnSx,
    link: "",
    noOutlined: "",
  };
  // sx={btnSxObj[variant]}
  return (
    <>
      {!onlyIcon ? (
        <Button
          type={type}
          onClick={!type ? onClick : null}
          variant={variant}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            ...style,
          }}
          fullWidth={takeFullWidth}
          startIcon={withStartIcon && iconOnLeft}
          endIcon={withEndIcon && iconOnRight}
        >
          {label}
        </Button>
      ) : (
        <IconButton
          aria-label="delete"
          sx={{ padding: "12px 16px", background: "#fff", ...style }}
          onClick={onClick}
        >
          {iconOnLeft}
        </IconButton>
      )}
    </>
  );
};

export default DButton;
