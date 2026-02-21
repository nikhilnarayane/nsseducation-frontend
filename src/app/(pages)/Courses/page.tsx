'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { allCourses } from '../../util/coursesList';


const Courses = () => {

  type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  fee: string;
};

  const [searchTerm, setSearchTerm] = React.useState('');
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
  
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Our Courses
      </Typography>

      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Choose from 12+ career-oriented programs
      </Typography>

      {/* Search Bar */}
      <Paper sx={{ p: 2, mb: 6, maxWidth: 600, mx: 'auto' }}>
        <TextField
          fullWidth
          size='small'
          placeholder="Search courses by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* Course Cards */}
      <Grid container spacing={4}>
        {filteredCourses.map((course) => (
          <Grid item key={course.id}
           xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    mb: 2,
                  }}
                >
                  <Typography variant="subtitle1">
                    {course.title}
                  </Typography>
                  <Chip label={course.category} color="primary" sx={{px:1}} size="small" />
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb:1, whiteSpace: 'normal', width: '200px' }}
                >
                  {course.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="body2">
                    Duration: {course.duration}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ₹{course.fee}
                  </Typography>
                </Box>
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  fullWidth
                  size='small'
                  variant="contained"
                  component={Link}
                  href={`/Courses/${course.id}`}
                >
                  Enroll Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* No Results */}
      {filteredCourses.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No courses found matching your search
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            onClick={() => setSearchTerm('')}
          >
            Clear Search
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Courses;
