"use client";

import BackButton from "@/app/components/BackButton";
import { Box, Container, Typography } from "@mui/material";

export default function Hero({ data }: { data?: any }) {
  const hero = data?.hero;

  console.log("data hero", data.hero);

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
            {hero?.title ?? ""}
          </Typography>

          <Typography color="text.secondary">{hero?.subtitle ?? ""}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
