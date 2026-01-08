"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BackButton from "./components/Buttons/BackButton";
import ContactCard from "./components/Cards/ContactCard";
import AddressCard from "./components/Cards/AddressCard";

export default function CheckoutPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Stack spacing={4}>
              <ContactCard />
              <AddressCard />
            </Stack>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
}
