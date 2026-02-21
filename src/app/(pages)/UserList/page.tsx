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
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          User List
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : users.length === 0 ? (
          <Typography>No users found.</Typography>
        ) : (
          <List>
            {users.map(user => (
              <ListItem key={user.id} divider>
                <ListItemText
                  primary={user.name}
                  secondary={`Mobile: ${user.mobile} | Email: ${user.email}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
}