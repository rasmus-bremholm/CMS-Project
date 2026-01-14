"use client";

import { Container } from "@mui/material";
import Cart from "./components/Cart";
import BackButton from "../checkout/components/Buttons/BackButton";

export default function CartPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <BackButton />
      <Cart />
    </Container>
  );
}
