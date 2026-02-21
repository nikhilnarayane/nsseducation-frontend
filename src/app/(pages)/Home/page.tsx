'use client';
import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
} from '@mui/material';

// import Slider from '@/src/app/components/Slider/page';
import CourseCard from '@/src/app/components/CourseCard/page';

import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Slider from '@/src/app/components/Slider/Slider';
import Link from 'next/link';
// import { courses } from '@/src/app/util/coursesList'; 
import { allCourses } from '../../util/coursesList';



const Home = () => {
    type Course = {
      id: number;
      title: string;
      description: string;
      category: string;
      duration: string;
      fee: string;
    };

    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchCourses() {
        try {
          const res = await fetch("/api/get-courses");
          const data: Course[] = await res.json();
          console.log("data", data);
          
          setCourses(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
  
      fetchCourses();
    }, []);
  return (
    <Box>
      {/* Hero Slider */}
      <Slider />

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Why Choose Us?
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Expert Faculty
              </Typography>
              <Typography>
                Learn from industry experts with years of teaching experience
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <GroupsIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                100% Placement
              </Typography>
              <Typography>
                Our students get placed in top companies with excellent packages
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
              <EmojiEventsIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Modern Infrastructure
              </Typography>
              <Typography>
                State-of-the-art labs and facilities for practical learning
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Courses Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography variant="h5" align="center" gutterBottom>
            Popular Courses
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Choose from our wide range of career-oriented courses
          </Typography>

          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid item key={course.id} xs={12} sm={6} md={4}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              href="/courses"
              variant="outlined"
            >
              View All Courses
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Ready to Start Your Journey?
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Join thousands of successful students who started their careers with us
        </Typography>

        <Button
          component={Link}
          href="/signup"
          variant="contained"
          size="medium"
          sx={{ px: 6, py: 1 }}
        >
          Enroll Now
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
