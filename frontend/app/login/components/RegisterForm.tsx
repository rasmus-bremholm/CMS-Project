"use client";

import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

interface Props {
  onSuccess: () => void;
}

export default function RegisterForm({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // här kommer Strapi registring API senare
    console.log("Skapa konto:", { username, email, password });

    onSuccess();
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ange användarnamn"
          fullWidth
          margin="normal"
          value={username}
          onChange={event => setUsername(event.target.value)}
          required
        />
        <TextField
          label="Ange e-post"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <TextField
          label="Ange lösenord"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Skapa konto
        </Button>
      </form>
    </Container>
  );
}
