import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'VT323, sans-serif',
  },
  palette: {
    primary: {
      main: '#72b01d',
    },
    secondary: {
      main: '#f3eff5',
    },
    background: {
      default: '#0c0f0a',
    },
  },
});

export default theme;
