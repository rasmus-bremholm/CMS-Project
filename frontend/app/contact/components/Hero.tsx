"use client";

import { Box, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "brand.latte",
        py: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={600} mb={2}>
          Get in Touch
        </Typography>
        <Typography color="text.secondary">
          Have a question or just want to say hello? We&apos;d love to hear from
          you.
        </Typography>
      </Container>
    </Box>
  );
}
