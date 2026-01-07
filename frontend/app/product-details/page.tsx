"use client";

import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function ProductDetails() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ aspectRatio: "1/1", position: "relative", width: "100%" }}>
            <Image fill src="/example.webp" alt="Alt text" />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack sx={{ color: "white" }}>
            <Typography component="h1" variant="h4" fontWeight="bold">
              Produkttitel
            </Typography>

            <Typography>100:-</Typography>

            <Typography>
              Description description description description description
              description description description.
            </Typography>

            <Typography>I lager</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
