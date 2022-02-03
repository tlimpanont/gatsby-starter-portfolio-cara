import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { defaultTheme } from '@/themes/defaultTheme';
import { App } from '@/components/App';

export default function Index() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
