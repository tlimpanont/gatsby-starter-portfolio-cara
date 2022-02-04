import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import { IParallax } from '@react-spring/parallax';

export const Offset0: FC<{ parallax: IParallax }> = () => {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Stack
      height="100%"
      p={2}
      spacing={8}
      direction="column"
      alignItems="center"
    >
      <img
        src="la-casa-blanco-agency-logo.png"
        alt="la-casa-blanco-agency-logo"
        width={upMd ? 400 : '80%'}
      />
      <Typography variant={upMd ? 'h4' : 'h5'} textAlign="center">
        Wil jij streamer worden en geld verdienen tijdens het live gaan?
      </Typography>
      <Box flex={1} />
      <Box pb={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/register"
        >
          Meld je aan
        </Button>
      </Box>

      {/*      <Box>
        <Typography variant="h5" textAlign="center">
          Onze 5 talenten vertellen hun verhaal
        </Typography>
        <Box
          role="button"
          className="arrow bounce"
          onClick={() => parallax.scrollTo(1)}
        />
      </Box> */}
    </Stack>
  );
};
