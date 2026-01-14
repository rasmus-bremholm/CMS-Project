"use client";

import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

interface Props {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    console.log("Logga in:", { email, password });
    // här kommer Strapi login API

    onSuccess();
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-post"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <TextField
          label="Lösenord"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Logga in
        </Button>
      </form>
    </Container>
  );
}
