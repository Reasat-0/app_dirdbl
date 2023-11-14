import React from "react";
import { Card } from "@mui/material";
import DTypography from "../../DTypography/indedx";

const AccountInfoCard = ({ imgFile, name = "", variant, classes, styles }) => {
  return (
    // <div className="bank-card-container">
    //   {variant === "small" && (
    //     <div
    //       className={`bg-white p-4 ${classes}`}
    //       style={{
    //         ...styles,
    //         border: "1px solid #E8E6E6",
    //         borderRadius: "6px",
    //       }}
    //     >
    //       <Typography
    //         size={typographyClasses.size.largex}
    //         variant={typographyClasses.variant.semibold}
    //         utilClasses={"text-secondary-300 text-start mb-1"}
    //         text={"DBL VISA"}
    //       />
    //       <Typography
    //         size={typographyClasses.size.medium}
    //         variant={typographyClasses.variant.regular}
    //         utilClasses={"text-secondary-300 text-start"}
    //         text={"123423423432"}
    //       />
    //     </div>
    //   )}
    // </div>

    <Card variant="child-card" sx={{ p: 24, boxShadow: "none", ...styles }}>
      <DTypography
        variant={"medium2Bolder"}
        textAccent={"dark"}
        text={"DBL VISA"}
        style={{ marginBottom: "8px" }}
      />
      <DTypography
        variant={"smallNormal"}
        textAccent={"light"}
        text={"345465462"}
      />
    </Card>
  );
};

export default AccountInfoCard;
