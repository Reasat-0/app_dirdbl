"use client";
import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";

import { Hind_Siliguri } from "@next/font/google";
import customMuiTypography from "./typography";

import { components } from "./components";

// import typography from "./typography";
// import components from "./components";
// import breakpoints from "./breakpoints";

// import { purple } from "@mui/material/colors";
// import { purpleColorShades } from "./colorPalette";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import colorPalette from "./colors";

const theme = createTheme({
  // breakpoints
  breakpoints: breakpoints,

  // color palette
  ...colorPalette,

  // typography
  typography: {
    ...customMuiTypography,
    fontFamily: hindSiliguri.style.fontFamily,
  },

  // spacing
  spacing: 1,

  // components
  components: {
    ...components,
    fontFamily: hindSiliguri.style.fontFamily,
  },
});

export default theme;
