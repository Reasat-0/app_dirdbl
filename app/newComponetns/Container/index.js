"use client";

import React from "react";
import { ThemeProvider, Container, Grid, Box } from "@mui/material";
import theme from "@/app/theme/theme";
import SideNavbar from "../Sidebar/SideNavbar";

const CustomContainer = ({ children, classes, style }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          // border: "1px solid red",
          maxWidth: {
            xxs: "300px",
            xs: "390px",
            sm: "540px",
            md: "680px",
            cmd: "800px",
            lg: "900px",
            xl: "1200px",
            xxl: "1200px",
            xxxl: "1400px",
          },
          // minHeight: "calc( 100vh - 80px )",
          display: "flex",
          // padding: "30px 0",
          justifyContent: "center",
          alignItems: "center",
        }}
        // className="d-flex align-items-center justify-content-center py-5"
      >
        {/* <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ minHeight: "100%" }}
        > */}
        <Box
          sx={{
            width: "100%",
          }}
        >
          <SideNavbar>{children}</SideNavbar>

          {/* <Box
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              width: `calc(100% - 240px)`,
              minHeight: "100%",
              padding: "0 20px",
            }}
          >
            {children}
          </Box> */}
        </Box>
        {/* </Grid> */}
      </Container>
    </ThemeProvider>
  );
};

export default CustomContainer;
