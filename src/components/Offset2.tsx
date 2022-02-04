import React, { FC } from 'react';
import { IParallax } from '@react-spring/parallax';
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export const Offset2: FC<{ parallax: IParallax }> = () => {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack px={2} spacing={4} direction="column" alignItems="center">
      <Typography variant={upMd ? 'h4' : 'subtitle1'} textAlign="center">
        Grijp nu die kans om geld te verdienen met live gaan!
      </Typography>
      <Button size="large" variant="contained" href="/register">
        Nu aanmelden
      </Button>
    </Stack>
  );
};
