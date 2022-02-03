import React, { FC, useState } from 'react';
import { DecorationParallaxLayers } from '@/components/decorations/DecorationParallaxLayers';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Offset0 } from '@/components/Offset0';
import { Offset1 } from '@/components/Offset1';
import { Offset2 } from '@/components/Offset2';

export const App: FC = () => {
  const [parallax, setParallax] = useState<IParallax>(null);

  return (
    <Parallax
      ref={(_ref) => {
        setParallax(_ref);
      }}
      pages={3}
    >
      <DecorationParallaxLayers parallax={parallax} />

      <ParallaxLayer offset={2} speed={-0.3} />

      <ParallaxLayer offset={0} speed={0.1}>
        <Offset0 parallax={parallax} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <Offset1 parallax={parallax} />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={-0}>
        <Offset2 parallax={parallax} />
      </ParallaxLayer>
    </Parallax>
  );
};
