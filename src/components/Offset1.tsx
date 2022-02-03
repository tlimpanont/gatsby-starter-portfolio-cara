import { Button, Grid, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IParallax } from '@react-spring/parallax';

const talentVideos: {
  title: string;
  src: string;
}[] = [
  {
    title: 'video talent 1',
    src: 'https://youtube.com/embed/T1w0Gq4DL7k',
  },
  {
    title: 'video talent 2',
    src: 'https://youtube.com/embed/aBUcO_wAf08',
  },
  {
    title: 'video talent 3',
    src: 'https://youtube.com/embed/8uTKpzChNqs',
  },
  {
    title: 'video talent 4',
    src: 'https://youtube.com/embed/VmI1vSAoFNw',
  },
  {
    title: 'video talent 5',
    src: 'https://youtube.com/embed/8riSzz7r7yc',
  },
];
export const Offset1: FC<{ parallax: IParallax }> = ({ parallax }) => (
  <Grid container spacing={2} px={2} justifyContent="center">
    {talentVideos.map((item) => (
      <Grid item xs={4} key={item.src}>
        <iframe
          {...item}
          title={item.title}
          width="100%"
          height="315"
          frameBorder="0"
          allowFullScreen
        />
      </Grid>
    ))}
    <Stack
      spacing={2}
      mt={5}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h6">
        Wil jij leren hoe je als streamer geld kunt verdienen?
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => parallax.scrollTo(2)}
      >
        Meld je aan
      </Button>
    </Stack>
  </Grid>
);
