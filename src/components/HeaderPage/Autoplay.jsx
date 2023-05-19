import React from 'react';
import { Grommet } from 'grommet';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';
import { Box, Carousel, Text } from 'grommet';

export const Autoplay = ({ images }) => (
  <Box fill>
    <Carousel controls={false} play={10000}>
      {images.map((imageUrl, index) => (
        <Box key={index} fill background={`url(${imageUrl})`} backgroundSize="cover" />
      ))}
    </Carousel>
  </Box>
);