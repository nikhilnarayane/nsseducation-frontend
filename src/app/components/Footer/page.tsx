'use client'
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
    ListItem,
    ListItemText,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
import { allCourses } from '../../util/coursesList';
const Footer = () => {
    const pages = [
    { name: "Insert", path: "/Insert" },
    { name: "User List", path: "/UserList" },
    { name: "Enrollments", path: "/Enrollments" },
  ];
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1976d2',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
             Navkranti Education
            </Typography>
            <Typography variant="body2">
              Empowering students through quality education since 2005.
              Your success is our mission.
            </Typography>
             {pages.map((page) => (
                      <ListItem key={page.name} disablePadding>
                        <Link
                          href={page.path}
                          style={{ width: "100%", textDecoration: "none", color: "inherit" }}
                        >
                          <ListItemText primary={page.name} sx={{ textAlign: "center" }} />
                        </Link>
                      </ListItem>
                    ))}
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Medical Courses
            </Typography>
            {allCourses.filter(course => course.category === "Medical")
              .map(course => (
               
                <Link 
                  key={course.id} 
                  href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`} 
                  color="inherit"
                >
                 <Typography variant="body2" gutterBottom>{course.title}</Typography>
                </Link>
                
            ))}
           
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
             Technical Courses
            </Typography>
            {allCourses.filter(course => course.category === "Technical")
              .map(course => (
               
                <Link 
                  key={course.id} 
                  href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`} 
                  color="inherit"
                >
                  <Typography variant="body2" gutterBottom>{course.title}</Typography>
                </Link>
                
            ))}
              {allCourses.filter(course => course.category === "Arts" || course.category === "Management" || course.category === "Design")
              .map(course => (
               
                <Link 
                  key={course.id} 
                  href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`} 
                  color="inherit">
                  <Typography variant="body2" gutterBottom>{course.title}</Typography>
                </Link>
            ))}
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Dasara Chowk, Nr. Chh. Shivaji Maharaj Statue,
            </Typography>
            <Typography variant="body2" gutterBottom>
              Bhadgaon Road, Gadhinglaj, Dist. Kolhapur 416502.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: 02327-295001,+91-8605270040, +91-8625954938, +91-9146085001
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@nsseducation.com, admissions@nsseducation.com
            </Typography>
            
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="linkedin" color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="youtube" color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', mt: 4, pt: 3 }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} nsseduction. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            <Link color="inherit" href="#" >
              Privacy Policy
            </Link>
            |
            <Link color="inherit" href="#" >
              Terms of Service
            </Link>
            |
            <Link color="inherit" href="#" >
              Disclaimer
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;