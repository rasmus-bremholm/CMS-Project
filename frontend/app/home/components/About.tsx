import Link from "next/link";
import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { rootUrl } from "@/app/lib/utils/strapi";

// Types
import { AboutTypes } from "@/types/about";

interface AboutProps {
  data: AboutTypes;
}

export default function About({ data }: AboutProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h2" component="h2">
              {data.title}
            </Typography>
            <Typography variant="body1" component="p">
              {data.body_text}
            </Typography>
            <Typography
              component={Link}
              href={`${data.button_url}`}
              sx={{
                color: "inherit",
                fontSize: 16,
                fontWeight: "bold",
                textDecoration: "none",
                textTransform: "uppercase",
                "&:hover": { color: "brand.darkCoffee" },
              }}
            >
              {data.button_label}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ aspectRatio: "3/2", position: "relative", height: 400 }}>
            <Image
              fill
              src={`${rootUrl}${data.image.url}`}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={data.image.alternativeText}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
