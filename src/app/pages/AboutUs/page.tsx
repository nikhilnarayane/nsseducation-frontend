'use client'
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { teamMembers } from '../../util/teamMembers';
const AboutUs = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#1976d2',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Navkranti Education
          </Typography>
          <Typography variant="h5">
            Empowering students through quality education since 2005
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <HistoryEduIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h5">
                  Our Mission
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                To provide accessible, high-quality education that equips students with the knowledge, 
                skills, and values needed to succeed in their chosen careers and contribute positively to society.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h5">
                  Our Vision
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                To be the leading educational institution recognized for excellence in teaching, 
                innovation in learning, and commitment to student success across diverse disciplines.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* About Content */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography variant="h5" align="center" gutterBottom>
            Our Story
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ mt: 4 }}>
            Founded in 2005, EduLearn began as a small institute with a big vision: to make quality 
            education accessible to all. What started with just three courses and a handful of students 
            has now grown into a premier educational institution offering 12+ career-oriented programs 
            across multiple disciplines.
          </Typography>

          <Typography variant="body1" paragraph>
            Over the years, we have consistently adapted to the changing educational landscape, 
            incorporating the latest teaching methodologies, industry-relevant curriculum, and 
            state-of-the-art infrastructure. Our commitment to excellence has resulted in a 
            95% placement rate, with our alumni working in leading organizations across the globe.
          </Typography>

          <Typography variant="body1" paragraph>
            At EduLearn, we believe education is not just about acquiring knowledge but about 
            transforming lives. Our holistic approach focuses on academic excellence, skill 
            development, and personal growth, ensuring our students are well-prepared for the 
            challenges of the professional world.
          </Typography>
        </Container>
      </Box>

      {/* Statistics */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          By The Numbers
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h2" color="primary">18+</Typography>
              <Typography variant="h6">Years Experience</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h2" color="primary">5000+</Typography>
              <Typography variant="h6">Students Trained</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h2" color="primary">95%</Typography>
              <Typography variant="h6">Placement Rate</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h2" color="primary">50+</Typography>
              <Typography variant="h6">Expert Faculty</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Leadership Team */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container>
          <Typography variant="h5" align="center" gutterBottom>
            Our Leadership Team
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <Avatar
                      src={member.avatar}
                      sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                    />
                    <Typography variant="subtitle1" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {member.qualification}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default AboutUs;