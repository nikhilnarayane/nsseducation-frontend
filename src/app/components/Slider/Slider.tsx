'use client';

import React, { useState, useEffect } from 'react';
import SlideItem from './SlideItem';
import { slides } from './dataSlider';
import { Box, Button } from '@mui/material';

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5s

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Current Slide */}
      <SlideItem slide={slides[current]} />

      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 20,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
        }}
      >
        Prev
      </Button>
      <Button
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
        }}
      >
        Next
      </Button>

      {/* Dots Navigation */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === current ? 'primary.main' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
            }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
