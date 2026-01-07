"use client";

import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function ProductDetails() {
	const product = {
		title: 'Arvid Nordquist, Classic Mellan',
		price: 89,
		description: 'Elegant smak med nötiga toner. Lång och frisk eftersmak. Mellan är certifierat av Rainforest Alliance.',
		inStock: true
	}

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
              {product.title}
            </Typography>

            <Typography>{product.price}:-</Typography>

            <Typography>
              {product.description}
            </Typography>

            <Typography>
							{product.inStock ? 'I lager' : 'Ej i lager'}
						</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
