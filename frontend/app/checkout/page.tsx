"use client";

import { Container, Grid, Stack, Typography } from "@mui/material";
import BackButton from "./components/Buttons/BackButton";
import ContactCard from "./components/Cards/ContactCard";
import AddressCard from "./components/Cards/AddressCard";
import PaymentCard from "./components/Cards/PaymentCard";
import OrderSummary from "./components/OrderSummary";

export default function CheckoutPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <BackButton />

      <Typography variant="h3" color="white" sx={{ mb: 4 }}>
        Checkout
      </Typography>

      <form onSubmit={handleSubmit}>
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
      </form>
    </Container>
  );
}
