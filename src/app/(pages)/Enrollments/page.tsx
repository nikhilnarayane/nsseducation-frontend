"use client";
import { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText, Container, CircularProgress } from "@mui/material";

type User = {
  id: number;
  name: string;
  mobile: string;
  email: string;
};

export default function UsersList() {
const [enrollments, setEnrollments] = useState<any[]>([]);

useEffect(() => {
  fetch("/api/course-enrollments")
    .then(res => res.json())
    .then(data => setEnrollments(data))
    .catch(err => console.error(err));
}, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          User List
        </Typography>

        {enrollments.length === 0 ? (
          <CircularProgress />
        ) : enrollments.length === 0 ? (
          <Typography>No enrollments found.</Typography>
        ) : (
          <List>
            {enrollments.map(enrollment => (
              <ListItem key={enrollment.id} divider>
                <ListItemText
                  primary={enrollment.name}
                  secondary={`Course: ${enrollment.course_title} | Mobile: ${enrollment.mobile_number} | Email: ${enrollment.email}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}