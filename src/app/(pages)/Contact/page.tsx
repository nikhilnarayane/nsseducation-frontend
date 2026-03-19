'use client';
import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Box, Grid, Paper, TextField, Button,
  Alert, Snackbar, Card, CardContent, InputAdornment,
  FormControl, InputLabel, Select, MenuItem, FormHelperText,
  Checkbox, FormControlLabel
} from '@mui/material';

import {
  Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationIcon,
  Send as SendIcon, CheckCircle as CheckCircleIcon,
  Person as PersonIcon, Subject as SubjectIcon,
  Message as MessageIcon, Error as ErrorIcon
} from '@mui/icons-material';

import { SelectChangeEvent } from "@mui/material";

interface Department {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  description: string;
}

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  select_department: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  full_name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  select_department?: string;
  message?: string;
  consent?: string;
}

const departments: Department[] = [
  { id: 1, full_name: 'Admissions', email: 'admissions@edulearn.com', phone: '+91 9876543211', description: 'Admission help' },
  { id: 2, full_name: 'Academic', email: 'academic@edulearn.com', phone: '+91 9876543212', description: 'Academic queries' },
];

export default function ContactUs() {

  const [formData, setFormData] = useState<FormData>({
    full_name: '', email: '', phone: '', subject: '',
    select_department: '', message: '', consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  // ✅ INPUT HANDLER
  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // ✅ SELECT HANDLER (FIXED)
  const handleDepartmentChange = (event: SelectChangeEvent) => {
    const value = event.target.value;

    setFormData(prev => ({ ...prev, select_department: value }));

    const dept = departments.find(d => d.id.toString() === value);
    setSelectedDepartment(dept || null);

    if (errors.select_department) {
      setErrors(prev => ({ ...prev, select_department: undefined }));
    }
  };

  // ✅ VALIDATION
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.full_name) newErrors.full_name = "Name required";
    if (!formData.email) newErrors.email = "Email required";
    if (!formData.phone) newErrors.phone = "Phone required";
    if (!formData.subject) newErrors.subject = "Subject required";
    if (!formData.select_department) newErrors.select_department = "Select select_department";
    if (!formData.message) newErrors.message = "Message required";
    if (!formData.consent) newErrors.consent = "Accept terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT HANDLER (FIXED)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/post-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          mobile_number: formData.phone,
          subject: formData.subject,
          select_department: formData.select_department,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);

        setFormData({
          full_name: '', email: '', phone: '', subject: '',
          select_department: '', message: '', consent: false,
        });

        setSelectedDepartment(null);
        setErrors({});
      }

    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5">Contact Form</Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={1}>

            <Grid item xs={6}>
              <TextField label="Name" fullWidth value={formData.full_name}
                onChange={handleInputChange('full_name')} />
            </Grid>

            <Grid item xs={6}>
              <TextField label="Email" fullWidth value={formData.email}
                onChange={handleInputChange('email')} />
            </Grid>

            <Grid item xs={6}>
              <TextField label="Phone" fullWidth type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')} />
            </Grid>

            <Grid item xs={6}>
              <TextField label="Subject" fullWidth
                value={formData.subject}
                onChange={handleInputChange('subject')} />
            </Grid>

            {/* ✅ FIXED SELECT */}
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.select_department}>
                <InputLabel>Select Department</InputLabel>
                <Select
                  value={formData.select_department}
                  onChange={handleDepartmentChange}
                  label="Select Department"
                >
                  <MenuItem value=""><em>Select</em></MenuItem>
                  {departments.map(d => (
                    <MenuItem key={d.id} value={d.id.toString()}>
                      {d.full_name}
                    </MenuItem>
                  ))}
                </Select>
                {errors.select_department && <FormHelperText>{errors.select_department}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField label="Message" multiline rows={4} fullWidth
                value={formData.message}
                onChange={handleInputChange('message')} />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.consent}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      consent: e.target.checked
                    }))}
                  />
                }
                label="Agree to terms"
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </Grid>

          </Grid>
        </form>
      </Paper>

      {/* SUCCESS */}
      <Snackbar open={submitted} autoHideDuration={4000}>
        <Alert severity="success">Submitted successfully</Alert>
      </Snackbar>
    </Container>
  );
}