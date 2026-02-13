'use client';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Alert,
  Snackbar,
  Card,
  CardContent,
  InputAdornment,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Person as PersonIcon,
  Subject as SubjectIcon,
  Message as MessageIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

interface Department {
  id: number;
  name: string;
  email: string;
  phone: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  department: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  department?: string;
  message?: string;
  consent?: string;
}

const departments: Department[] = [
  {
    id: 1,
    name: 'Admissions',
    email: 'admissions@edulearn.com',
    phone: '+91 9876543211',
    description: 'For admission inquiries, course details, and enrollment',
  },
  {
    id: 2,
    name: 'Academic',
    email: 'academic@edulearn.com',
    phone: '+91 9876543212',
    description: 'Course curriculum, faculty, and academic schedules',
  },
  {
    id: 3,
    name: 'Examination',
    email: 'examination@edulearn.com',
    phone: '+91 9876543213',
    description: 'Exam schedules, results, and certificates',
  },
  {
    id: 4,
    name: 'Placement',
    email: 'placement@edulearn.com',
    phone: '+91 9876543214',
    description: 'Campus placements, internships, and career guidance',
  },
  {
    id: 5,
    name: 'Accounts',
    email: 'accounts@edulearn.com',
    phone: '+91 9876543215',
    description: 'Fee structure, payments, and scholarships',
  },
  {
    id: 6,
    name: 'Student Support',
    email: 'support@edulearn.com',
    phone: '+91 9876543216',
    description: 'Hostel facilities, transportation, and student welfare',
  },
];

