"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BackButton from "./components/Buttons/BackButton";
import ContactCard from "./components/Cards/ContactCard";
import AddressCard from "./components/Cards/AddressCard";
import PaymentCard from "./components/Cards/PaymentCard";
import OrderSummary from "./components/OrderSummary";

export default function CheckoutPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ minHeight: "100vh", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Back to cart */}
        <BackButton />

        <Typography variant="h4" align="left" mb={2} sx={{ fontSize: "1.75rem" }}>
          Checkout
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* LEFT COLUMN */}
            <Grid size={{ xs: 12, lg: 8 }}>
              <Stack spacing={4}>
                <ContactCard />
                <AddressCard />
                <PaymentCard />
              </Stack>
            </Grid>

            {/* RIGHT COLUMN */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <OrderSummary />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
