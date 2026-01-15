"use client";

import { Container } from "@mui/material";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Hero />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <ContactForm />
      </Container>
    </>
  );
}
