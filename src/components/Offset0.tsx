import { Box, Button, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IParallax } from '@react-spring/parallax';

export const Offset0: FC<{ parallax: IParallax }> = ({ parallax }) => (
  <Stack
    px={2}
    height="100vh"
    spacing={4}
    direction="column"
    justifyContent="space-evenly"
    alignItems="center"
  >
    <img
      src="../../static/la-casa-blanco-agency-logo.png"
      alt="la-casa-blanco-agency-logo"
      width="500"
    />
    <Typography variant="h3" textAlign="center">
      Wil jij streamer worden en geld verdienen tijdens het live gaan?
    </Typography>
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => parallax.scrollTo(2)}
    >
      Meld je aan
    </Button>

    <Box>
      <Typography variant="h5" textAlign="center">
        Onze 5 talenten vertellen hun verhaal
      </Typography>
      <Box
        role="button"
        className="arrow bounce"
        onClick={() => parallax.scrollTo(1)}
      />
    </Box>
  </Stack>
);
