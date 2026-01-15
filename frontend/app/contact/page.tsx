"use client";

import { Container, Stack } from "@mui/material";
import BackButton from "../checkout/components/Buttons/BackButton";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <BackButton />
      <Hero />

      <Stack spacing={4}>
        <ContactForm />
      </Stack>
    </Container>
  );
}
