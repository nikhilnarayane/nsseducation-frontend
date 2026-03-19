"use client";
import { useEffect, useState } from "react";
import { Paper, Typography, List, ListItem, ListItemText, Container, CircularProgress } from "@mui/material";

// type User = {
//   id: number;
//   name: string;
//   mobile: string;
//   email: string;
// };

interface Course {
  id: number;
  course_duration: string;
  course_title: string;
  email: string;
  mobile_number: string;
  name: number;
  isDate:string // 0 or 1 from DB
}

export default function UsersList() {
const [enrollments, setEnrollments] = useState<Course[]>([]);

useEffect(() => {
        async function fetchCourses() {
            try {
              const res = await fetch("/api/course-enrollments");
              const data = await res.json();
              debugger
              const setDat: Course[] = data[0]; // ✅ now correct
              console.log("data-get-courses---->", setDat);
              setEnrollments(setDat); // ✅ no error
            } catch (err) {
              console.error(err);
            } finally {
              // setLoading(false);
            }
          }
        fetchCourses();   
  // fetch("/api/course-enrollments")
  //   .then(res => res.json())
  //   .then(data => setEnrollments(data))
  //   .catch(err => console.error(err));
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
                  secondary={`Course: ${enrollment.course_title} | Mobile: ${enrollment.mobile_number} | Email: ${enrollment.email} | Date:${enrollment.isDate}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}