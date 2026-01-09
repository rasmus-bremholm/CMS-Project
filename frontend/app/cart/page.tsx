"use client";

import { Container } from "@mui/material";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";

export default function CartPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* <CartItem item={undefined} /> */}
      <Cart />
    </Container>
  );
}
