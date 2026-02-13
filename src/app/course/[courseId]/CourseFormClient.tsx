'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Alert,
} from '@mui/material';
import { useRouter, useParams } from 'next/navigation';
import { allCourses } from '@/app/util/coursesList'; 

/* ---------------- TYPES ---------------- */

type Course = {
  id: string;
  title: string;
  durations: string[];
};

type FormData = {
  courseDuration: string;
  name: string;
  mobileNumber: string;
  email: string;
  cardNumber: string;
};

/* ---------------- COMPONENT ---------------- */

export default function CourseFormClient() {
  const router = useRouter();
  const params = useParams<{ courseId: string }>();
  const courseId = params.courseId;

  const [activeStep, setActiveStep] = useState(0);
  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    courseDuration: '',
    name: '',
    mobileNumber: '',
    email: '',
    cardNumber: '',
  });

  const courses: Course[] = allCourses.map(course => ({
    id: course.id.toString(),
    title: course.title,
    durations: [course.duration],
  }));

  useEffect(() => {
    const selected = courses.find(c => c.id === courseId);
    if (!selected) return;

    setCourse(selected);
    setFormData(prev => ({
      ...prev,
      courseDuration: selected.durations[0],
    }));
  }, [courseId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Course Enrollment {course?.title}
        </Typography> 

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          select
          fullWidth
          size='small'
          label="Course Duration"
          name="courseDuration"
          value={formData.courseDuration}
          onChange={handleChange}
          sx={{ mb: 2 }}
        >
          {course?.durations.map(d => (
            <MenuItem key={d} value={d}>{d}</MenuItem>
          ))}
        </TextField>

        <TextField fullWidth size='small' label="Name" name="name" value={formData.name} onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth size='small' label="Mobile" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth size='small' label="Email" name="email" value={formData.email} onChange={handleChange} sx={{ mb: 2 }} />

        <Button variant="contained" fullWidth onClick={() => router.push(`/pages/CourseForm/?courseId=${course?.id}&duration=${encodeURIComponent(formData.courseDuration)}&name=${encodeURIComponent(formData.name)}&mobileNumber=${encodeURIComponent(formData.mobileNumber)}&email=${encodeURIComponent(formData.email)}`)}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
