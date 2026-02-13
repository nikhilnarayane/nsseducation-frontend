'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  buttonText: string;
  link: string;
}

type Props = {
  slide: Slide;
};

const SlideItem: React.FC<Props> = ({ slide }) => {
  return (
    <Box
      sx={{
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        backgroundImage: `url(${slide.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Dark overlay for text readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
        <Typography variant="h5" fontWeight="bold">
          {slide.title}
        </Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>
          {slide.subtitle}
        </Typography>
        <Typography sx={{ mt: 2 }}>{slide.description}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          href={slide.link}
        >
          {slide.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default SlideItem;
