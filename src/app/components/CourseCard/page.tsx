'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardActionArea,
  Chip,
} from '@mui/material';
import Link from 'next/link';

// ✅ Course type
interface Course {
  id: string | number;
  title: string;
  description: string;
  duration: string;
  fee: string | number;
  image?: string;
}

type CourseCardProps = {
  course?: Course; // optional to prevent prerender errors
};

const defaultImage = '/nsslogo.jpeg';
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // 🔹 Return null if course is undefined
  if (!course) return null;

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Clickable Card */}
      <CardActionArea component={Link} href={`/course/${course.id}`}>
        <CardMedia
          component="img"
          image={course.image || defaultImage}
          alt={course.title}
           sx={{
              height: 140,
              width: "100%",
              filter: "grayscale(100%)",
              objectFit: "contain",
              opacity: 0.5,
            }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6">
            {course.title}
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 2 }}>
            {course.description}
          </Typography>

          <Chip label={course.duration} color="primary" size="small" sx={{ mr: 1 }} />
          <Chip label={`₹${course.fee}`} color="secondary" size="small" />
        </CardContent>
      </CardActionArea>

      {/* Action Buttons */}
      <CardActions>
        <Button size="small" component={Link} href={`/course/${course.id}`}>
          Enroll Now
        </Button>

        <Button size="small" color="secondary" component={Link} href={`/courses/${course.id}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
