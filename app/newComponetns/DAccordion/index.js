import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { DownArrow } from "@/app/utils/iconImports";

import { DTypography } from "../../utils/imports";

const DAccordion = ({ data }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<DownArrow />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            minHeight: "unset",
            ".MuiAccordionSummary-content": {
              margin: "0",
            },
          }}
        >
          <DTypography
            variant={"medium2Bold"}
            textAccent={"darker"}
            text={data.title}
            style={{ textAlign: "center" }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <DTypography
            variant={"mediumNormal"}
            textAccent={"dark"}
            text={data?.description}
            style={{ textAlign: "left" }}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DAccordion;
