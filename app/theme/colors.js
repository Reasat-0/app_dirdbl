const primary = {
  50: "#fbe9e9",
  100: "#f7d2d4",
  150: "#f2bcbe",
  200: "#f2bcbe",
  250: "#e6797d",
  300: "#dd4c51",
  400: "#d51f26",
  500: "#aa191e",
  600: "#801317",
  700: "#550c0f",
  800: "#40090b",
  900: "#150304",
};

const secondary = {
  50: "#e8e6e6",
  100: "#d0cdcd",
  150: "#b9b3b4",
  200: "#a19a9b",
  250: "#736868",
  300: "#443536",
  350: "#150304",
  400: "#110203",
  500: "#0d0202",
  600: "#080102",
  700: "#060101",
  800: "#040101",
  900: "#020000",
};
const colorPalette = {
  palette: {
    primary: {
      main: primary[400],
      contrastText: "#FFF",
    },
    secondary: {
      main: secondary[500],
      contrastText: "#FFF",
    },
    accent: {
      darker: "#150304",
      dark: "#443536",
      normal: "#736868",
      light: "#A19A9B",
      lighter: "#B8B8B8",
      gradient: `linear-gradient(270deg, ${primary[400]} 0%, #f55e36 100%)`,
    },
    border: {
      light: "#E8E6E6",
    },
    lightBackground: "#FCFCFC",
    // pagination: primary[800],
    // background: {
    //   default: "#FCF9FF",
    //   paper: "#FFF",
    // },
    primaryGradient: `linear-gradient(270deg, ${primary[400]} 0%, #f55e36 100%)`,
  },
  // header: {
  //   color: grey[500],
  //   background: "#FFF",
  //   search: {
  //     color: grey[800],
  //   },
  //   indicator: {
  //     background: primary[600],
  //   },
  // },
  // footer: {
  //   color: "#414564",
  //   background: "#FFF",
  // },
  // sidebar: {
  //   color: grey[200],
  //   background: "#1b1e4c",
  //   header: {
  //     color: grey[200],
  //     background: "#FFFFFF",
  //     brand: {
  //       color: primary[800],
  //     },
  //   },
  //   footer: {
  //     color: grey[200],
  //     background: "#414564",
  //     online: {
  //       background: green[500],
  //     },
  //   },
  //   badge: {
  //     color: "#FFF",
  //     background: primary[800],
  //   },
  // },
};

export default colorPalette;
export { primary, secondary };
