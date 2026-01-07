"use client";

import { Container, Stack, Typography } from "@mui/material";
import BackButton from "./components/Buttons/BackButton";
import ContactCard from "./components/Cards/ContactCard";

export default function CheckoutPage() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Stack>
        <BackButton />
        <Typography variant="h2" align="center" sx={{ fontSize: "1.75rem" }}>
          Checkout
        </Typography>
      </Stack>
      <Stack>
        <ContactCard />
      </Stack>
    </Container>
  );
}
