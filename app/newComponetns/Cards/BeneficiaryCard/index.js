import DeleteBinIcon from "@/app/newComponetns/Icons/DeleteBinIcon";
import DTypography from "../../DTypography/indedx";
import { Box, Card, Grid } from "@mui/material";
import React from "react";

const BeneficiaryCard = ({ cardData, deleteHandler }) => {
  return (
    <Card variant="child-card" className="position-relative">
      <Box
        className="position-absolute"
        role="button"
        style={{ right: "16px", top: "16px" }}
        onClick={deleteHandler}
      >
        <DeleteBinIcon />
      </Box>
      {cardData?.name && (
        <Box sx={{ marginBottom: "16px", paddingRight: "16px" }}>
          <DTypography
            variant={"mediumNormal"}
            text={"Name: "}
            displayAs="inline"
          />
          <DTypography
            variant={"mediumBold"}
            text={cardData?.name}
            displayAs="inline"
          />
        </Box>
      )}

      {cardData?.accountNumber && (
        <Box sx={{ marginBottom: "16px" }}>
          <DTypography
            variant={"mediumNormal"}
            text={"Account: "}
            displayAs="inline"
          />
          <DTypography
            variant={"mediumBold"}
            text={cardData?.accountNumber}
            displayAs="inline"
          />
        </Box>
      )}

      {cardData?.transferType && (
        <Box>
          <DTypography
            variant={"mediumNormal"}
            text={"Transfer Type: "}
            displayAs="inline"
          />
          <DTypography
            variant={"mediumBold"}
            text={cardData?.transferType}
            displayAs="inline"
          />
        </Box>
      )}
    </Card>
  );
};

export default BeneficiaryCard;
