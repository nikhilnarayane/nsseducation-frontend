'use client';
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import SlideItem from './SlideItem';
import { slides } from './dataSlider';

const Slider = () => {
  // const slides = [
  //   {
  //     title: 'Shape Your Future',
  //     subtitle: 'Quality Education for Career Success',
  //     description:
  //       'Join our industry-oriented programs and get 100% placement assistance',
  //     bgColor: '#1976d2',
  //     buttonText: 'Explore Courses',
  //     link: '/courses',
  //   },
  //   {
  //     title: 'Expert Faculty',
  //     subtitle: 'Learn from Industry Professionals',
  //     description:
  //       'Our experienced faculty provides personalized attention and mentorship',
  //     bgColor: '#2e7d32',
  //     buttonText: 'Meet Our Team',
  //     link: '/about',
  //   },
  //   {
  //     title: 'Modern Infrastructure',
  //     subtitle: 'State-of-the-art Facilities',
  //     description: 'Learn in well-equipped labs and modern classrooms',
  //     bgColor: '#ed6c02',
  //     buttonText: 'Virtual Tour',
  //     link: '/about',
  //   },
  // ];

   const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: 500 }}>
      {/* {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: slide.bgColor,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `slide-${index} 15s infinite`,
            '@keyframes slide-0': {
              '0%, 30%': { opacity: 1 },
              '33%, 100%': { opacity: 0 },
            },
            '@keyframes slide-1': {
              '0%, 33%': { opacity: 0 },
              '36%, 63%': { opacity: 1 },
              '66%, 100%': { opacity: 0 },
            },
            '@keyframes slide-2': {
              '0%, 66%': { opacity: 0 },
              '69%, 96%': { opacity: 1 },
              '100%': { opacity: 0 },
            },
          }}
        >
          <Box sx={{ textAlign: 'center', maxWidth: 800, px: 2 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              {slide.title}
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              {slide.subtitle}
            </Typography>

            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              {slide.description}
            </Typography>

            <Button
              component={Link}
              href={slide.link}
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: slide.bgColor,
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              {slide.buttonText}
            </Button>
          </Box>
        </Box>
      ))} */}

      <SlideItem slide={slides[current]} />

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
    </Box>
  );
};

export default Slider;
