'use client';
import React, { useEffect, useState } from 'react';
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
import { useSearchParams } from 'next/navigation';

/* ---------------- TYPES ---------------- */

interface Course {
  id: string;
  title: string;
  durations: string[];
}

interface FormData {
  courseId: string;
  courseDuration: string;
  name: string;
  mobileNumber: string;
  email: string;
  dateOfBirth: string;
  address: string;
  education: string;
  paymentMethod: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

/* ---------------- CONSTANTS ---------------- */

const steps = ['Course Details', 'Personal Information', 'Payment'];

const courses: Course[] = [
  { id: '1', title: 'Hotel Management', durations: ['6 Months', '1 Year', '2 Years'] },
  { id: '2', title: 'Diesel Mechanical', durations: ['1 Year', '18 Months', '2 Years'] },
  { id: '3', title: 'Nursing Course', durations: ['2 Years', '3 Years', '4 Years'] },
  { id: '4', title: 'Computer Science Engineering', durations: ['4 Years'] },
  { id: '5', title: 'Business Administration', durations: ['1 Year', '2 Years'] },
];

/* ---------------- COMPONENT ---------------- */

export default function CourseForm() {
  const searchParams = useSearchParams();

  const courseId = searchParams.get('courseId') ?? '';
  const duration = searchParams.get('duration') ?? '';
  const name = searchParams.get('name') ?? '';
  const mobileNumber = searchParams.get('mobileNumber') ?? '';
  const email = searchParams.get('email') ?? '';

  const [activeStep, setActiveStep] = useState(0);
  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    courseId,
    courseDuration: duration,
    name,
    mobileNumber,
    email,
    dateOfBirth: '',
    address: '',
    education: '',
    paymentMethod: 'credit_card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  /* ---------------- EFFECT ---------------- */

  useEffect(() => {
    if (!courseId) return;

    const selectedCourse = courses.find(c => c.id === courseId);
    if (!selectedCourse) return;

    setCourse(selectedCourse);

    setFormData(prev => ({
      ...prev,
      courseId,
      courseDuration: prev.courseDuration || selectedCourse.durations[0],
    }));
  }, [courseId]);

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    setError('');

    if (activeStep === 0 && !formData.courseDuration) {
      setError('Please select course duration');
      return;
    }

    if (activeStep === 1) {
      if (!formData.name || !formData.email || !formData.mobileNumber) {
        setError('Please fill all required fields');
        return;
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError('Invalid email address');
        return;
      }
    }

    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      setError('Please fill payment details');
      return;
    }

    console.log('FINAL FORM DATA:', formData);
    alert('Enrollment Successful!');
  };

  /* ---------------- UI ---------------- */

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Course Enrollment
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          {/* STEP 1 */}
          {activeStep === 0 && course && (
            <TextField
              select
              fullWidth
              label="Course Duration"
              size='small'
              name="courseDuration"
              value={formData.courseDuration}
              onChange={handleChange}
            >
              {course.durations.map(d => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
            </TextField>
          )}

          {/* STEP 2 */}
          {activeStep === 1 && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth size='small' label="Name" name="name" value={formData.name} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth size='small' label="Mobile" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth size='small' label="Email" name="email" value={formData.email} onChange={handleChange} />
              </Grid>
            </Grid>
          )}

          {/* STEP 3 */}
          {activeStep === 2 && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth size='small' label="Card Number" name="cardNumber" onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth size='small' label="Expiry Date" name="expiryDate" onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth size='small' label="CVV" name="cvv" onChange={handleChange} />
              </Grid>
            </Grid>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
              Back
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained" color="success">
                Pay & Enroll
              </Button>
            ) : (
              <Button onClick={handleNext} variant="contained">
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
