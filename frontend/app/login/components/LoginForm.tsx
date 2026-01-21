"use client";

import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import { loginUser } from "@/app/lib/utils/strapi";

interface Props {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const data = await loginUser(email, password);

      localStorage.setItem("strapi_jwt", data.jwt);

      console.log("Inloggning lyckades:", data.user);
      onSuccess();
    } catch (error: any) {
      console.error("Fel vid login:", error.message);
      alert(error.message);
    }
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
