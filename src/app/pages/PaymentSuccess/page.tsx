'use client'
import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Grid,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PaymentSuccess = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 6, textAlign: 'center' }}>
        <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 3 }} />

        <Typography variant="h5" gutterBottom>
          Payment Successful!
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Your course enrollment has been confirmed
        </Typography>

        <Paper elevation={1} sx={{ p: 4, mb: 4, textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            Enrollment Details:
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body2">Enrollment ID:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2"><strong>EN2024001</strong></Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2">Course:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2"><strong>Hotel Management</strong></Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2">Duration:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2"><strong>2 Years</strong></Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2">Amount Paid:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2"><strong>₹85,000</strong></Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body2">Payment Date:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>{new Date().toLocaleDateString()}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="body1" paragraph>
          A confirmation email has been sent to your registered email address with
          all the enrollment details and next steps.
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          Our admission team will contact you within 24-48 hours regarding course commencement details.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            onClick={() => window.location.href = '/courses'}
          >
            Browse More Courses
          </Button>

          <Button
            variant="outlined"
            onClick={() => window.location.href = '/'}
          >
            Go to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PaymentSuccess;
