import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#A90404',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});
