"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { getCheckoutData } from "@/app/lib/utils/strapi";
import { Container, Grid, Snackbar, Stack, Typography } from "@mui/material";
import BackButton from "../components/BackButton";
import ContactCard from "./components/Cards/ContactCard";
import AddressCard from "./components/Cards/AddressCard";
import PaymentCard from "./components/Cards/PaymentCard";
import OrderSummary from "./components/OrderSummary";

export default function CheckoutWrapper() {
  const { locale } = useLanguage();
  const [checkout, setCheckout] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCheckoutData(locale)
      .then(data => setCheckout(data))
      .finally(() => setLoading(false));
  }, [locale]);

  if (loading) return <div>Loading...</div>;
  if (!checkout) return <div>No content available</div>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSnackbarOpen(true);

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <BackButton />

      <Typography variant="h4" fontWeight={600} mb={4}>
        {checkout?.title ?? ""}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          {/* LEFT COLUMN */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={4}>
              <ContactCard data={checkout} />
              <AddressCard data={checkout} />
              <PaymentCard data={checkout} />
            </Stack>
          </Grid>

          {/* RIGHT COLUMN */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <OrderSummary data={checkout} />
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        message={
          locale === "sv"
            ? "Din order har lagts!"
            : "Your order has been placed!"
        }
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </Container>
  );
}
