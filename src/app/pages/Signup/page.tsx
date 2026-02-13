'use client'
import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Alert,
  Grid,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';

// --- Step titles
const steps = ['Personal Details', 'Educational Details', 'Account Setup'];

// --- Type definitions for nested sections
type Education10th = {
  schoolName: string;
  board: string;
  passingYear: string;
  percentage: string;
};

type Education12th = Education10th & {
  stream: string;
};

type Graduation = {
  collegeName: string;
  university: string;
  degree: string;
  passingYear: string;
  percentage: string;
};

// --- Full Form Data Type
interface FormData {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  address: string;

  education10th: Education10th;
  education12th: Education12th;
  graduation: Graduation;

  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    education10th: {
      schoolName: '',
      board: '',
      passingYear: '',
      percentage: '',
    },
    education12th: {
      schoolName: '',
      board: '',
      passingYear: '',
      percentage: '',
      stream: '',
    },
    graduation: {
      collegeName: '',
      university: '',
      degree: '',
      passingYear: '',
      percentage: '',
    },
    password: '',
    confirmPassword: '',
  });

  // --- Simple input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // --- Nested input change (Type-safe)
  const handleNestedChange = <
    S extends keyof Pick<FormData, 'education10th' | 'education12th' | 'graduation'>,
    F extends keyof FormData[S]
  >(
    section: S,
    field: F,
    value: FormData[S][F]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // --- Next step
  const handleNext = () => {
    setError('');

    if (activeStep === 0) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobileNumber) {
        setError('Please fill all required fields');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError('Please enter a valid email address');
        return;
      }
    }

    if (activeStep === 1) {
      if (!formData.education10th.schoolName || !formData.education10th.passingYear) {
        setError('Please fill 10th details');
        return;
      }
    }

    if (activeStep === 2) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup data:', formData);

    // ✅ Redirect
    window.location.href = '/login';
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>

        <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
          Join thousands of students learning with us
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          {/* --- Step content --- */}
          {activeStep === 0 && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  size='small'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  InputProps={{ startAdornment: <PersonIcon sx={{ mr: 1 }} /> }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  size='small'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber"
                  size='small'
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  InputProps={{ startAdornment: <PhoneIcon sx={{ mr: 1 }} /> }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  size='small'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  InputProps={{ startAdornment: <EmailIcon sx={{ mr: 1 }} /> }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  size='small'
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ startAdornment: <CakeIcon sx={{ mr: 1 }} /> }}
                />
              </Grid>
            </Grid>
          )}

          {activeStep === 1 && (
            <Grid container spacing={2}>
              {/* 10th */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="10th School Name"
                  size='small'
                  value={formData.education10th.schoolName}
                  onChange={(e) =>
                    handleNestedChange('education10th', 'schoolName', e.target.value)
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="10th Board"
                  size='small'
                  value={formData.education10th.board}
                  onChange={(e) =>
                    handleNestedChange('education10th', 'board', e.target.value)
                  }
                />
              </Grid>
            </Grid>
          )}

          {activeStep === 2 && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  size='small'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  size='small'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
              Back
            </Button>

            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained">
                Complete Registration
              </Button>
            ) : (
              <Button onClick={handleNext} variant="contained">
                Next
              </Button>
            )}
          </Box>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Link href="/login">Login here</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
