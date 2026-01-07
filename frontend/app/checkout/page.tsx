"use client";

import { Container, Stack, Typography } from "@mui/material";

export default function CheckoutPage() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack>
        <Typography variant="h2" align="center" sx={{ fontSize: "1.75rem" }}>
          Checkout
        </Typography>
      </Stack>
    </Container>
  );
}
