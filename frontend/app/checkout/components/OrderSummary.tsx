"use client";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PayButton from "./Buttons/PayButton";
import { useCart } from "@/app/cart/lib/CartContext";

export default function OrderSummary() {
  const { items, subtotal, shippingCost, total } = useCart();

  if (items.length === 0) {
    return (
      <Card>
        <CardContent>
          <Typography>Your cart i empty</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ position: "sticky", top: 96 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Order Summary
        </Typography>

        <Stack spacing={1.5} mb={2}>
          {items.map(item => (
            <Box
              key={item.product.id}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="body2" color="text.secondary">
                {item.product.title} x {item.quantity}
              </Typography>
              <Typography variant="body2">
                ${(item.product.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography color="text.secondary">Subtotal</Typography>
            <Typography>${subtotal.toFixed(2)}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography color="text.secondary">Shipping</Typography>
            <Typography>
              {shippingCost === 0 ? "Free" : `$${shippingCost}`}
            </Typography>
          </Box>

          <Divider />

          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={600}>Total</Typography>
            <Typography fontWeight={600} color="brand.coffeeBean">
              ${total.toFixed(2)}
            </Typography>
          </Box>
        </Stack>

        <PayButton total={total} />
      </CardContent>
    </Card>
  );
}
