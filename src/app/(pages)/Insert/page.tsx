"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";

type FormData = {
  name: string;
  mobile: string;
  email: string;
};
export default function Home() {
  const [form, setForm] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 debugger;
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("User Added!");
    setForm({ name: "", mobile: "", email: "" });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Add User
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Mobile"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary">
            Add User
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
