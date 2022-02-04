import React from 'react';
import JotformEmbed from 'react-jotform-embed';
import { CssBaseline } from '@mui/material';

export default function Register() {
  return (
    <>
      <CssBaseline />
      <JotformEmbed src="https://form.jotform.com/220336059052044" />;
    </>
  );
}
