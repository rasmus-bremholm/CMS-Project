import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

// Types
import { AboutTypes } from "@/types/about";

interface AboutProps {
	data: AboutTypes;
}


export default function About({ data }: AboutProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: 'flex-start' }}>
            <Typography variant="h2" component="h2">
              Om vårt kaffe
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Button>Se vårt sortiment</Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ aspectRatio: "3/2", position: "relative", height: 400 }}>
            <Image fill src="/about-our-coffee.jpg" alt="Alt text" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
