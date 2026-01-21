"use client";

import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import { registerUser } from "@/app/lib/utils/strapi";

interface Props {
  onSuccess: () => void;
}

export default function RegisterForm({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const data = await registerUser(username, email, password);

      localStorage.setItem("strapi_jwt", data.jwt);

      console.log("Registrering lyckades:", data.user);
      onSuccess();
    } catch (error: any) {
      console.error("Registreringsfel:", error.message);
      alert(error.message);
    }
  }
  // kl 15:39 i youtubevideon

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
