import defaultTheme from './default';
import { createMuiTheme } from '@material-ui/core/styles';
let theme = createMuiTheme();

const overrides = {
  typography: {
    htmlFontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    fontSize: "1rem",
    h1: {
      letterSpacing: '-1px;',
      lineHeight: '3.75rem',
      overflowWrap: 'break-word',
      fontSize: "52px",
      marginBottom: "5px",
      [theme.breakpoints.down('md')]: {
        fontSize: "42px",
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: "26px",
        letterSpacing: '-0.5px',
        lineHeight: '2.5rem',
      },
    },
    h2: {
      fontWeight:500,
      fontSize: '32px',
      letterSpacing: '-0.5px',
      lineHeight: '34px',
      overflowWrap: 'break-word',
      marginBottom: "10px",
      textTransform: "capitalize",
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        letterSpacing: '-0.5px',
        lineHeight: '1.875rem',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '-0.5px',
      lineHeight: '34px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '-0.05px',
      lineHeight: '34px',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '-0.05px',
      lineHeight: 1.2
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '-0.05px',
      lineHeight: 1.5 
    },
    subtitle1: {
      fontSize: '14px',
      lineHeight: '25px',
      letterSpacing: '-0.5px',
      color: '#808080',
      [theme.breakpoints.down('sm')]: {
        letterSpacing: '-0.3px',
      },
    },
    subtitle2: {
      color: '#808080',
      fontWeight: 200,
      fontSize: '1rem',
      letterSpacing: '-0.5px',
      lineHeight: '32px',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      // lineHeight: '1.5625rem',
    },
    body2: {
      color: '#808080',
      fontSize: '1rem',
      fontWeight: 200,
      lineHeight: '32px',
    },
    button: {
     
    },
    overline: {
      fontFamily: "Merriweather",
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '140%',
      color: defaultTheme.palette.grey[900],
      textTransform: 'unset'
    },
  },
};

export default {
  default: createMuiTheme({...overrides, ...defaultTheme}),
};
