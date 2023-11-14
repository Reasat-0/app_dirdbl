import colorPalette, { primary } from "./colors";

import { Hind_Siliguri } from "@next/font/google";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const themeBoxShadow =
  "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 3px -2px rgba(16, 24, 40, 0.06)";
const themeBorderColor = "#E8E6E6";

export const components = {
  MuiButton: {
    variants: [
      {
        props: { variant: "primary-gradient-btn" },
        style: {
          background: colorPalette.palette.primaryGradient,
          color: colorPalette.palette.primary.contrastText,
          padding: "6px 12px",
          border: "none",
          borderRadius: "5px",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "24px",
          // letterSpacing: "1.5px",
          textTransform: "capitalize",
          fontFamily: hindSiliguri.style.fontFamily,
          //   transition: "all .3s ease-in-out",
        },
      },
      {
        props: { variant: "outlined-btn" },
        style: {
          background: "transparent",
          color: colorPalette.palette.accent.dark,
          padding: "3px 12px",
          border: ` 1px solid ${colorPalette.palette.border["light"]}`,
          borderRadius: "3px",
          fontSize: "13px",
          fontWeight: 400,
          lineHeight: "20px",
          // letterSpacing: "1.5px",
          textTransform: "capitalize",
          fontFamily: hindSiliguri.style.fontFamily,
          //   transition: "all .3s ease-in-out",
        },
      },
      {
        props: { variant: "no-outline-btn" },
        style: {
          background: "transparent",
          color: colorPalette.palette.accent.dark,
          padding: "3px 12px",
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: "20px",
          // letterSpacing: "1.5px",
          textTransform: "capitalize",
          fontFamily: hindSiliguri.style.fontFamily,
          //   transition: "all .3s ease-in-out",
        },
      },
    ],
  },
  MuiCard: {
    boxShadow: themeBoxShadow,
    styleOverrides: {
      root: {
        borderRadius: "5px",
        backgroundImage: "none",
        boxShadow: themeBoxShadow,
        padding: "24px",
        transition: "all .3s ease-in-out",
        // "&:hover": {
        //   boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.05)",
        // },
      },
    },
    variants: [
      {
        props: { variant: "parent-card" },
        style: {
          boxShadow: themeBoxShadow,
          borderRadius: "5px",
        },
      },
      {
        props: { variant: "child-card" },
        style: {
          border: `1px solid ${themeBorderColor}`,
          borderRadius: "5px",
          boxShadow: "none",
        },
      },
    ],
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "5px",
        border: `1px solid ${themeBorderColor}`,
        fontSize: 14,
        lineHeight: "20px",
        background: "#fff",
        // padding: "14px 16px",

        // "& .MuiInputBase-root": {
        //   borderRadius: "15px",
        // },

        "& fieldset": {
          borderColor: `${themeBorderColor}!important`,
        },

        // "&:hover fieldset": {
        //   border: "none",
        // },

        "&.Mui-focused fieldset": {
          // borderRadius: "15px",
          // border: `1px solid ${themeBorderColor}`,
          borderColor: `${themeBorderColor}!important`,
        },

        "& .MuiInputBase-input": {
          padding: "14px 16px",
          // letterSpacing: "1px",
          "&::placeholder": {
            color: "#A19A9B",
            fontWeight: "400",
          },
        },

        // "& .Mui-focused .MuiInputBase-input": {
        //   border: "none",
        // },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        // background: "red",
        padding: "15px 24px",
        borderRadius: "5px",
        boxShadow: "none",
        margin: "0px",
        // "&.Mui-expanded": {
        //   margin: "0px",
        // },
        // "&.MuiAccordionSummary-content": {
        //   minHeight: "unset",
        // },
      },
    },
  },
  MuiPagination: {
    styleOverrides: {
      root: {
        // background: "#ff0000",
        ".Mui-selected": {
          // background: colorPalette.palette.primaryGradient,
          background: colorPalette.palette.primaryGradient,
          color: colorPalette.palette.primary.contrastText,
          borderRadius: "3px",
        },
      },
    },
  },
};
