// import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

const ContentContainer = ({ children, dictionary, width = "457px" }) => {
  return (
    <Box
      sx={{ padding: "25px", textAlign: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: {
            xxs: "100%",
            xs: "100%",
            sm: "100%",
            cmd: "80%",
            lg: width,
          },
          mx: "auto",
          textAlign: "left",
        }}
      >
        {children}
      </Box>
    </Box>
    // <div className="p-5">
    //   <div
    //     className="main-content-container mx-auto text-center"
    //     style={{ width: "457px" }}
    //   ></div>
    // </div>
  );
};

export default ContentContainer;
