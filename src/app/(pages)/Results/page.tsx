'use client';
import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
} from "@mui/material";

/* =======================
   TYPES
======================= */

interface Subject {
  name: string;
  grade: string;
  marks: number;
}

interface Result {
  prn: string;
  name: string;
  course: string;
  semester: string;
  subjects: Subject[];
  totalMarks: number;
  percentage: number;
  cgpa: number;
  result: string;
  examDate: string;
  publishedDate: string;
}

/* =======================
   MOCK DATA
======================= */

const mockResults: Result[] = [
  {
    prn: "1234567890",
    name: "Rohit Bhumkar",
    course: "B.Sc Computer Science",
    semester: "Semester 6",
    subjects: [
      { name: "Operating System", grade: "A", marks: 78 },
      { name: "Database Management", grade: "A+", marks: 85 },
      { name: "Software Engineering", grade: "B+", marks: 72 },
    ],
    totalMarks: 235,
    percentage: 78.33,
    cgpa: 8.1,
    result: "PASS",
    examDate: "March 2025",
    publishedDate: "15 June 2025",
  },
];

/* =======================
   COMPONENT
======================= */

const ResultPage: React.FC = () => {
  const [prn, setPrn] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    setResult(null);

    const foundResult = mockResults.find(
      (r) => r.prn === prn
    );

    if (foundResult) {
      setResult(foundResult);
    } else {
      setError("No result found for the given PRN and Date of Birth");
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 700, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        University Result Portal
      </Typography>

      <TextField
        label="PRN Number"
        fullWidth
        size='small'
        margin="normal"
        value={prn}
        onChange={(e) => setPrn(e.target.value)}
      />

      <TextField
        label="Date of Birth"
        type="date"
        size='small'
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSearch}
      >
        View Result
      </Button>

      {error && (
        <Typography color="error" mt={2}>
          {error}
        </Typography>
      )}

      {result && (
        <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
          <Typography variant="h6">Result Details</Typography>

          <Typography>Name: {result.name}</Typography>
          <Typography>PRN: {result.prn}</Typography>
          <Typography>Course: {result.course}</Typography>
          <Typography>Semester: {result.semester}</Typography>

          <Typography mt={2} fontWeight="bold">
            Subjects:
          </Typography>

          {result.subjects.map((sub, index) => (
            <Typography key={index}>
              {sub.name} — {sub.marks} Marks ({sub.grade})
            </Typography>
          ))}

          <Typography mt={2}>
            Total Marks: {result.totalMarks}
          </Typography>
          <Typography>
            Percentage: {result.percentage}%
          </Typography>
          <Typography>CGPA: {result.cgpa}</Typography>
          <Typography>
            Result Status: {result.result}
          </Typography>
          <Typography>
            Exam Date: {result.examDate}
          </Typography>
          <Typography>
            Published On: {result.publishedDate}
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default ResultPage;