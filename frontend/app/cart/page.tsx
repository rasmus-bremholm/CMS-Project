"use client";

import { Container } from "@mui/material";
import Cart from "./components/Cart";

export default function CartPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Cart />
    </Container>
  );
}
