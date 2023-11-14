"use client";

import myLoader from "@/public/images/loader.gif";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        miHeight: "100vh",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "400px" }}>
        <img style={{ width: "100%" }} src={myLoader.src} alt="loader" />
      </Box>
    </Box>
  );
};

export default Loader;
