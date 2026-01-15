"use client";

import { Container } from "@mui/material";
import BackButton from "../checkout/components/Buttons/BackButton";
import Hero from "./components/Hero";

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <BackButton />
      <Hero />
    </Container>
  );
}