const ContactUs: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validate phone number
  const validatePhone = (phone: string): boolean => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string | boolean } }
  ) => {
    const value = 'checked' in event.target ? event.target.checked : event.target.value;
    
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  // Handle department change
  const handleDepartmentChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    
    setFormData(prev => ({
      ...prev,
      department: value,
    }));

    if (errors.department) {
      setErrors(prev => ({
        ...prev,
        department: undefined,
      }));
    }

    // Find and set selected department
    if (value) {
      const dept = departments.find(d => d.id.toString() === value);
      setSelectedDepartment(dept || null);
    } else {
      setSelectedDepartment(null);
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone.trim())) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Department validation
    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    } else if (formData.message.trim().length > 500) {
      newErrors.message = 'Message cannot exceed 500 characters';
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Contact form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        message: '',
        consent: false,
      });
      setSelectedDepartment(null);
      setErrors({});
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        consent: 'Failed to submit form. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update selected department when department changes
  useEffect(() => {
    if (formData.department) {
      const dept = departments.find(d => d.id.toString() === formData.department);
      setSelectedDepartment(dept || null);
    } else {
      setSelectedDepartment(null);
    }
  }, [formData.department]);

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSubmitted(false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6">
            We're here to help. Get in touch with us!
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Left Column - Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>

            {/* Contact Cards */}
            <Box sx={{ mt: 4 }}>
              <Card sx={{ mb: 2, bgcolor: 'primary.light', color: 'white' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2 }} />
                    <Typography variant="h6">Call Us</Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    +91 9876543210
                  </Typography>
                  <Typography variant="body2">
                    Monday to Friday: 9:00 AM - 6:00 PM
                  </Typography>
                  <Typography variant="body2">
                    Saturday: 10:00 AM - 4:00 PM
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ mb: 2, bgcolor: 'secondary.light', color: 'white' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ mr: 2 }} />
                    <Typography variant="h6">Email Us</Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    info@nsseducation.com
                  </Typography>
                  <Typography variant="body2">
                    We typically respond within 24 hours
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ mb: 2, bgcolor: 'success.light', color: 'white' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationIcon sx={{ mr: 2 }} />
                    <Typography variant="h6">Visit Us</Typography>
                  </Box>
                   <Typography variant="body1" sx={{ my: 2 }}>Office Kolhapur</Typography>
                  <Typography variant="body2">
                    Navkranti Education Society, Dasara Chowk, Nr.<br />
                    Chh. Shivaji Maharaj Statue, Bhadgaon Road,<br />
                    Gadhinglaj, Dist. Kolhapur 416502.
                  </Typography>
                  <Typography variant="body1" sx={{ my: 2 }}>Office Pune</Typography>
                  <Typography variant="body2">
                    Office Number 807 , floor 8, Gera imperium right,<br />
                    opposite Wipro Circle, Rajiv Gandhi Infotech Park<br /> 
                     phase 2, Hinjewadi Pune 41105
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Quick Contact */}
            <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<PhoneIcon />}
                  sx={{ mb: 1 }}
                  href="tel:+918605270040"
                >
                  Call Now
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<EmailIcon />}
                  sx={{ mb: 1 }}
                  href="mailto:info@nsseducation.com"
                >
                  Send Email
                </Button>
               
                <Button
                  variant="contained"
                   fullWidth
                  startIcon={<LocationIcon />}
                  href="https://maps.google.com"
                  target="_blank"
                  sx={{ mr: 2 }}
                >
                  Open in Google Maps
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column - Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Send us a Message
              </Typography>
              
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  {/* Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size='small'
                      label="Full Name"
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      error={!!errors.name}
                      helperText={errors.name}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color={errors.name ? "error" : "action"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size='small'
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color={errors.email ? "error" : "action"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      size='small'
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon color={errors.phone ? "error" : "action"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {/* Subject */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      size='small'
                      value={formData.subject}
                      onChange={handleInputChange('subject')}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SubjectIcon color={errors.subject ? "error" : "action"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {/* Department */}
                  <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.department}>
                      <InputLabel>Select Department</InputLabel>
                      <Select
                        value={formData.department}
                        // onChange={handleDepartmentChange}
                        label="Select Department"
                      >
                        <MenuItem value="">
                          <em>Select a department</em>
                        </MenuItem>
                        {departments.map((dept) => (
                          <MenuItem key={dept.id} value={dept.id.toString()}>
                            {dept.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.department && (
                        <FormHelperText>
                          <ErrorIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          {errors.department}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  {/* Selected Department Info */}
                  {selectedDepartment && (
                    <Grid item xs={12}>
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          bgcolor: 'info.light',
                          borderLeft: '4px solid',
                          borderColor: 'primary.main',
                        }}
                      >
                        <Typography variant="subtitle1" gutterBottom>
                          <strong>{selectedDepartment.name} Department</strong>
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {selectedDepartment.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                          <Typography variant="body2">
                            <EmailIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                            {selectedDepartment.email}
                          </Typography>
                          <Typography variant="body2">
                            <PhoneIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                            {selectedDepartment.phone}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  )}

                  {/* Message */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      size='small'
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      error={!!errors.message}
                      helperText={
                        errors.message || 
                        `${formData.message.length}/500 characters`
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                            <MessageIcon color={errors.message ? "error" : "action"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {/* Consent Checkbox */}
                  <Grid item xs={12}>
                    <FormControl error={!!errors.consent}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formData.consent}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              consent: e.target.checked
                            }))}
                            color={errors.consent ? "error" : "primary"}
                          />
                        }
                        label={
                          <Typography variant="body2" color={errors.consent ? "error" : "text.secondary"}>
                            I agree to receive responses to my inquiry via email or phone. I understand that EduLearn may contact me regarding my message.
                          </Typography>
                        }
                      />
                      {errors.consent && (
                        <FormHelperText>
                          <ErrorIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          {errors.consent}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="medium"
                      fullWidth
                      startIcon={<SendIcon />}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
            <Grid item xs={12} md={12} sx={{ py: 4 }}>
                {/* Map Placeholder */}
                <Box
                  sx={{
                    height: '100%',
                    minHeight: 300,
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <iframe style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.502118515449!2d73.7184611!3d18.596472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb98e08c485%3A0x88605aadb7c213a6!2sGera&#39;s%20Imperium%20Rise!5e0!3m2!1sen!2sin!4v1770959898338!5m2!1sen!2sin" 
                    width="750" height="400" loading="lazy"></iframe>

                    {/* <LocationIcon sx={{ fontSize: 60, color: 'grey.400', mb: 2 }} /> */}
                    {/* <Typography variant="h6" color="grey.600">
                      Interactive Map
                    </Typography>
                    <Typography variant="body2" color="grey.500">
                      Google Maps integration would appear here
                    </Typography> */}
                    {/* <Button
                      variant="outlined"
                      sx={{ mt: 2 }}
                      href="https://maps.app.goo.gl/PQRmQhKTDmrKzjas5"
                      target="_blank"
                    >
                      View Full Map
                    </Button> */}
                  </Box>
                </Box>
              </Grid>
          </Grid>
        </Grid>

      </Container>



      {/* Success Snackbar */}
      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          icon={<CheckCircleIcon fontSize="inherit" />}
          sx={{ width: '100%' }}
        >
          Your message has been sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;