'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Input,
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
import { allCourses } from '@/src/app/util/coursesList'; 

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



  const handleSubmit = async () => {
  try {
  debugger;
    const response = await fetch("/api/post-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseId: course?.id,
        courseDuration: formData.courseDuration,
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    alert("Enrollment Successful!");
    console.log(data);

  } catch (error: any) {
    setError(error.message);
  }
};

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" sx={{display:'flex', justifyContent:'center',p: 1 }} gutterBottom>
          {/* {course?.title} */}
          Course Enrollment
        </Typography> 

        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          fullWidth
          disabled={true}
          size='small'
          label="Course Name"
          name="courseTitle"
          value={course?.title}
          onChange={handleChange}
          sx={{ mb: 2 }}
          >
        </TextField>

        <TextField 
          select
          fullWidth
          disabled={true}
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

        {/* <Button variant="contained" fullWidth onClick={() => router.push(`/CourseForm/?courseId=${course?.id}&duration=${encodeURIComponent(formData.courseDuration)}&name=${encodeURIComponent(formData.name)}&mobileNumber=${encodeURIComponent(formData.mobileNumber)}&email=${encodeURIComponent(formData.email)}`)}>
          Submit
        </Button> */}
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
