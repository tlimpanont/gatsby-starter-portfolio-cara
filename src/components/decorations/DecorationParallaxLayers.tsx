import React, { FC } from 'react';
import { IParallax, ParallaxLayer } from '@react-spring/parallax';

const url = (name: string, wrap = false) =>
  `${
    wrap ? `url(` : ``
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? `)` : ``
  }`;

export const DecorationParallaxLayers: FC<{ parallax: IParallax }> = () => (
  <>
    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'black' }} />

    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'black' }} />

    <ParallaxLayer
      offset={0}
      speed={0}
      factor={3}
      style={{
        backgroundImage: url(`stars`, true),
        backgroundSize: `cover`,
      }}
    />

    <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: `none` }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Money_Flat_Icon.svg"
        style={{ width: `20%`, marginLeft: `60%` }}
      />
    </ParallaxLayer>

    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `20%`, marginLeft: `55%` }}
      />
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `10%`, marginLeft: `15%` }}
      />
    </ParallaxLayer>

    <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `20%`, marginLeft: `70%` }}
      />
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `20%`, marginLeft: `40%` }}
      />
    </ParallaxLayer>

    <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `10%`, marginLeft: `10%` }}
      />
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `20%`, marginLeft: `75%` }}
      />
    </ParallaxLayer>

    <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `20%`, marginLeft: `60%` }}
      />
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `25%`, marginLeft: `30%` }}
      />
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `10%`, marginLeft: `80%` }}
      />
    </ParallaxLayer>

    <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `20%`, marginLeft: `5%` }}
      />
      <img
        src={url(`cloud`)}
        style={{ display: `block`, width: `15%`, marginLeft: `75%` }}
      />
    </ParallaxLayer>
    <ParallaxLayer
      offset={2.5}
      speed={-0.4}
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        pointerEvents: `none`,
        marginTop: -150,
      }}
    >
      <img
        src="../../../static/la-casa-blanco-agency-logo.png"
        alt="la-casa-blanco-agency-logo"
        width="300"
      />
    </ParallaxLayer>
  </>
);
