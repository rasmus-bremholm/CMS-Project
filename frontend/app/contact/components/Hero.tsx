"use client";

import BackButton from "@/app/checkout/components/Buttons/BackButton";
import { Box, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "brand.latte",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box mb={4}>
          <BackButton />
        </Box>

        <Box textAlign="center">
          <Typography variant="h3" mb={2}>
            Get in Touch
          </Typography>
          <Typography color="text.secondary">
            Have a question or just want to say hello? We&apos;d love to hear
            from you.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
