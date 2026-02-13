'use client';
import React from 'react';
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
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCourses = allCourses.filter((course) =>
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
                  <Typography variant="h5">
                    {course.title}
                  </Typography>
                  <Chip label={course.category} color="primary" size="small" />
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
                  variant="contained"
                  component={Link}
                  href={`/course/${course.id}`}
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
