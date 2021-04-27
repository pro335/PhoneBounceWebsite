const white = '#FFFFFF';
const black = '#000000';
const primary = "#808080";
// const primaryLighten = "";
const primaryDark = "#808080";
const secondary = "#f50057";
const secondaryDark = "#0B919F";
// const secondaryLighten = "";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
const textPrimary = "#2D2C2A";  /* Waldo Black */
const textSecondary = "#666666";
const bgPaper = 'linear-gradient(240deg, #16222a 0%, #3a6173 100%)';
const bgDefault = "#FFFFFF";
const error = "#FFFF";
const divider = "#FFFFFF";  
const icon = "#FFFFFF";
const waldoOasis = '#FBE8C8';
const waldoMistyRose = '#FFE9E9';
const waldoSeashell = '#FFEFE7';
const waldoLightCyan = '#E5FBFD';
const waldoRiceFlower = '#EAF9E1';
const waldoCornSlik = '#FFFADF';

export default {
  palette: {
    common: {
      black,
      white,
      secondary,
      primary,
      waldoOasis,
      waldoMistyRose,
      waldoSeashell,
      waldoLightCyan,
      waldoRiceFlower,
      waldoCornSlik,
      bgPaper
    },
    type: "light",
    primary: {
      contrastText: white,
      dark: primaryDark,
      main: primary,
      // light: primaryLighten
    },
    secondary: {
      contrastText: white,
      dark: secondaryDark,
      main: secondary,
      // light: secondaryLighten
    },
    success: {
      contrastText: white,
      main: success,
    },
    info: {
      contrastText: white,
      main: info,
    },
    warning: {
      contrastText: white,
      main: warning,
    },
    error: {
      contrastText: white,
      main: error,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      link: primary,
    },
    divider: divider,
    icon: icon,
    background: {
      paper: bgPaper,
      default: bgDefault,
    },
    grey:{
      200 : '#cccccc', // Light Grey
      500 : '#999999',
      700 : '#666666', // Mid Grey`
      900 : '#313131'
    }
  },
  overrides: {
    // MuiSvgIcon: {
    //   root: {
    //     color: Gray,
    //   },
    // },     
  },
};
