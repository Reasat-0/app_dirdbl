import React from "react";

import DTypography from "../../DTypography/indedx";

import DButton from "../../DButton";
import { Card } from "@mui/material";

const MainCard = ({
  buttonLabel,
  cardTitle,
  children,
  hasViewAllBtn,
  utilClasses,
  style,
  buttonNavigation,
  noBorder,
  withHorizontalLine,
  innerCardStyle,
}) => {
  return (
    <Card
      variant="parent-card"
      p={4}
      sx={{
        marginBottom: {
          xxs: "25px",
        },
        borderRadius: "5px",
        background: "#fff",
        position: "relative",

        ...style,
      }}
    >
      {hasViewAllBtn && (
        <DButton
          variant="outlined-btn"
          onClick={buttonNavigation}
          style={{
            top: "24px",
            right: "24px",
            position: "absolute",
          }}
          label={buttonLabel}
        />
      )}

      <DTypography
        variant={"medium2Bolder"}
        textAccent={"darker"}
        text={cardTitle}
        style={{ marginBottom: "20px", textAlign: "left" }}
      />
      {withHorizontalLine && <hr />}

      <Card
        variant="child-card"
        sx={{
          borderRadius: "5px",
          padding: {
            xs: noBorder ? "0" : "10px",
            sm: noBorder ? "0" : "24px",
          },
          border: noBorder && "none",
          ...innerCardStyle,
        }}
      >
        {children}
      </Card>
    </Card>
  );
};

export default MainCard;
